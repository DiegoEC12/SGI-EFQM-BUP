CREATE TYPE public.app_role AS ENUM ('admin','directivo','lider','responsable','auditor','lector');

CREATE TABLE public.criterios (id text PRIMARY KEY, nombre text NOT NULL, pilar text NOT NULL, descripcion text NOT NULL DEFAULT '');
CREATE TABLE public.procesos (id text PRIMARY KEY, codigo text NOT NULL, nombre text NOT NULL, criterio_id text NOT NULL REFERENCES public.criterios(id), area text NOT NULL, lider text NOT NULL DEFAULT '');
CREATE TABLE public.subprocesos (id text PRIMARY KEY, proceso_id text NOT NULL REFERENCES public.procesos(id) ON DELETE CASCADE, nombre text NOT NULL);
CREATE TABLE public.procedimientos (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, subproceso_id text NOT NULL REFERENCES public.subprocesos(id) ON DELETE CASCADE, nombre text NOT NULL, version text NOT NULL DEFAULT 'v1.0', estado text NOT NULL DEFAULT 'Borrador', actualizado text NOT NULL DEFAULT to_char(now(),'YYYY-MM-DD'));
CREATE TABLE public.documentos (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, subproceso_id text NOT NULL REFERENCES public.subprocesos(id) ON DELETE CASCADE, nombre text NOT NULL, tipo text NOT NULL DEFAULT 'Formato', version text NOT NULL DEFAULT 'v1.0', estado text NOT NULL DEFAULT 'Borrador', actualizado text NOT NULL DEFAULT to_char(now(),'YYYY-MM-DD'));
CREATE TABLE public.actividades (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, subproceso_id text NOT NULL REFERENCES public.subprocesos(id) ON DELETE CASCADE, nombre text NOT NULL, responsable text NOT NULL DEFAULT '', avance numeric NOT NULL DEFAULT 0, estado text NOT NULL DEFAULT 'Planificada');
CREATE TABLE public.indicadores (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, codigo text NOT NULL, subproceso_id text NOT NULL REFERENCES public.subprocesos(id) ON DELETE CASCADE, nombre text NOT NULL, formula text NOT NULL DEFAULT '', unidad text NOT NULL DEFAULT '%', frecuencia text NOT NULL DEFAULT 'Anual', polaridad text NOT NULL DEFAULT 'Ascendente', responsable text NOT NULL DEFAULT '', peso numeric NOT NULL DEFAULT 1);
CREATE TABLE public.metas (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, indicador_id text NOT NULL REFERENCES public.indicadores(id) ON DELETE CASCADE, anio int NOT NULL, valor numeric NOT NULL DEFAULT 100);
CREATE TABLE public.registros (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, indicador_id text NOT NULL REFERENCES public.indicadores(id) ON DELETE CASCADE, anio int NOT NULL, periodo text NOT NULL, valor numeric NOT NULL, fecha text NOT NULL DEFAULT to_char(now(),'YYYY-MM-DD'), registrado_por text NOT NULL DEFAULT '');
CREATE TABLE public.evidencias (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, registro_id text NOT NULL REFERENCES public.registros(id) ON DELETE CASCADE, nombre text NOT NULL, tipo text NOT NULL DEFAULT 'PDF', subido_por text NOT NULL DEFAULT '', fecha text NOT NULL DEFAULT to_char(now(),'YYYY-MM-DD'));
CREATE TABLE public.usuarios_sgi (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, nombre text NOT NULL, correo text NOT NULL UNIQUE, rol text NOT NULL DEFAULT 'Responsable de área', area text NOT NULL DEFAULT '', activo boolean NOT NULL DEFAULT true);
CREATE TABLE public.auditoria (id text PRIMARY KEY DEFAULT gen_random_uuid()::text, fecha text NOT NULL DEFAULT to_char(now(),'YYYY-MM-DD HH24:MI'), usuario text NOT NULL, accion text NOT NULL, modulo text NOT NULL, detalle text NOT NULL DEFAULT '');
CREATE TABLE public.profiles (id uuid PRIMARY KEY, nombre text, correo text NOT NULL, avatar_url text, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.user_roles (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL, role public.app_role NOT NULL, UNIQUE(user_id, role));

GRANT SELECT, INSERT, UPDATE, DELETE ON public.criterios, public.procesos, public.subprocesos, public.procedimientos, public.documentos, public.actividades, public.indicadores, public.metas, public.registros, public.evidencias, public.usuarios_sgi, public.auditoria, public.profiles TO authenticated;
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.criterios, public.procesos, public.subprocesos, public.procedimientos, public.documentos, public.actividades, public.indicadores, public.metas, public.registros, public.evidencias, public.usuarios_sgi, public.auditoria, public.profiles, public.user_roles TO service_role;

CREATE OR REPLACE FUNCTION public.is_bup() RETURNS boolean LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT coalesce(lower(auth.jwt()->>'email') LIKE '%@bup.edu.pe', false)
$$;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.es_gestor() RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.is_bup() AND (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'directivo'))
$$;

CREATE OR REPLACE FUNCTION public.mi_area() RETURNS text LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT area FROM public.usuarios_sgi WHERE lower(correo) = lower(auth.jwt()->>'email') AND activo LIMIT 1
$$;

CREATE OR REPLACE FUNCTION public.puede_editar_subproceso(_sub text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.es_gestor() OR (
    public.is_bup()
    AND (public.has_role(auth.uid(),'lider') OR public.has_role(auth.uid(),'responsable'))
    AND EXISTS (SELECT 1 FROM public.subprocesos s JOIN public.procesos p ON p.id = s.proceso_id WHERE s.id = _sub AND p.area = public.mi_area())
  )
$$;

CREATE OR REPLACE FUNCTION public.puede_editar_indicador(_ind text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.puede_editar_subproceso((SELECT subproceso_id FROM public.indicadores WHERE id = _ind))
$$;

CREATE OR REPLACE FUNCTION public.puede_editar_registro(_reg text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.puede_editar_indicador((SELECT indicador_id FROM public.registros WHERE id = _reg))
$$;

CREATE OR REPLACE FUNCTION public.sincronizar_usuario() RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _email text := lower(auth.jwt()->>'email');
  _rol text;
  _r public.app_role;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_bup() THEN
    RAISE EXCEPTION 'Acceso restringido al dominio bup.edu.pe';
  END IF;
  INSERT INTO public.profiles (id, correo, nombre, avatar_url)
  VALUES (auth.uid(), _email, auth.jwt()->'user_metadata'->>'full_name', auth.jwt()->'user_metadata'->>'avatar_url')
  ON CONFLICT (id) DO UPDATE SET correo = EXCLUDED.correo,
    nombre = coalesce(EXCLUDED.nombre, public.profiles.nombre),
    avatar_url = coalesce(EXCLUDED.avatar_url, public.profiles.avatar_url);

  SELECT rol INTO _rol FROM public.usuarios_sgi WHERE lower(correo) = _email AND activo LIMIT 1;
  _r := CASE _rol
    WHEN 'Administrador' THEN 'admin'
    WHEN 'Directivo' THEN 'directivo'
    WHEN 'Líder de proceso' THEN 'lider'
    WHEN 'Responsable de área' THEN 'responsable'
    WHEN 'Auditor EFQM' THEN 'auditor'
    ELSE 'lector' END;
  DELETE FROM public.user_roles WHERE user_id = auth.uid();
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), _r);
  RETURN _r::text;
END $$;
REVOKE EXECUTE ON FUNCTION public.sincronizar_usuario() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.sincronizar_usuario() TO authenticated;

ALTER TABLE public.criterios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.procesos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subprocesos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.procedimientos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.actividades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.indicadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registros ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evidencias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usuarios_sgi ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auditoria ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bup lee criterios" ON public.criterios FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee procesos" ON public.procesos FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee subprocesos" ON public.subprocesos FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee procedimientos" ON public.procedimientos FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee documentos" ON public.documentos FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee actividades" ON public.actividades FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee indicadores" ON public.indicadores FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee metas" ON public.metas FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee registros" ON public.registros FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee evidencias" ON public.evidencias FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee usuarios" ON public.usuarios_sgi FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "bup lee auditoria" ON public.auditoria FOR SELECT TO authenticated USING (public.is_bup());
CREATE POLICY "perfil propio" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid() OR public.es_gestor());
CREATE POLICY "roles propios" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.es_gestor());

CREATE POLICY "gestor criterios" ON public.criterios FOR ALL TO authenticated USING (public.es_gestor()) WITH CHECK (public.es_gestor());
CREATE POLICY "gestor procesos" ON public.procesos FOR ALL TO authenticated USING (public.es_gestor()) WITH CHECK (public.es_gestor());
CREATE POLICY "gestor subprocesos" ON public.subprocesos FOR ALL TO authenticated USING (public.es_gestor()) WITH CHECK (public.es_gestor());
CREATE POLICY "gestor indicadores" ON public.indicadores FOR ALL TO authenticated USING (public.es_gestor()) WITH CHECK (public.es_gestor());
CREATE POLICY "gestor metas" ON public.metas FOR ALL TO authenticated USING (public.es_gestor()) WITH CHECK (public.es_gestor());
CREATE POLICY "admin usuarios" ON public.usuarios_sgi FOR ALL TO authenticated USING (public.is_bup() AND public.has_role(auth.uid(),'admin')) WITH CHECK (public.is_bup() AND public.has_role(auth.uid(),'admin'));

CREATE POLICY "area procedimientos" ON public.procedimientos FOR ALL TO authenticated USING (public.puede_editar_subproceso(subproceso_id)) WITH CHECK (public.puede_editar_subproceso(subproceso_id));
CREATE POLICY "area documentos" ON public.documentos FOR ALL TO authenticated USING (public.puede_editar_subproceso(subproceso_id)) WITH CHECK (public.puede_editar_subproceso(subproceso_id));
CREATE POLICY "area actividades" ON public.actividades FOR ALL TO authenticated USING (public.puede_editar_subproceso(subproceso_id)) WITH CHECK (public.puede_editar_subproceso(subproceso_id));
CREATE POLICY "area registros" ON public.registros FOR ALL TO authenticated USING (public.puede_editar_indicador(indicador_id)) WITH CHECK (public.puede_editar_indicador(indicador_id));
CREATE POLICY "area evidencias" ON public.evidencias FOR ALL TO authenticated USING (public.puede_editar_registro(registro_id)) WITH CHECK (public.puede_editar_registro(registro_id));
CREATE POLICY "bup escribe auditoria" ON public.auditoria FOR INSERT TO authenticated WITH CHECK (public.is_bup());
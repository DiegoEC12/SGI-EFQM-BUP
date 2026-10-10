-- Conserva las evidencias iniciales antes de usar el CRUD.
ALTER TABLE public.evidencias ADD COLUMN IF NOT EXISTS archivo_path text;
ALTER TABLE public.evidencias ADD COLUMN IF NOT EXISTS archivo_mime text;
ALTER TABLE public.evidencias ADD COLUMN IF NOT EXISTS archivo_tamano bigint;

INSERT INTO public.evidencias (id,registro_id,nombre,tipo,subido_por,fecha) VALUES
('p1-s1-i1-r2026-e1','p1-s1-i1-r2026','Acta de verificación Gobierno y orientación pastoral.pdf','PDF','Pbro. Director General','2026-09-16'),
('p1-s2-i1-r2026-e1','p1-s2-i1-r2026','Acta de verificación Planificación y control estratégico.pdf','PDF','Pbro. Director General','2026-09-16'),
('p2-s1-i1-r2026-e1','p2-s1-i1-r2026','Acta de verificación Tesorería y control contable.pdf','PDF','Administradora General','2026-09-16'),
('p2-s2-i1-r2026-e1','p2-s2-i1-r2026','Acta de verificación Becas y logística.pdf','PDF','Administradora General','2026-09-16'),
('p3-s1-i1-r2026-e1','p3-s1-i1-r2026','Acta de verificación Autoevaluación EFQM.pdf','PDF','Coordinador de Calidad','2026-09-16'),
('p3-s2-i1-r2026-e1','p3-s2-i1-r2026','Acta de verificación Escucha a grupos de interés.pdf','PDF','Coordinador de Calidad','2026-09-16'),
('p4-s1-i1-r2026-e1','p4-s1-i1-r2026','Acta de verificación Captación y promoción.pdf','PDF','Coordinadora de Admisión','2026-09-16'),
('p4-s2-i1-r2026-e1','p4-s2-i1-r2026','Acta de verificación Selección y matrícula.pdf','PDF','Coordinadora de Admisión','2026-09-16'),
('p5-s1-i1-r2026-e1','p5-s1-i1-r2026','Acta de verificación Planificación curricular.pdf','PDF','Director Académico','2026-09-16'),
('p5-s2-i1-r2026-e1','p5-s2-i1-r2026','Acta de verificación Monitoreo y acompañamiento docente.pdf','PDF','Director Académico','2026-09-16'),
('p6-s1-i1-r2026-e1','p6-s1-i1-r2026','Acta de verificación Planificación y proyección social.pdf','PDF','Coordinadora de Pastoral','2026-09-16'),
('p6-s2-i1-r2026-e1','p6-s2-i1-r2026','Acta de verificación Vida litúrgica y sacramental.pdf','PDF','Coordinadora de Pastoral','2026-09-16'),
('p6-s3-i1-r2026-e1','p6-s3-i1-r2026','Acta de verificación Acompañamiento espiritual.pdf','PDF','Coordinadora de Pastoral','2026-09-16'),
('p7-s1-i1-r2026-e1','p7-s1-i1-r2026','Acta de verificación Diagnóstico y atención psicológica.pdf','PDF','Coordinadora de TOE','2026-09-16'),
('p7-s2-i1-r2026-e1','p7-s2-i1-r2026','Acta de verificación Prevención y trabajo con familias.pdf','PDF','Coordinadora de TOE','2026-09-16'),
('p8-s1-i1-r2026-e1','p8-s1-i1-r2026','Acta de verificación Obras y mejoras.pdf','PDF','Jefe de Mantenimiento','2026-09-16'),
('p8-s2-i1-r2026-e1','p8-s2-i1-r2026','Acta de verificación Mantenimiento y limpieza.pdf','PDF','Jefe de Mantenimiento','2026-09-16'),
('p9-s1-i1-r2026-e1','p9-s1-i1-r2026','Acta de verificación Soporte y continuidad.pdf','PDF','Jefe de TIC','2026-09-16'),
('p9-s2-i1-r2026-e1','p9-s2-i1-r2026','Acta de verificación Infraestructura tecnológica.pdf','PDF','Jefe de TIC','2026-09-16'),
('p10-s1-i1-r2026-e1','p10-s1-i1-r2026','Acta de verificación Contenidos y difusión.pdf','PDF','Coordinador de Imagen','2026-09-16'),
('p10-s2-i1-r2026-e1','p10-s2-i1-r2026','Acta de verificación Cobertura institucional.pdf','PDF','Coordinador de Imagen','2026-09-16'),
('p11-s1-i1-r2026-e1','p11-s1-i1-r2026','Acta de verificación Selección y desarrollo.pdf','PDF','Jefa de Personal','2026-09-16'),
('p11-s2-i1-r2026-e1','p11-s2-i1-r2026','Acta de verificación Desempeño y seguridad laboral.pdf','PDF','Jefa de Personal','2026-09-16'),
('p12-s1-i1-r2026-e1','p12-s1-i1-r2026','Acta de verificación Logros de aprendizaje y talentos.pdf','PDF','Director Académico','2026-09-16'),
('p12-s2-i1-r2026-e1','p12-s2-i1-r2026','Acta de verificación Salud y seguridad escolar.pdf','PDF','Director Académico','2026-09-16')
ON CONFLICT (id) DO UPDATE SET registro_id=EXCLUDED.registro_id,nombre=EXCLUDED.nombre,tipo=EXCLUDED.tipo,subido_por=EXCLUDED.subido_por,fecha=EXCLUDED.fecha;

-- Solo administradores pueden modificar evidencias. Todos los usuarios BUP pueden leerlas.
DROP POLICY IF EXISTS "area evidencias" ON public.evidencias;
DROP POLICY IF EXISTS "admin evidencias" ON public.evidencias;
CREATE POLICY "admin evidencias" ON public.evidencias FOR ALL TO authenticated
  USING (public.is_bup() AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.is_bup() AND public.has_role(auth.uid(), 'admin'));


-- Ejecutar las polices para permitir el acceso a las evidencias --
CREATE POLICY "usuarios bup pueden ver evidencias"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'sgi-evidencias'
  AND public.is_bup()
);

CREATE POLICY "administradores pueden subir evidencias"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'sgi-evidencias'
  AND public.is_bup()
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "administradores pueden actualizar evidencias"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'sgi-evidencias'
  AND public.is_bup()
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "administradores pueden eliminar evidencias"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'sgi-evidencias'
  AND public.is_bup()
  AND public.has_role(auth.uid(), 'admin')
);
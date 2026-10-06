-- Usuarios institucionales iniciales. Idempotente por correo.
INSERT INTO public.usuarios_sgi (nombre, correo, rol, area, activo)
VALUES
  ('Diego Espejo', 'diego.espejo@bup.edu.pe', 'Administrador', 'TIC', true),
  ('Administrador SGI', 'sistemas@bup.edu.pe', 'Administrador', 'TIC', true),
  ('Pbro. Director General', 'direccion@bup.edu.pe', 'Directivo', 'Dirección General', true),
  ('Administradora General', 'administracion@bup.edu.pe', 'Líder de proceso', 'Administración', true),
  ('Coordinador de Calidad', 'calidad@bup.edu.pe', 'Auditor EFQM', 'Calidad', true),
  ('Director Académico', 'academico@bup.edu.pe', 'Líder de proceso', 'Académica', true),
  ('Coordinadora de Pastoral', 'pastoral@bup.edu.pe', 'Responsable de área', 'Pastoral', true)
ON CONFLICT (correo) DO UPDATE SET
  nombre = EXCLUDED.nombre,
  rol = EXCLUDED.rol,
  area = EXCLUDED.area,
  activo = EXCLUDED.activo;

-- Seed institucional idempotente para el primer despliegue del SGI.
-- Se mantiene separado de la migración de esquema para poder re-ejecutarlo sin duplicados.
INSERT INTO public.criterios (id, nombre, pilar, descripcion) VALUES
  ('c1', 'Dirección', 'Dirección', 'Propósito, visión y estrategia institucional; cultura de liderazgo y gobierno.'),
  ('c2', 'Ejecución', 'Ejecución', 'Involucrar a los grupos de interés y crear valor sostenible en la operación diaria.'),
  ('c3', 'Resultados', 'Resultados', 'Resultados de percepción y de rendimiento estratégico y operativo.')
ON CONFLICT (id) DO UPDATE SET nombre = EXCLUDED.nombre, pilar = EXCLUDED.pilar, descripcion = EXCLUDED.descripcion;

INSERT INTO public.procesos (id, codigo, nombre, criterio_id, area, lider) VALUES
  ('p1','PE-01','Promotoría y Dirección Estratégica','c1','Dirección General','Pbro. Director General'),
  ('p2','PE-02','Administración y Finanzas','c1','Administración','Administradora General'),
  ('p3','PE-03','Calidad, Innovación y Mejora Continua','c1','Calidad','Coordinador de Calidad'),
  ('p4','PO-01','Admisión y Marketing Educativo','c2','Admisión','Coordinadora de Admisión'),
  ('p5','PO-02','Gestión Pedagógica','c2','Académica','Director Académico'),
  ('p6','PO-03','Pastoral y Formación Cristiana','c2','Pastoral','Coordinadora de Pastoral'),
  ('p7','PO-04','Tutoría y Bienestar Psicológico','c2','Bienestar','Coordinadora de TOE'),
  ('p8','PS-01','Infraestructura y Mantenimiento','c2','Infraestructura','Jefe de Mantenimiento'),
  ('p9','PS-02','Tecnología de la Información','c2','TIC','Jefe de TIC'),
  ('p10','PS-03','Imagen Institucional y Comunicaciones','c2','Comunicaciones','Coordinador de Imagen'),
  ('p11','PS-04','Gestión del Talento Humano','c2','Talento Humano','Jefa de Personal'),
  ('p12','PR-01','Resultados de Formación Integral','c3','Académica','Director Académico')
ON CONFLICT (id) DO UPDATE SET nombre=EXCLUDED.nombre, criterio_id=EXCLUDED.criterio_id, area=EXCLUDED.area, lider=EXCLUDED.lider;

INSERT INTO public.subprocesos (id, proceso_id, nombre) VALUES
  ('p1-s1','p1','Gobierno y orientación pastoral'),('p1-s2','p1','Planificación y control estratégico'),
  ('p2-s1','p2','Tesorería y control contable'),('p2-s2','p2','Becas y logística'),
  ('p3-s1','p3','Autoevaluación EFQM'),('p3-s2','p3','Escucha a grupos de interés'),
  ('p4-s1','p4','Captación y promoción'),('p4-s2','p4','Selección y matrícula'),
  ('p5-s1','p5','Planificación curricular'),('p5-s2','p5','Monitoreo y acompañamiento docente'),
  ('p6-s1','p6','Planificación y proyección social'),('p6-s2','p6','Vida litúrgica y sacramental'),('p6-s3','p6','Acompañamiento espiritual'),
  ('p7-s1','p7','Diagnóstico y atención psicológica'),('p7-s2','p7','Prevención y trabajo con familias'),
  ('p8-s1','p8','Obras y mejoras'),('p8-s2','p8','Mantenimiento y limpieza'),
  ('p9-s1','p9','Soporte y continuidad'),('p9-s2','p9','Infraestructura tecnológica'),
  ('p10-s1','p10','Contenidos y difusión'),('p10-s2','p10','Cobertura institucional'),
  ('p11-s1','p11','Selección y desarrollo'),('p11-s2','p11','Desempeño y seguridad laboral'),
  ('p12-s1','p12','Logros de aprendizaje y talentos'),('p12-s2','p12','Salud y seguridad escolar')
ON CONFLICT (id) DO UPDATE SET proceso_id=EXCLUDED.proceso_id, nombre=EXCLUDED.nombre;

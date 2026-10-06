// Datos institucionales del SGI - EFQM (Colegio Diocesano El Buen Pastor).
// Fuente: matriz de procesos y marco operativo (actividades) proporcionado por la institución.
// Capa de datos en memoria: se reemplazará por la base de datos en la siguiente fase.

export type Pilar = "Dirección" | "Ejecución" | "Resultados";
export type EstadoDoc = "Borrador" | "En revisión" | "Aprobado";
export type EstadoActividad = "Planificada" | "En ejecución" | "Completada" | "En riesgo";
export type Frecuencia = "Mensual" | "Bimestral" | "Trimestral" | "Semestral" | "Anual";
export type Polaridad = "Ascendente" | "Descendente";

export interface Criterio {
  id: string;
  nombre: string;
  pilar: Pilar;
  descripcion: string;
}

export interface Proceso {
  id: string;
  codigo: string;
  nombre: string;
  criterioId: string;
  area: string;
  lider: string;
}

export interface Subproceso {
  id: string;
  procesoId: string;
  nombre: string;
}

export interface Procedimiento {
  id: string;
  subprocesoId: string;
  nombre: string;
  version: string;
  estado: EstadoDoc;
  actualizado: string;
}

export interface Documento {
  id: string;
  subprocesoId: string;
  nombre: string;
  tipo: "Reglamento" | "Formato" | "Guía" | "Plan" | "Manual";
  version: string;
  estado: EstadoDoc;
  actualizado: string;
}

export interface Actividad {
  id: string;
  subprocesoId: string;
  nombre: string;
  responsable: string;
  avance: number;
  estado: EstadoActividad;
}

export interface Indicador {
  id: string;
  codigo: string;
  subprocesoId: string;
  nombre: string;
  formula: string;
  unidad: "%" | "Índice" | "Días" | "Nº";
  frecuencia: Frecuencia;
  polaridad: Polaridad;
  responsable: string;
  peso: number;
}

export interface Meta {
  id: string;
  indicadorId: string;
  anio: number;
  valor: number;
}

export interface Registro {
  id: string;
  indicadorId: string;
  anio: number;
  periodo: string;
  valor: number;
  fecha: string;
  registradoPor: string;
}

export interface Evidencia {
  id: string;
  registroId: string;
  nombre: string;
  tipo: "PDF" | "Excel" | "Imagen" | "Enlace";
  subidoPor: string;
  fecha: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: "Administrador" | "Directivo" | "Líder de proceso" | "Responsable de área" | "Auditor EFQM";
  area: string;
  activo: boolean;
}

export interface LogAuditoria {
  id: string;
  fecha: string;
  usuario: string;
  accion: string;
  modulo: string;
  detalle: string;
}

export const ANIOS = [2024, 2025, 2026];
export const ANIO_ACTUAL = 2026;

export const criterios: Criterio[] = [
  {
    id: "c1",
    nombre: "Dirección",
    pilar: "Dirección",
    descripcion: "Propósito, visión y estrategia institucional; cultura de liderazgo y gobierno.",
  },
  {
    id: "c2",
    nombre: "Ejecución",
    pilar: "Ejecución",
    descripcion: "Involucrar a los grupos de interés y crear valor sostenible en la operación diaria.",
  },
  {
    id: "c3",
    nombre: "Resultados",
    pilar: "Resultados",
    descripcion: "Resultados de percepción y de rendimiento estratégico y operativo.",
  },
];

interface Semilla {
  codigo: string;
  proceso: string;
  criterioId: string;
  area: string;
  lider: string;
  subprocesos: { nombre: string; actividades: string[] }[];
}

const semillas: Semilla[] = [
  {
    codigo: "PE-01",
    proceso: "Promotoría y Dirección Estratégica",
    criterioId: "c1",
    area: "Dirección General",
    lider: "Pbro. Director General",
    subprocesos: [
      {
        nombre: "Gobierno y orientación pastoral",
        actividades: [
          "Reuniones del Consejo de Promotoría",
          "Alineamiento ideológico y pastoral",
          "Aprobación de inversiones patrimoniales",
        ],
      },
      {
        nombre: "Planificación y control estratégico",
        actividades: [
          "Jornadas de planificación estratégica",
          "Comités directivos semanales",
          "Evaluación de metas y rendición de cuentas",
        ],
      },
    ],
  },
  {
    codigo: "PE-02",
    proceso: "Administración y Finanzas",
    criterioId: "c1",
    area: "Administración",
    lider: "Administradora General",
    subprocesos: [
      {
        nombre: "Tesorería y control contable",
        actividades: ["Arqueos de caja y conciliaciones", "Cierre contable mensual"],
      },
      {
        nombre: "Becas y logística",
        actividades: ["Evaluación socioeconómica para becas", "Selección ética de proveedores"],
      },
    ],
  },
  {
    codigo: "PE-03",
    proceso: "Calidad, Innovación y Mejora Continua",
    criterioId: "c1",
    area: "Calidad",
    lider: "Coordinador de Calidad",
    subprocesos: [
      {
        nombre: "Autoevaluación EFQM",
        actividades: ["Aplicación de autoevaluaciones EFQM", "Auditorías internas de procesos"],
      },
      {
        nombre: "Escucha a grupos de interés",
        actividades: ["Encuestas de satisfacción a familias y personal", "Comités de calidad e innovación"],
      },
    ],
  },
  {
    codigo: "PO-01",
    proceso: "Admisión y Marketing Educativo",
    criterioId: "c2",
    area: "Admisión",
    lider: "Coordinadora de Admisión",
    subprocesos: [
      {
        nombre: "Captación y promoción",
        actividades: ["Open House / Visitas guiadas", "Jornadas de bienvenida a familias nuevas"],
      },
      {
        nombre: "Selección y matrícula",
        actividades: [
          "Entrevistas psicopedagógicas y pastorales a postulantes",
          "Ratificación e integración documental",
        ],
      },
    ],
  },
  {
    codigo: "PO-02",
    proceso: "Gestión Pedagógica",
    criterioId: "c2",
    area: "Académica",
    lider: "Director Académico",
    subprocesos: [
      {
        nombre: "Planificación curricular",
        actividades: ["Desarrollo de unidades integradas de aprendizaje", "Círculos de reflexión pedagógica"],
      },
      {
        nombre: "Monitoreo y acompañamiento docente",
        actividades: ["Visitas de monitoreo y acompañamiento en aula", "Talleres de refuerzo académico y nivelación"],
      },
    ],
  },
  {
    codigo: "PO-03",
    proceso: "Pastoral y Formación Cristiana",
    criterioId: "c2",
    area: "Pastoral",
    lider: "Coordinadora de Pastoral",
    subprocesos: [
      {
        nombre: "Planificación y proyección social",
        actividades: [
          "Reuniones de planificación (trimestrales y de cierre de año)",
          "Visitas (Parroquias, Asilos y Albergues) / Campañas solidarias internas",
          "Registro de asistencia de PPFF / Entrega de materiales de reflexión para el hogar",
        ],
      },
      {
        nombre: "Vida litúrgica y sacramental",
        actividades: [
          "Participacion Activa en la Eucaristia (lectores, moniciones, ofrendas)",
          "Participacion en Misas y Jornadas (preparación de ambiente y cantos)",
          "Participacion en Misas y Jornadas (retiros de inicio y fin de año)",
        ],
      },
      {
        nombre: "Acompañamiento espiritual",
        actividades: [
          "Asesoramiento Espiritual de Estudiantes",
          "Asesoramiento Espiritual de Personal (Docente y no Docente) (entrevistas individuales programadas)",
        ],
      },
    ],
  },
  {
    codigo: "PO-04",
    proceso: "Tutoría y Bienestar Psicológico",
    criterioId: "c2",
    area: "Bienestar",
    lider: "Coordinadora de TOE",
    subprocesos: [
      {
        nombre: "Diagnóstico y atención psicológica",
        actividades: ["Cuestionarios psicométricos y diagnóstico", "Sesiones de tutoría y talleres de psicología"],
      },
      {
        nombre: "Prevención y trabajo con familias",
        actividades: [
          "Charlas preventivas para estudiantes, tutores y PPFF",
          "Reuniones de coordinación de tutoría por grado y Escuela de Padres",
        ],
      },
    ],
  },
  {
    codigo: "PS-01",
    proceso: "Infraestructura y Mantenimiento",
    criterioId: "c2",
    area: "Infraestructura",
    lider: "Jefe de Mantenimiento",
    subprocesos: [
      {
        nombre: "Obras y mejoras",
        actividades: [
          "Revisiones técnicas de pabellones y aulas",
          "Ejecución de obras de remodelación y pintado",
          "Reparación de mobiliario escolar",
        ],
      },
      {
        nombre: "Mantenimiento y limpieza",
        actividades: [
          "Mantenimiento rutinario de aulas y proyectores",
          "Jornadas de limpieza y desinfección",
          "Atención y solución de incidencias reportadas",
        ],
      },
    ],
  },
  {
    codigo: "PS-02",
    proceso: "Tecnología de la Información",
    criterioId: "c2",
    area: "TIC",
    lider: "Jefe de TIC",
    subprocesos: [
      {
        nombre: "Soporte y continuidad",
        actividades: ["Atención de tickets de soporte técnico", "Ejecución periódica de respaldos digitales"],
      },
      {
        nombre: "Infraestructura tecnológica",
        actividades: [
          "Monitoreo de redes VLAN y cámaras CCTV",
          "Despliegue de imágenes y configuración de Chromebooks",
        ],
      },
    ],
  },
  {
    codigo: "PS-03",
    proceso: "Imagen Institucional y Comunicaciones",
    criterioId: "c2",
    area: "Comunicaciones",
    lider: "Coordinador de Imagen",
    subprocesos: [
      {
        nombre: "Contenidos y difusión",
        actividades: ["Gestión y publicación de contenidos audiovisuales", "Diseño gráfico institucional"],
      },
      {
        nombre: "Cobertura institucional",
        actividades: ["Toma, edición y publicación de fotografías", "Cobertura de eventos, actuaciones y misas"],
      },
    ],
  },
  {
    codigo: "PS-04",
    proceso: "Gestión del Talento Humano",
    criterioId: "c2",
    area: "Talento Humano",
    lider: "Jefa de Personal",
    subprocesos: [
      {
        nombre: "Selección y desarrollo",
        actividades: [
          "Entrevistas de selección por perfil carismático",
          "Capacitaciones pedagógicas y pastorales al personal",
        ],
      },
      {
        nombre: "Desempeño y seguridad laboral",
        actividades: [
          "Evaluación anual del desempeño del personal",
          "Gestión de planillas, inspecciones de seguridad y simulacros",
        ],
      },
    ],
  },
  {
    codigo: "PR-01",
    proceso: "Resultados de Formación Integral",
    criterioId: "c3",
    area: "Académica",
    lider: "Director Académico",
    subprocesos: [
      {
        nombre: "Logros de aprendizaje y talentos",
        actividades: [
          "Ejecución y clausuras de talleres extracurriculares",
          "Entrenamientos y presentaciones de selecciones/elencos",
        ],
      },
      {
        nombre: "Salud y seguridad escolar",
        actividades: ["Atención médica de primeros auxilios y supervisión sanitaria"],
      },
    ],
  },
];

const responsables = [
  "Administradora General",
  "Coordinador de Calidad",
  "Director Académico",
  "Coordinadora de Pastoral",
  "Jefe de TIC",
  "Jefa de Personal",
  "Coordinadora de TOE",
];

// Generador determinista para valores de ejemplo reproducibles.
function rnd(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const estadosAct: EstadoActividad[] = ["Completada", "En ejecución", "Planificada", "En riesgo"];
const estadosDoc: EstadoDoc[] = ["Aprobado", "En revisión", "Borrador"];
const frecuencias: Frecuencia[] = ["Mensual", "Bimestral", "Trimestral", "Semestral", "Anual"];

export const procesos: Proceso[] = [];
export const subprocesos: Subproceso[] = [];
export const procedimientos: Procedimiento[] = [];
export const documentos: Documento[] = [];
export const actividades: Actividad[] = [];
export const indicadores: Indicador[] = [];
export const metas: Meta[] = [];
export const registros: Registro[] = [];
export const evidencias: Evidencia[] = [];

let s = 1;
semillas.forEach((sem, pi) => {
  const pid = `p${pi + 1}`;
  procesos.push({
    id: pid,
    codigo: sem.codigo,
    nombre: sem.proceso,
    criterioId: sem.criterioId,
    area: sem.area,
    lider: sem.lider,
  });

  sem.subprocesos.forEach((sub, si) => {
    const sid = `${pid}-s${si + 1}`;
    subprocesos.push({ id: sid, procesoId: pid, nombre: sub.nombre });

    procedimientos.push({
      id: `${sid}-pr1`,
      subprocesoId: sid,
      nombre: `Procedimiento de ${sub.nombre.toLowerCase()}`,
      version: `v1.${si + 1}`,
      estado: estadosDoc[Math.floor(rnd(s++) * 3)]!,
      actualizado: `2026-0${(si % 8) + 1}-15`,
    });
    documentos.push({
      id: `${sid}-d1`,
      subprocesoId: sid,
      nombre: `Formato de registro — ${sub.nombre}`,
      tipo: "Formato",
      version: "v2.0",
      estado: estadosDoc[Math.floor(rnd(s++) * 3)]!,
      actualizado: `2026-0${(si % 8) + 2}-03`,
    });
    documentos.push({
      id: `${sid}-d2`,
      subprocesoId: sid,
      nombre: `Guía operativa — ${sem.proceso}`,
      tipo: "Guía",
      version: "v1.0",
      estado: "Aprobado",
      actualizado: "2025-12-20",
    });

    sub.actividades.forEach((nombre, ai) => {
      const r = rnd(s++);
      const avance = Math.round(45 + r * 55);
      actividades.push({
        id: `${sid}-a${ai + 1}`,
        subprocesoId: sid,
        nombre,
        responsable: sem.lider,
        avance,
        estado:
          avance >= 100
            ? "Completada"
            : avance >= 75
              ? "En ejecución"
              : avance >= 60
                ? "Planificada"
                : estadosAct[3]!,
      });
    });

    // Un indicador por subproceso.
    const iid = `${sid}-i1`;
    const peso = 1;
    indicadores.push({
      id: iid,
      codigo: `IND-${String(indicadores.length + 1).padStart(3, "0")}`,
      subprocesoId: sid,
      nombre: `Cumplimiento de ${sub.nombre.toLowerCase()}`,
      formula: "(Actividades ejecutadas / Actividades programadas) × 100",
      unidad: "%",
      frecuencia: frecuencias[Math.floor(rnd(s++) * frecuencias.length)]!,
      polaridad: "Ascendente",
      responsable: responsables[Math.floor(rnd(s++) * responsables.length)]!,
      peso,
    });

    ANIOS.forEach((anio) => {
      metas.push({ id: `${iid}-m${anio}`, indicadorId: iid, anio, valor: 100 });
      const base = 62 + rnd(s++) * 38;
      const valor = Math.min(100, Math.round((base + (anio - 2024) * 3) * 10) / 10);
      const rid = `${iid}-r${anio}`;
      registros.push({
        id: rid,
        indicadorId: iid,
        anio,
        periodo: anio === ANIO_ACTUAL ? "Parcial I" : "Cierre anual",
        valor,
        fecha: `${anio}-${anio === ANIO_ACTUAL ? "09" : "12"}-15`,
        registradoPor: sem.lider,
      });
      if (anio === ANIO_ACTUAL) {
        evidencias.push({
          id: `${rid}-e1`,
          registroId: rid,
          nombre: `Acta de verificación ${sub.nombre}.pdf`,
          tipo: "PDF",
          subidoPor: sem.lider,
          fecha: `${anio}-09-16`,
        });
      }
    });
  });
});

export const usuarios: Usuario[] = [
  {
    id: "u1",
    nombre: "Administrador SGI",
    correo: "sistemas@bup.edu.pe",
    rol: "Administrador",
    area: "TIC",
    activo: true,
  },
  {
    id: "u2",
    nombre: "Pbro. Director General",
    correo: "direccion@bup.edu.pe",
    rol: "Directivo",
    area: "Dirección General",
    activo: true,
  },
  {
    id: "u3",
    nombre: "Administradora General",
    correo: "administracion@bup.edu.pe",
    rol: "Líder de proceso",
    area: "Administración",
    activo: true,
  },
  {
    id: "u4",
    nombre: "Coordinador de Calidad",
    correo: "calidad@bup.edu.pe",
    rol: "Auditor EFQM",
    area: "Calidad",
    activo: true,
  },
  {
    id: "u5",
    nombre: "Director Académico",
    correo: "academico@bup.edu.pe",
    rol: "Líder de proceso",
    area: "Académica",
    activo: true,
  },
  {
    id: "u6",
    nombre: "Coordinadora de Pastoral",
    correo: "pastoral@bup.edu.pe",
    rol: "Responsable de área",
    area: "Pastoral",
    activo: true,
  },
  {
    id: "u7",
    nombre: "Jefa de Personal",
    correo: "personal@bup.edu.pe",
    rol: "Responsable de área",
    area: "Talento Humano",
    activo: false,
  },
];

export const auditoria: LogAuditoria[] = [
  {
    id: "l1",
    fecha: "2026-09-24 13:42",
    usuario: "Coordinador de Calidad",
    accion: "Actualizó registro",
    modulo: "Registros",
    detalle: "IND-007 — Parcial I 2026",
  },
  {
    id: "l2",
    fecha: "2026-09-24 11:05",
    usuario: "Director Académico",
    accion: "Cargó evidencia",
    modulo: "Evidencias",
    detalle: "Acta de verificación monitoreo docente.pdf",
  },
  {
    id: "l3",
    fecha: "2026-09-23 17:20",
    usuario: "Administrador SGI",
    accion: "Creó usuario",
    modulo: "Usuarios",
    detalle: "personal@bup.edu.pe (Responsable de área)",
  },
  {
    id: "l4",
    fecha: "2026-09-23 09:12",
    usuario: "Administradora General",
    accion: "Aprobó documento",
    modulo: "Marco operativo",
    detalle: "Procedimiento de tesorería y control contable v1.1",
  },
  {
    id: "l5",
    fecha: "2026-09-22 16:48",
    usuario: "Coordinadora de Pastoral",
    accion: "Editó meta",
    modulo: "Metas",
    detalle: "IND-012 meta 2026 = 100%",
  },
];

export const areas = Array.from(new Set(procesos.map((p) => p.area))).sort();

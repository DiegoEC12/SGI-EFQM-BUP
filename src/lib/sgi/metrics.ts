import {
  ANIO_ACTUAL,
  actividades,
  criterios,
  indicadores,
  metas,
  procesos,
  registros,
  subprocesos,
  type Indicador,
} from "./data";

export type Estado = "Cumple" | "Atención" | "Crítico" | "Sin evaluar";

export function estadoDe(cumplimiento: number | null): Estado {
  if (cumplimiento === null) return "Sin evaluar";
  if (cumplimiento >= 90) return "Cumple";
  if (cumplimiento >= 70) return "Atención";
  return "Crítico";
}

export const colorEstado: Record<Estado, string> = {
  Cumple: "text-success",
  Atención: "text-warning",
  Crítico: "text-destructive",
  "Sin evaluar": "text-muted-foreground",
};

export const bgEstado: Record<Estado, string> = {
  Cumple: "bg-success",
  Atención: "bg-warning",
  Crítico: "bg-destructive",
  "Sin evaluar": "bg-muted-foreground",
};

export interface IndicadorEvaluado {
  indicador: Indicador;
  subproceso: string;
  proceso: string;
  procesoId: string;
  criterioId: string;
  area: string;
  meta: number;
  valor: number | null;
  cumplimiento: number | null;
  estado: Estado;
}

export interface Filtros {
  anio: number;
  area: string;
  procesoId: string;
  subprocesoId: string;
  indicadorId: string;
}

export const filtrosIniciales: Filtros = {
  anio: ANIO_ACTUAL,
  area: "todas",
  procesoId: "todos",
  subprocesoId: "todos",
  indicadorId: "todos",
};

export function evaluarIndicadores(anio: number): IndicadorEvaluado[] {
  return indicadores.map((indicador) => {
    const sub = subprocesos.find((x) => x.id === indicador.subprocesoId)!;
    const proc = procesos.find((x) => x.id === sub.procesoId)!;
    const meta = metas.find((m) => m.indicadorId === indicador.id && m.anio === anio)?.valor ?? 100;
    const reg = registros.find((r) => r.indicadorId === indicador.id && r.anio === anio);
    const valor = reg ? reg.valor : null;
    const cumplimiento =
      valor === null
        ? null
        : indicador.polaridad === "Ascendente"
          ? Math.min(100, Math.round((valor / meta) * 1000) / 10)
          : Math.min(100, Math.round((meta / Math.max(valor, 0.01)) * 1000) / 10);
    return {
      indicador,
      subproceso: sub.nombre,
      proceso: proc.nombre,
      procesoId: proc.id,
      criterioId: proc.criterioId,
      area: proc.area,
      meta,
      valor,
      cumplimiento,
      estado: estadoDe(cumplimiento),
    };
  });
}

export function aplicarFiltros(lista: IndicadorEvaluado[], f: Filtros) {
  return lista.filter(
    (i) =>
      (f.area === "todas" || i.area === f.area) &&
      (f.procesoId === "todos" || i.procesoId === f.procesoId) &&
      (f.subprocesoId === "todos" || i.indicador.subprocesoId === f.subprocesoId) &&
      (f.indicadorId === "todos" || i.indicador.id === f.indicadorId),
  );
}

export function promedio(lista: IndicadorEvaluado[]) {
  const vals = lista.map((i) => i.cumplimiento).filter((v): v is number => v !== null);
  if (!vals.length) return 0;
  return Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10;
}

export function resumen(lista: IndicadorEvaluado[]) {
  return {
    total: lista.length,
    cumplen: lista.filter((i) => i.estado === "Cumple").length,
    atencion: lista.filter((i) => i.estado === "Atención").length,
    criticos: lista.filter((i) => i.estado === "Crítico").length,
    sinEvaluar: lista.filter((i) => i.estado === "Sin evaluar").length,
    global: promedio(lista),
  };
}

export function porArea(lista: IndicadorEvaluado[]) {
  const mapa = new Map<string, IndicadorEvaluado[]>();
  lista.forEach((i) => mapa.set(i.area, [...(mapa.get(i.area) ?? []), i]));
  return Array.from(mapa, ([area, items]) => ({
    area,
    valor: promedio(items),
    total: items.length,
    cumplen: items.filter((i) => i.estado === "Cumple").length,
    criticos: items.filter((i) => i.estado === "Crítico").length,
  })).sort((a, b) => a.valor - b.valor);
}

export function porPilar(anio: number, listaFiltrada?: IndicadorEvaluado[]) {
  const lista = listaFiltrada ?? evaluarIndicadores(anio);
  return criterios.map((c) => {
    const items = lista.filter((i) => i.criterioId === c.id);
    return { pilar: c.pilar, criterioId: c.id, valor: promedio(items), total: items.length };
  });
}

export function historico(f?: Omit<Filtros, "anio">) {
  return [2024, 2025, 2026].map((anio) => {
    const lista = evaluarIndicadores(anio);
    const filtrada = f ? aplicarFiltros(lista, { ...f, anio }) : lista;
    return { anio, valor: promedio(filtrada), total: filtrada.length, meta: 100 };
  });
}

export function avanceSubproceso(subprocesoId: string) {
  const acts = actividades.filter((a) => a.subprocesoId === subprocesoId);
  if (!acts.length) return 0;
  return Math.round(acts.reduce((a, b) => a + b.avance, 0) / acts.length);
}

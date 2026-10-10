import { f as procesos, l as indicadores, m as subprocesos, n as ANIO_ACTUAL, o as criterios, p as registros, r as actividades, u as metas } from "./data-CYFvAbyr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metrics-vjSfu0Op.js
function estadoDe(cumplimiento) {
	if (cumplimiento === null) return "Sin evaluar";
	if (cumplimiento >= 90) return "Cumple";
	if (cumplimiento >= 70) return "Atención";
	return "Crítico";
}
var filtrosIniciales = {
	anio: ANIO_ACTUAL,
	area: "todas",
	procesoId: "todos",
	subprocesoId: "todos",
	indicadorId: "todos"
};
function evaluarIndicadores(anio) {
	return indicadores.map((indicador) => {
		const sub = subprocesos.find((x) => x.id === indicador.subprocesoId);
		const proc = procesos.find((x) => x.id === sub.procesoId);
		const meta = metas.find((m) => m.indicadorId === indicador.id && m.anio === anio)?.valor ?? 100;
		const reg = registros.find((r) => r.indicadorId === indicador.id && r.anio === anio);
		const valor = reg ? reg.valor : null;
		const cumplimiento = valor === null ? null : indicador.polaridad === "Ascendente" ? Math.min(100, Math.round(valor / meta * 1e3) / 10) : Math.min(100, Math.round(meta / Math.max(valor, .01) * 1e3) / 10);
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
			estado: estadoDe(cumplimiento)
		};
	});
}
function aplicarFiltros(lista, f) {
	return lista.filter((i) => (f.area === "todas" || i.area === f.area) && (f.procesoId === "todos" || i.procesoId === f.procesoId) && (f.subprocesoId === "todos" || i.indicador.subprocesoId === f.subprocesoId) && (f.indicadorId === "todos" || i.indicador.id === f.indicadorId));
}
function promedio(lista) {
	const vals = lista.map((i) => i.cumplimiento).filter((v) => v !== null);
	if (!vals.length) return 0;
	return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length * 10) / 10;
}
function resumen(lista) {
	return {
		total: lista.length,
		cumplen: lista.filter((i) => i.estado === "Cumple").length,
		atencion: lista.filter((i) => i.estado === "Atención").length,
		criticos: lista.filter((i) => i.estado === "Crítico").length,
		sinEvaluar: lista.filter((i) => i.estado === "Sin evaluar").length,
		global: promedio(lista)
	};
}
function porArea(lista) {
	const mapa = /* @__PURE__ */ new Map();
	lista.forEach((i) => mapa.set(i.area, [...mapa.get(i.area) ?? [], i]));
	return Array.from(mapa, ([area, items]) => ({
		area,
		valor: promedio(items),
		total: items.length,
		cumplen: items.filter((i) => i.estado === "Cumple").length,
		criticos: items.filter((i) => i.estado === "Crítico").length
	})).sort((a, b) => a.valor - b.valor);
}
function porPilar(anio, listaFiltrada) {
	const lista = listaFiltrada ?? evaluarIndicadores(anio);
	return criterios.map((c) => {
		const items = lista.filter((i) => i.criterioId === c.id);
		return {
			pilar: c.pilar,
			criterioId: c.id,
			valor: promedio(items),
			total: items.length
		};
	});
}
function historico(f) {
	return [
		2024,
		2025,
		2026
	].map((anio) => {
		const lista = evaluarIndicadores(anio);
		const filtrada = f ? aplicarFiltros(lista, {
			...f,
			anio
		}) : lista;
		return {
			anio,
			valor: promedio(filtrada),
			total: filtrada.length,
			meta: 100
		};
	});
}
function avanceSubproceso(subprocesoId) {
	const acts = actividades.filter((a) => a.subprocesoId === subprocesoId);
	if (!acts.length) return 0;
	return Math.round(acts.reduce((a, b) => a + b.avance, 0) / acts.length);
}
//#endregion
export { historico as a, promedio as c, filtrosIniciales as i, resumen as l, avanceSubproceso as n, porArea as o, evaluarIndicadores as r, porPilar as s, aplicarFiltros as t };

import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as procesos, i as areas, l as indicadores, m as subprocesos, t as ANIOS } from "./data-CYFvAbyr.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filtros-bar-BbI94k9g.js
var import_jsx_runtime = require_jsx_runtime();
function FiltrosBar({ valor, onChange }) {
	const procesosDisponibles = procesos.filter((p) => valor.area === "todas" || p.area === valor.area);
	procesos.find((p) => p.id === valor.procesoId);
	const subs = subprocesos.filter((s) => valor.procesoId === "todos" || s.procesoId === valor.procesoId);
	const inds = indicadores.filter((i) => subs.some((s) => s.id === i.subprocesoId));
	const campo = (id, label, value, placeholder, opciones, onSet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			className: "text-[11px] tracking-wide text-muted-foreground uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value,
			onValueChange: onSet,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				id,
				className: "w-full bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: opciones.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: o.value,
				children: o.label
			}, o.value)) })]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 rounded-lg border border-border bg-card p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5",
		children: [
			campo("f-anio", "Año", String(valor.anio), "Año", ANIOS.map((a) => ({
				value: String(a),
				label: String(a)
			})), (v) => onChange({
				...valor,
				anio: Number(v)
			})),
			campo("f-area", "Área", valor.area, "Todas las áreas", [{
				value: "todas",
				label: "Todas las áreas"
			}, ...areas.map((a) => ({
				value: a,
				label: a
			}))], (v) => onChange({
				...valor,
				area: v,
				procesoId: "todos",
				subprocesoId: "todos",
				indicadorId: "todos"
			})),
			campo("f-proceso", "Proceso", valor.procesoId, "Todos los procesos", [{
				value: "todos",
				label: "Todos los procesos"
			}, ...procesosDisponibles.map((p) => ({
				value: p.id,
				label: `${p.codigo} · ${p.nombre}`
			}))], (v) => {
				const p = procesos.find((item) => item.id === v);
				onChange({
					...valor,
					area: p?.area ?? valor.area,
					procesoId: v,
					subprocesoId: "todos",
					indicadorId: "todos"
				});
			}),
			campo("f-sub", "Subproceso", valor.subprocesoId, "Todos los subprocesos", [{
				value: "todos",
				label: "Todos los subprocesos"
			}, ...subs.map((s) => ({
				value: s.id,
				label: s.nombre
			}))], (v) => {
				const sub = subprocesos.find((item) => item.id === v);
				const p = procesos.find((item) => item.id === sub?.procesoId);
				onChange({
					...valor,
					area: p?.area ?? valor.area,
					procesoId: p?.id ?? valor.procesoId,
					subprocesoId: v,
					indicadorId: "todos"
				});
			}),
			campo("f-ind", "Indicador", valor.indicadorId, "Todos los indicadores", [{
				value: "todos",
				label: "Todos los indicadores"
			}, ...inds.map((i) => ({
				value: i.id,
				label: `${i.codigo} · ${i.nombre}`
			}))], (v) => {
				const ind = indicadores.find((item) => item.id === v);
				const sub = subprocesos.find((item) => item.id === ind?.subprocesoId);
				const p = procesos.find((item) => item.id === sub?.procesoId);
				onChange({
					...valor,
					area: p?.area ?? valor.area,
					procesoId: p?.id ?? valor.procesoId,
					subprocesoId: sub?.id ?? valor.subprocesoId,
					indicadorId: v
				});
			})
		]
	});
}
//#endregion
export { FiltrosBar as t };

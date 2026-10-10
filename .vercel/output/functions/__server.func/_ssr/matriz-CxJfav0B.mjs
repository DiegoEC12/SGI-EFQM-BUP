import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { a as CardHeader, i as CardDescription, n as Card, o as CardTitle, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { d as procedimientos, f as procesos, m as subprocesos, n as ANIO_ACTUAL, o as criterios, r as actividades, s as documentos } from "./data-CYFvAbyr.mjs";
import { c as promedio, r as evaluarIndicadores, s as porPilar } from "./metrics-vjSfu0Op.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/matriz-CxJfav0B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Matriz() {
	const [criterioSel, setCriterioSel] = (0, import_react.useState)(criterios[0].id);
	const evaluados = evaluarIndicadores(ANIO_ACTUAL);
	const pilares = porPilar(ANIO_ACTUAL);
	const procs = procesos.filter((p) => p.criterioId === criterioSel);
	const criterio = criterios.find((c) => c.id === criterioSel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Matriz EFQM",
		descripcion: "Trazabilidad entre criterios, procesos y marco operativo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: criterios.map((c) => {
				const p = pilares.find((x) => x.criterioId === c.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCriterioSel(c.id),
					className: "text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: cn("h-full shadow-card transition-colors", c.id === criterioSel ? "border-primary bg-primary/5" : "hover:border-primary/40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "tracking-wide uppercase",
							children: "Criterio EFQM"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-display",
							children: c.nombre
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: c.descripcion
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [p.total, " indicadores"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xl font-semibold",
										children: [p.valor, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: p.valor })
							]
						})]
					})
				}, c.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				className: "tracking-wide uppercase",
				children: "Cascada de trazabilidad"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "font-display",
				children: criterio.nombre
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "space-y-3",
				children: procs.map((p) => {
					const subs = subprocesos.filter((s) => s.procesoId === p.id);
					const valor = promedio(evaluados.filter((e) => e.procesoId === p.id));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									p.codigo,
									" · ",
									p.nombre
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Área ",
									p.area,
									" — Líder ",
									p.lider
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-semibold",
								children: [valor, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2 md:grid-cols-2",
							children: subs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-muted p-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: s.nombre
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted-foreground",
									children: [
										procedimientos.filter((x) => x.subprocesoId === s.id).length,
										" procedimientos ·",
										" ",
										documentos.filter((x) => x.subprocesoId === s.id).length,
										" documentos ·",
										" ",
										actividades.filter((x) => x.subprocesoId === s.id).length,
										" actividades"
									]
								})]
							}, s.id))
						})]
					}, p.id);
				})
			})]
		})]
	});
}
//#endregion
export { Matriz as component };

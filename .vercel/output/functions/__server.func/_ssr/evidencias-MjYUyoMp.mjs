import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as FileText } from "../_libs/lucide-react.mjs";
import { n as Card, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { c as evidencias, f as procesos, l as indicadores, m as subprocesos, p as registros } from "./data-CYFvAbyr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidencias-MjYUyoMp.js
var import_jsx_runtime = require_jsx_runtime();
function Evidencias() {
	const filas = evidencias.map((e) => {
		const reg = registros.find((r) => r.id === e.registroId);
		const ind = indicadores.find((i) => i.id === reg.indicadorId);
		const sub = subprocesos.find((s) => s.id === ind.subprocesoId);
		return {
			e,
			reg,
			ind,
			sub,
			proc: procesos.find((p) => p.id === sub.procesoId)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		titulo: "Evidencias",
		descripcion: "Respaldos documentales de las mediciones",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: filas.map(({ e, reg, ind, proc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-md bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: e.nombre
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: e.tipo
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								ind.codigo,
								" · ",
								ind.nombre
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								proc.nombre,
								" — ",
								reg.periodo,
								" ",
								reg.anio
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Subido por ",
								e.subidoPor,
								" el ",
								e.fecha
							]
						})
					]
				})
			}, e.id))
		})
	});
}
//#endregion
export { Evidencias as component };

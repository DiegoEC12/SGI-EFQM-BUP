import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as CardContent, d as auditoria, i as Card, r as AppShell } from "./data-BFERG5yC.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auditoria-D654ARCC.js
var import_jsx_runtime = require_jsx_runtime();
function Auditoria() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		titulo: "Auditoría",
		descripcion: "Bitácora de acciones del sistema",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "space-y-3 p-4",
				children: auditoria.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2 rounded-md border border-border p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							l.usuario,
							" — ",
							l.accion
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: l.detalle
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: l.modulo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: l.fecha
						})]
					})]
				}, l.id))
			})
		})
	});
}
//#endregion
export { Auditoria as component };

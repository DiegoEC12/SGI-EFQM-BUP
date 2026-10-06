import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estado-badge-CkAamBSr.js
var import_jsx_runtime = require_jsx_runtime();
var estilos = {
	Cumple: "bg-success/12 text-success border-success/30",
	Atención: "bg-warning/15 text-warning-foreground border-warning/40",
	Crítico: "bg-destructive/12 text-destructive border-destructive/30",
	"Sin evaluar": "bg-muted text-muted-foreground border-border"
};
function EstadoBadge({ estado, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", estilos[estado], className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }), estado]
	});
}
//#endregion
export { EstadoBadge as t };

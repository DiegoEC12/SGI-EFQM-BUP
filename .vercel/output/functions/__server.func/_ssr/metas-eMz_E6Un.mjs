import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Card, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as EstadoBadge } from "./estado-badge-CkAamBSr.mjs";
import { t as FiltrosBar } from "./filtros-bar-BbI94k9g.mjs";
import { i as filtrosIniciales, r as evaluarIndicadores, t as aplicarFiltros } from "./metrics-vjSfu0Op.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metas-eMz_E6Un.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Metas() {
	const [filtros, setFiltros] = (0, import_react.useState)(filtrosIniciales);
	const lista = (0, import_react.useMemo)(() => aplicarFiltros(evaluarIndicadores(filtros.anio), filtros), [filtros]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Metas",
		descripcion: `Metas configuradas para el periodo ${filtros.anio}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltrosBar, {
			valor: filtros,
			onChange: setFiltros
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "overflow-x-auto p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Indicador" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Proceso" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Meta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Alcanzado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Brecha"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "w-48",
						children: "Avance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: lista.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: i.indicador.nombre
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: i.indicador.codigo
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: i.proceso
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right text-sm",
						children: [i.meta, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right text-sm",
						children: [i.valor ?? "—", "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-sm",
						children: i.valor === null ? "—" : `${Math.round((i.meta - i.valor) * 10) / 10}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: i.cumplimiento ?? 0 }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstadoBadge, { estado: i.estado }) })
				] }, i.indicador.id)) })] })
			})
		})]
	});
}
//#endregion
export { Metas as component };

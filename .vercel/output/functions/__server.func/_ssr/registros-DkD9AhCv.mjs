import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as CardContent, b as subprocesos, h as indicadores, i as Card, m as evidencias, r as AppShell, v as procesos, y as registros } from "./data-BFERG5yC.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { t as FiltrosBar } from "./filtros-bar-Dgl-5P-e.mjs";
import { i as filtrosIniciales, r as evaluarIndicadores, t as aplicarFiltros } from "./metrics-C_DgalIN.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registros-DkD9AhCv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Registros() {
	const [filtros, setFiltros] = (0, import_react.useState)(filtrosIniciales);
	const filas = (0, import_react.useMemo)(() => {
		const permitidos = new Set(aplicarFiltros(evaluarIndicadores(filtros.anio), filtros).map((i) => i.indicador.id));
		return registros.filter((r) => r.anio === filtros.anio && permitidos.has(r.indicadorId)).map((r) => {
			const ind = indicadores.find((i) => i.id === r.indicadorId);
			const sub = subprocesos.find((s) => s.id === ind.subprocesoId);
			return {
				r,
				ind,
				sub,
				proc: procesos.find((p) => p.id === sub.procesoId),
				evid: evidencias.filter((e) => e.registroId === r.id).length
			};
		});
	}, [filtros]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Registros",
		descripcion: "Mediciones periódicas de los indicadores",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltrosBar, {
			valor: filtros,
			onChange: setFiltros
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "overflow-x-auto p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Indicador" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Subproceso" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Periodo" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Valor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registrado por" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Evidencias" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filas.map(({ r, ind, sub, evid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: ind.nombre
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: ind.codigo
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: sub.nombre
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: r.periodo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right text-sm font-semibold",
						children: [r.valor, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: r.fecha
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: r.registradoPor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: evid ? "default" : "secondary",
						children: [evid, " adjunta(s)"]
					}) })
				] }, r.id)) })] })
			})
		})]
	});
}
//#endregion
export { Registros as component };

import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as CardContent, i as Card, r as AppShell } from "./data-BFERG5yC.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as EstadoBadge } from "./estado-badge-CkAamBSr.mjs";
import { t as FiltrosBar } from "./filtros-bar-Dgl-5P-e.mjs";
import { i as filtrosIniciales, r as evaluarIndicadores, t as aplicarFiltros } from "./metrics-C_DgalIN.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/indicadores-DizYSOi_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function Indicadores() {
	const [filtros, setFiltros] = (0, import_react.useState)(filtrosIniciales);
	const [busqueda, setBusqueda] = (0, import_react.useState)("");
	const [sel, setSel] = (0, import_react.useState)(null);
	const lista = (0, import_react.useMemo)(() => {
		const base = aplicarFiltros(evaluarIndicadores(filtros.anio), filtros);
		const q = busqueda.trim().toLowerCase();
		return q ? base.filter((i) => `${i.indicador.codigo} ${i.indicador.nombre} ${i.proceso} ${i.subproceso} ${i.area}`.toLowerCase().includes(q)) : base;
	}, [filtros, busqueda]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Indicadores",
		descripcion: "Fichas técnicas y desempeño por periodo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltrosBar, {
				valor: filtros,
				onChange: setFiltros
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Buscar por código, nombre, proceso o área…",
				value: busqueda,
				onChange: (e) => setBusqueda(e.target.value),
				className: "max-w-md bg-card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "overflow-x-auto p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Código" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Indicador" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Área" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Frecuencia" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Meta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Valor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Cumplimiento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [lista.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "cursor-pointer",
						onClick: () => setSel(i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "font-mono text-xs",
								children: i.indicador.codigo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: i.indicador.nombre
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: i.subproceso
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-sm",
								children: i.area
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-sm",
								children: i.indicador.frecuencia
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-right text-sm",
								children: [i.meta, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-right text-sm",
								children: i.valor ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-right text-sm font-semibold",
								children: [i.cumplimiento ?? "—", "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstadoBadge, { estado: i.estado }) })
						]
					}, i.indicador.id)), !lista.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 8,
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "No se encontraron indicadores con los filtros aplicados."
					}) })] })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!sel,
				onOpenChange: (o) => !o && setSel(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: sel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display",
						children: sel.indicador.nombre
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						sel.indicador.codigo,
						" · ",
						sel.proceso,
						" · ",
						sel.subproceso
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [
							["Fórmula", sel.indicador.formula],
							["Unidad", sel.indicador.unidad],
							["Frecuencia", sel.indicador.frecuencia],
							["Polaridad", sel.indicador.polaridad],
							["Responsable", sel.indicador.responsable],
							["Área", sel.area],
							["Meta", `${sel.meta}%`],
							["Valor alcanzado", sel.valor === null ? "Sin registro" : `${sel.valor}%`]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-muted p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] tracking-wide text-muted-foreground uppercase",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstadoBadge, {
						estado: sel.estado,
						className: "w-fit"
					})
				] }) })
			})
		]
	});
}
//#endregion
export { Indicadores as component };

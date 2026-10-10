import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { C as ChevronDown, w as Check, x as ChevronUp } from "../_libs/lucide-react.mjs";
import { b as subprocesos, h as indicadores, t as ANIOS, u as areas, v as procesos } from "./data-BFERG5yC.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filtros-bar-Dgl-5P-e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
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

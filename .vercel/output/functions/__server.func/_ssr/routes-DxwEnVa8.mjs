import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { f as Grid3x3, m as Gauge, s as Network } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxwEnVa8.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-institucional px-6 py-16 text-white sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] uppercase text-white/75",
						children: "Colegio Diocesano El Buen Pastor · EFQM 2020"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl",
						children: "Sistema de Gestión Institucional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg",
						children: "Procesos, indicadores, metas y evidencias en un solo lugar para decidir con datos y avanzar en la excelencia educativa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "secondary",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							children: "Ingresar al sistema"
						})
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3 sm:gap-6 sm:py-16",
			children: [
				{
					icon: Network,
					title: "Estructura EFQM",
					description: "Procesos y subprocesos con su marco operativo."
				},
				{
					icon: Gauge,
					title: "Indicadores",
					description: "Cumplimiento y seguimiento de metas institucionales."
				},
				{
					icon: Grid3x3,
					title: "Matriz de procesos",
					description: "Una visión integral de dirección, ejecución y resultados."
				}
			].map(({ icon: Icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-t-2 border-accent pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-6 text-primary",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-xl font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: description
					})
				]
			}, title))
		})]
	});
}
//#endregion
export { Index as component };

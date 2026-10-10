import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { a as CardHeader, i as CardDescription, n as Card, o as CardTitle, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { d as procedimientos, f as procesos, l as indicadores, m as subprocesos, o as criterios, r as actividades, s as documentos } from "./data-CYFvAbyr.mjs";
import { n as avanceSubproceso } from "./metrics-vjSfu0Op.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estructura-CCjPBVHE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function Estructura() {
	const [subSel, setSubSel] = (0, import_react.useState)(subprocesos[0].id);
	const sub = subprocesos.find((s) => s.id === subSel);
	const proceso = procesos.find((p) => p.id === sub.procesoId);
	const procs = procedimientos.filter((x) => x.subprocesoId === sub.id);
	const docs = documentos.filter((x) => x.subprocesoId === sub.id);
	const acts = actividades.filter((x) => x.subprocesoId === sub.id);
	const inds = indicadores.filter((x) => x.subprocesoId === sub.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		titulo: "Estructura de Gestión",
		descripcion: "Proceso ➔ Subproceso ➔ Marco operativo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[340px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "h-fit shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					className: "tracking-wide uppercase",
					children: "Árbol EFQM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-display",
					children: "Procesos institucionales"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "space-y-4",
					children: criterios.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase",
						children: c.pilar
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: procesos.filter((p) => p.criterioId === c.id).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-border p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold",
								children: [
									p.codigo,
									" · ",
									p.nombre
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 space-y-1",
								children: subprocesos.filter((s) => s.procesoId === p.id).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSubSel(s.id),
									className: cn("w-full rounded px-2 py-1 text-left text-xs transition-colors hover:bg-muted", s.id === subSel && "bg-primary font-medium text-primary-foreground hover:bg-primary"),
									children: s.nombre
								}, s.id))
							})]
						}, p.id))
					})] }, c.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
						className: "tracking-wide uppercase",
						children: [
							proceso.codigo,
							" · ",
							proceso.area
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "font-display",
						children: sub.nombre
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Proceso: ",
							proceso.nombre,
							" — Líder: ",
							proceso.lider
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Avance del plan de actividades" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: [avanceSubproceso(sub.id), "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: avanceSubproceso(sub.id),
							className: "mt-1.5"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "actividades",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "actividades",
								children: [
									"Actividades (",
									acts.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "procedimientos",
								children: [
									"Procedimientos (",
									procs.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "documentos",
								children: [
									"Documentación (",
									docs.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "indicadores",
								children: [
									"Indicadores (",
									inds.length,
									")"
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "actividades",
							className: "space-y-2",
							children: acts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: a.nombre
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: a.estado === "En riesgo" ? "destructive" : "secondary",
											children: a.estado
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: ["Responsable: ", a.responsable]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: a.avance,
										className: "mt-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-right text-xs text-muted-foreground",
										children: [a.avance, "% de avance"]
									})
								]
							}, a.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "procedimientos",
							className: "space-y-2",
							children: procs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 rounded-md border border-border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: p.nombre
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Versión ",
										p.version,
										" · Actualizado ",
										p.actualizado
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: p.estado === "Aprobado" ? "default" : "secondary",
									children: p.estado
								})]
							}, p.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "documentos",
							className: "space-y-2",
							children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 rounded-md border border-border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: d.nombre
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										d.tipo,
										" · Versión ",
										d.version,
										" · ",
										d.actualizado
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: d.estado === "Aprobado" ? "default" : "secondary",
									children: d.estado
								})]
							}, d.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "indicadores",
							className: "space-y-2",
							children: inds.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium",
										children: [
											i.codigo,
											" · ",
											i.nombre
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: ["Fórmula: ", i.formula]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											i.frecuencia,
											" · ",
											i.polaridad,
											" · Responsable: ",
											i.responsable
										]
									})
								]
							}, i.id))
						})
					]
				}) })]
			})]
		})
	});
}
//#endregion
export { Estructura as component };

import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { C as CircleQuestionMark, g as Gem, i as TriangleAlert, t as X, w as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as CardHeader, i as CardDescription, n as Card, o as CardTitle, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as EstadoBadge } from "./estado-badge-CkAamBSr.mjs";
import { t as FiltrosBar } from "./filtros-bar-BbI94k9g.mjs";
import { a as historico, i as filtrosIniciales, l as resumen, o as porArea, r as evaluarIndicadores, s as porPilar, t as aplicarFiltros } from "./metrics-vjSfu0Op.mjs";
import { a as Line, c as Cell, i as XAxis, l as ResponsiveContainer, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DvxB09_j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function Gauge$1({ valor }) {
	const angulo = -90 + valor / 100 * 180;
	const color = valor >= 90 ? "var(--success)" : valor >= 70 ? "var(--warning)" : "var(--destructive)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto w-full max-w-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 118",
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14 104 A86 86 0 0 1 60 29",
					fill: "none",
					stroke: "var(--destructive)",
					strokeWidth: "18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 29 A86 86 0 0 1 140 29",
					fill: "none",
					stroke: "var(--warning)",
					strokeWidth: "18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M140 29 A86 86 0 0 1 186 104",
					fill: "none",
					stroke: "var(--success)",
					strokeWidth: "18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					transform: `rotate(${angulo} 100 104)`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "100",
						y1: "104",
						x2: "100",
						y2: "38",
						stroke: "var(--foreground)",
						strokeWidth: "3",
						strokeLinecap: "round"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "104",
					r: "6",
					fill: "var(--foreground)"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-4xl font-bold",
				style: { color },
				children: [valor, "%"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase",
				children: valor >= 90 ? "Cumple" : valor >= 70 ? "Atención" : "Crítico"
			})]
		})]
	});
}
function Kpi({ label, valor, pie, clase, icono: Icono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-xl p-4 text-white shadow-card", clase),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-wide uppercase opacity-90",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icono, { className: "size-4 opacity-80" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl font-bold",
				children: valor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] opacity-85",
				children: pie
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -bottom-8 size-24 rounded-full bg-white/10" })
		]
	});
}
function Dashboard() {
	const [filtros, setFiltros] = (0, import_react.useState)(filtrosIniciales);
	const evaluados = (0, import_react.useMemo)(() => evaluarIndicadores(filtros.anio), [filtros.anio]);
	const lista = (0, import_react.useMemo)(() => aplicarFiltros(evaluados, filtros), [evaluados, filtros]);
	const r = resumen(lista);
	const areas = porArea(lista);
	const pilares = porPilar(filtros.anio, lista);
	const hist = historico(filtros);
	const atencion = lista.filter((i) => i.estado === "Atención");
	const criticos = lista.filter((i) => i.estado === "Crítico");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Dashboard Institucional",
		descripcion: "Colegio Diocesano El Buen Pastor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-xl bg-institucional p-7 text-white shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.2em] uppercase opacity-80",
						children: "SGI · EFQM 2020"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl font-bold",
						children: "Centro de Control Institucional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm opacity-90",
						children: "Panorama del desempeño institucional, cumplimiento de metas y alertas de gestión para facilitar la toma de decisiones."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2 text-[11px]",
						children: [
							`Periodo ${filtros.anio}`,
							`${r.total} indicadores evaluados`,
							"Dirección • Ejecución • Resultados"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/15 px-3 py-1",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 right-8 hidden size-28 -translate-y-1/2 place-items-center rounded-full border-4 border-accent text-center md:grid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl font-bold",
							children: [r.global, "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[9px] tracking-widest uppercase opacity-85",
							children: "Cumplimiento"
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltrosBar, {
				valor: filtros,
				onChange: setFiltros
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Indicadores",
						valor: r.total,
						pie: "Según el filtro activo",
						clase: "bg-chart-4",
						icono: Gem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Cumplen",
						valor: r.cumplen,
						pie: "Meta alcanzada",
						clase: "bg-success",
						icono: CircleCheck
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Atención",
						valor: r.atencion,
						pie: "Requieren seguimiento",
						clase: "bg-warning",
						icono: TriangleAlert
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Críticos",
						valor: r.criticos,
						pie: "Acción prioritaria",
						clase: "bg-destructive",
						icono: TriangleAlert
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Sin evaluar",
						valor: r.sinEvaluar,
						pie: "Datos pendientes",
						clase: "bg-info",
						icono: CircleQuestionMark
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "tracking-wide uppercase",
						children: "Resumen del filtro"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "font-display",
						children: "Cumplimiento institucional"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge$1, { valor: r.global }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 text-center text-xs",
								children: [
									{
										l: "Crítico",
										d: "< 70%",
										c: "bg-destructive"
									},
									{
										l: "Atención",
										d: "70% – 89%",
										c: "bg-warning"
									},
									{
										l: "Cumple",
										d: "≥ 90%",
										c: "bg-success"
									}
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border border-border p-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mx-auto mb-1 block size-2 rounded-full", x.c) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: x.l
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: x.d
										})
									]
								}, x.l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 text-center text-xs",
								children: pilares.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md bg-muted p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-wide text-muted-foreground uppercase",
										children: p.pilar
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg font-semibold",
										children: [p.valor, "%"]
									})]
								}, p.criterioId))
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex-row items-start justify-between gap-3 space-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								className: "tracking-wide uppercase",
								children: "Visión general"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "font-display",
								children: "Nivel de cumplimiento por área"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Áreas ordenadas de menor a mayor cumplimiento."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								children: [
									"Alertas (",
									atencion.length + criticos.length,
									")"
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							className: "w-full overflow-y-auto sm:max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "font-display",
								children: "Indicadores que requieren gestión"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: [
								"Priorizados por nivel de riesgo del periodo ",
								filtros.anio,
								"."
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 px-4 pb-6",
								children: [[...criticos, ...atencion].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border border-border p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: i.indicador.nombre
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstadoBadge, { estado: i.estado })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												i.proceso,
												" · ",
												i.subproceso
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs",
											children: [
												"Avance ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold",
													children: [i.cumplimiento, "%"]
												}),
												" — meta",
												" ",
												i.meta,
												"%"
											]
										})
									]
								}, i.indicador.id)), !criticos.length && !atencion.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "No hay indicadores en riesgo con este filtro."
								})]
							})]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: Math.max(240, areas.length * 34),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: areas,
							layout: "vertical",
							margin: {
								left: 8,
								right: 24
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									horizontal: false,
									stroke: "var(--border)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									domain: [0, 100],
									tick: { fontSize: 11 },
									stroke: "var(--muted-foreground)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									type: "category",
									dataKey: "area",
									width: 130,
									tick: { fontSize: 11 },
									stroke: "var(--muted-foreground)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => [`${v}%`, "Cumplimiento"],
									contentStyle: {
										borderRadius: 8,
										border: "1px solid var(--border)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "valor",
									radius: [
										0,
										4,
										4,
										0
									],
									barSize: 16,
									children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: a.valor >= 90 ? "var(--success)" : a.valor >= 70 ? "var(--warning)" : "var(--destructive)" }, a.area))
								})
							]
						})
					}) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "tracking-wide uppercase",
						children: "Evolución histórica"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "font-display",
						children: "Línea de tiempo del desempeño"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Evolución institucional desde el primer año con información hasta la actualidad."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 260,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: hist,
						margin: {
							left: 8,
							right: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "anio",
								tick: { fontSize: 12 },
								stroke: "var(--muted-foreground)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								domain: [0, 100],
								tick: { fontSize: 12 },
								stroke: "var(--muted-foreground)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								formatter: (v, n) => [`${v}%`, n === "valor" ? "Cumplimiento" : "Meta"],
								contentStyle: {
									borderRadius: 8,
									border: "1px solid var(--border)",
									fontSize: 12
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "meta",
								stroke: "var(--muted-foreground)",
								strokeDasharray: "5 5",
								dot: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "valor",
								stroke: "var(--primary)",
								strokeWidth: 3,
								dot: { r: 5 }
							})
						]
					})
				}) })]
			})
		]
	});
}
//#endregion
export { Dashboard as component };

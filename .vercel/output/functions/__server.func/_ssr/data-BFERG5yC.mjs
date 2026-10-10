import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { E as Activity, S as ChevronRight, T as BookOpen, _ as ClipboardList, a as Target, c as Menu, d as History, f as Grid3x3, g as FileStack, l as Mail, m as Gauge, n as Users, o as Tag, r as User, t as X, u as LogOut, v as Circle, w as Check } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-BFERG5yC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: Gauge
	},
	{
		to: "/estructura",
		label: "Estructura de Gestión",
		icon: BookOpen
	},
	{
		to: "/indicadores",
		label: "Indicadores",
		icon: Activity
	},
	{
		to: "/metas",
		label: "Metas",
		icon: Target
	},
	{
		to: "/registros",
		label: "Registros",
		icon: ClipboardList
	},
	{
		to: "/evidencias",
		label: "Evidencias",
		icon: FileStack
	},
	{
		to: "/matriz",
		label: "Matriz EFQM",
		icon: Grid3x3
	},
	{
		to: "/usuarios",
		label: "Usuarios",
		icon: Users
	},
	{
		to: "/auditoria",
		label: "Auditoría",
		icon: History
	}
];
function AppShell({ titulo, descripcion, children }) {
	const [abierto, setAbierto] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const [perfil, setPerfil] = (0, import_react.useState)({
		nombre: "Usuario institucional",
		correo: "",
		rol: "SGI institucional",
		area: "Área institucional",
		avatar: "U"
	});
	(0, import_react.useEffect)(() => {
		let activo = true;
		(async () => {
			const { data } = await supabase.auth.getUser();
			if (!data.user || !activo) return;
			const correo = data.user.email?.toLowerCase() ?? "";
			const { data: profile } = await supabase.from("profiles").select("nombre, correo, avatar_url").eq("id", data.user.id).maybeSingle();
			const { data: userRole } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).maybeSingle();
			const { data: sgiUser } = await supabase.from("usuarios_sgi").select("area").eq("correo", correo).maybeSingle();
			const nombre = profile?.nombre || data.user.user_metadata?.["full_name"] || "Usuario institucional";
			setPerfil({
				nombre,
				correo: profile?.correo || correo,
				rol: {
					admin: "Administrador",
					directivo: "Directivo",
					lider: "Líder de proceso",
					responsable: "Responsable",
					auditor: "Auditor EFQM",
					lector: "Lector"
				}[userRole?.role ?? ""] || "SGI institucional",
				area: sgiUser?.area || "Área institucional",
				avatar: nombre.charAt(0).toUpperCase()
			});
		})();
		return () => {
			activo = false;
		};
	}, []);
	async function cerrarSesion() {
		await supabase.auth.signOut();
		await navigate({
			to: "/",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			abierto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Cerrar menú",
				className: "fixed inset-0 z-30 bg-black/45 lg:hidden",
				onClick: () => setAbierto(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				"aria-label": "Navegación principal",
				className: cn("fixed inset-y-0 left-0 z-40 w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 lg:flex lg:translate-x-0", abierto ? "flex translate-x-0" : "hidden -translate-x-full lg:flex"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 px-5 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/favicon.png",
								alt: "Escudo Colegio El Buen Pastor",
								className: "size-10 rounded-full bg-white/95 p-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-semibold",
									children: "SGI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-sidebar-foreground/70",
									children: "Gestión Institucional"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-sidebar-foreground hover:bg-sidebar-accent lg:hidden",
							"aria-label": "Cerrar menú",
							onClick: () => setAbierto(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-4 rounded-md bg-sidebar-accent px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-sidebar-accent-foreground",
						children: "EFQM 2020"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-4 flex-1 space-y-1 overflow-y-auto px-3 pb-6",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/dashboard" },
							onClick: () => setAbierto(false),
							className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
							activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-sidebar-border px-5 py-4 text-[11px] leading-snug text-sidebar-foreground/70",
						children: [
							"Colegio Diocesano",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sidebar-foreground",
								children: "El Buen Pastor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Sistema de Gestión de Indicadores",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void cerrarSesion(),
								className: "mt-3 flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-accent-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), " Cerrar sesión"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:px-5 sm:py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-label": "Abrir menú",
							"aria-expanded": abierto,
							onClick: () => setAbierto((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:block",
								children: "Sistema de Gestión Institucional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-lg font-semibold text-foreground sm:text-2xl",
								children: titulo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden text-xs text-muted-foreground sm:block",
								children: descripcion
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success" }), " Sistema activo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "h-auto gap-2 px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground",
									children: perfil.avatar
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden text-left text-xs leading-tight sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block max-w-36 truncate font-semibold",
										children: perfil.nombre
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: perfil.rol
									})]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-72",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
									className: "space-y-2 font-normal",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), perfil.nombre]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), perfil.correo || "Correo institucional"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3.5" }),
												"Rol: ",
												perfil.rol,
												" · ",
												perfil.area
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 size-2 rounded-full bg-success" }), "Sistema activo · EFQM 2020"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => void cerrarSesion(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), "Cerrar sesión"]
								})
							]
						})] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "space-y-6 p-5",
					children
				})]
			})
		]
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var ANIOS = [
	2024,
	2025,
	2026
];
var ANIO_ACTUAL = 2026;
var criterios = [
	{
		id: "c1",
		nombre: "Dirección",
		pilar: "Dirección",
		descripcion: "Propósito, visión y estrategia institucional; cultura de liderazgo y gobierno."
	},
	{
		id: "c2",
		nombre: "Ejecución",
		pilar: "Ejecución",
		descripcion: "Involucrar a los grupos de interés y crear valor sostenible en la operación diaria."
	},
	{
		id: "c3",
		nombre: "Resultados",
		pilar: "Resultados",
		descripcion: "Resultados de percepción y de rendimiento estratégico y operativo."
	}
];
var semillas = [
	{
		codigo: "PE-01",
		proceso: "Promotoría y Dirección Estratégica",
		criterioId: "c1",
		area: "Dirección General",
		lider: "Pbro. Director General",
		subprocesos: [{
			nombre: "Gobierno y orientación pastoral",
			actividades: [
				"Reuniones del Consejo de Promotoría",
				"Alineamiento ideológico y pastoral",
				"Aprobación de inversiones patrimoniales"
			]
		}, {
			nombre: "Planificación y control estratégico",
			actividades: [
				"Jornadas de planificación estratégica",
				"Comités directivos semanales",
				"Evaluación de metas y rendición de cuentas"
			]
		}]
	},
	{
		codigo: "PE-02",
		proceso: "Administración y Finanzas",
		criterioId: "c1",
		area: "Administración",
		lider: "Administradora General",
		subprocesos: [{
			nombre: "Tesorería y control contable",
			actividades: ["Arqueos de caja y conciliaciones", "Cierre contable mensual"]
		}, {
			nombre: "Becas y logística",
			actividades: ["Evaluación socioeconómica para becas", "Selección ética de proveedores"]
		}]
	},
	{
		codigo: "PE-03",
		proceso: "Calidad, Innovación y Mejora Continua",
		criterioId: "c1",
		area: "Calidad",
		lider: "Coordinador de Calidad",
		subprocesos: [{
			nombre: "Autoevaluación EFQM",
			actividades: ["Aplicación de autoevaluaciones EFQM", "Auditorías internas de procesos"]
		}, {
			nombre: "Escucha a grupos de interés",
			actividades: ["Encuestas de satisfacción a familias y personal", "Comités de calidad e innovación"]
		}]
	},
	{
		codigo: "PO-01",
		proceso: "Admisión y Marketing Educativo",
		criterioId: "c2",
		area: "Admisión",
		lider: "Coordinadora de Admisión",
		subprocesos: [{
			nombre: "Captación y promoción",
			actividades: ["Open House / Visitas guiadas", "Jornadas de bienvenida a familias nuevas"]
		}, {
			nombre: "Selección y matrícula",
			actividades: ["Entrevistas psicopedagógicas y pastorales a postulantes", "Ratificación e integración documental"]
		}]
	},
	{
		codigo: "PO-02",
		proceso: "Gestión Pedagógica",
		criterioId: "c2",
		area: "Académica",
		lider: "Director Académico",
		subprocesos: [{
			nombre: "Planificación curricular",
			actividades: ["Desarrollo de unidades integradas de aprendizaje", "Círculos de reflexión pedagógica"]
		}, {
			nombre: "Monitoreo y acompañamiento docente",
			actividades: ["Visitas de monitoreo y acompañamiento en aula", "Talleres de refuerzo académico y nivelación"]
		}]
	},
	{
		codigo: "PO-03",
		proceso: "Pastoral y Formación Cristiana",
		criterioId: "c2",
		area: "Pastoral",
		lider: "Coordinadora de Pastoral",
		subprocesos: [
			{
				nombre: "Planificación y proyección social",
				actividades: [
					"Reuniones de planificación (trimestrales y de cierre de año)",
					"Visitas (Parroquias, Asilos y Albergues) / Campañas solidarias internas",
					"Registro de asistencia de PPFF / Entrega de materiales de reflexión para el hogar"
				]
			},
			{
				nombre: "Vida litúrgica y sacramental",
				actividades: [
					"Participacion Activa en la Eucaristia (lectores, moniciones, ofrendas)",
					"Participacion en Misas y Jornadas (preparación de ambiente y cantos)",
					"Participacion en Misas y Jornadas (retiros de inicio y fin de año)"
				]
			},
			{
				nombre: "Acompañamiento espiritual",
				actividades: ["Asesoramiento Espiritual de Estudiantes", "Asesoramiento Espiritual de Personal (Docente y no Docente) (entrevistas individuales programadas)"]
			}
		]
	},
	{
		codigo: "PO-04",
		proceso: "Tutoría y Bienestar Psicológico",
		criterioId: "c2",
		area: "Bienestar",
		lider: "Coordinadora de TOE",
		subprocesos: [{
			nombre: "Diagnóstico y atención psicológica",
			actividades: ["Cuestionarios psicométricos y diagnóstico", "Sesiones de tutoría y talleres de psicología"]
		}, {
			nombre: "Prevención y trabajo con familias",
			actividades: ["Charlas preventivas para estudiantes, tutores y PPFF", "Reuniones de coordinación de tutoría por grado y Escuela de Padres"]
		}]
	},
	{
		codigo: "PS-01",
		proceso: "Infraestructura y Mantenimiento",
		criterioId: "c2",
		area: "Infraestructura",
		lider: "Jefe de Mantenimiento",
		subprocesos: [{
			nombre: "Obras y mejoras",
			actividades: [
				"Revisiones técnicas de pabellones y aulas",
				"Ejecución de obras de remodelación y pintado",
				"Reparación de mobiliario escolar"
			]
		}, {
			nombre: "Mantenimiento y limpieza",
			actividades: [
				"Mantenimiento rutinario de aulas y proyectores",
				"Jornadas de limpieza y desinfección",
				"Atención y solución de incidencias reportadas"
			]
		}]
	},
	{
		codigo: "PS-02",
		proceso: "Tecnología de la Información",
		criterioId: "c2",
		area: "TIC",
		lider: "Jefe de TIC",
		subprocesos: [{
			nombre: "Soporte y continuidad",
			actividades: ["Atención de tickets de soporte técnico", "Ejecución periódica de respaldos digitales"]
		}, {
			nombre: "Infraestructura tecnológica",
			actividades: ["Monitoreo de redes VLAN y cámaras CCTV", "Despliegue de imágenes y configuración de Chromebooks"]
		}]
	},
	{
		codigo: "PS-03",
		proceso: "Imagen Institucional y Comunicaciones",
		criterioId: "c2",
		area: "Comunicaciones",
		lider: "Coordinador de Imagen",
		subprocesos: [{
			nombre: "Contenidos y difusión",
			actividades: ["Gestión y publicación de contenidos audiovisuales", "Diseño gráfico institucional"]
		}, {
			nombre: "Cobertura institucional",
			actividades: ["Toma, edición y publicación de fotografías", "Cobertura de eventos, actuaciones y misas"]
		}]
	},
	{
		codigo: "PS-04",
		proceso: "Gestión del Talento Humano",
		criterioId: "c2",
		area: "Talento Humano",
		lider: "Jefa de Personal",
		subprocesos: [{
			nombre: "Selección y desarrollo",
			actividades: ["Entrevistas de selección por perfil carismático", "Capacitaciones pedagógicas y pastorales al personal"]
		}, {
			nombre: "Desempeño y seguridad laboral",
			actividades: ["Evaluación anual del desempeño del personal", "Gestión de planillas, inspecciones de seguridad y simulacros"]
		}]
	},
	{
		codigo: "PR-01",
		proceso: "Resultados de Formación Integral",
		criterioId: "c3",
		area: "Académica",
		lider: "Director Académico",
		subprocesos: [{
			nombre: "Logros de aprendizaje y talentos",
			actividades: ["Ejecución y clausuras de talleres extracurriculares", "Entrenamientos y presentaciones de selecciones/elencos"]
		}, {
			nombre: "Salud y seguridad escolar",
			actividades: ["Atención médica de primeros auxilios y supervisión sanitaria"]
		}]
	}
];
var responsables = [
	"Administradora General",
	"Coordinador de Calidad",
	"Director Académico",
	"Coordinadora de Pastoral",
	"Jefe de TIC",
	"Jefa de Personal",
	"Coordinadora de TOE"
];
function rnd(seed) {
	const x = Math.sin(seed * 9301 + 49297) * 233280;
	return x - Math.floor(x);
}
var estadosAct = [
	"Completada",
	"En ejecución",
	"Planificada",
	"En riesgo"
];
var estadosDoc = [
	"Aprobado",
	"En revisión",
	"Borrador"
];
var frecuencias = [
	"Mensual",
	"Bimestral",
	"Trimestral",
	"Semestral",
	"Anual"
];
var procesos = [];
var subprocesos = [];
var procedimientos = [];
var documentos = [];
var actividades = [];
var indicadores = [];
var metas = [];
var registros = [];
var evidencias = [];
var s = 1;
semillas.forEach((sem, pi) => {
	const pid = `p${pi + 1}`;
	procesos.push({
		id: pid,
		codigo: sem.codigo,
		nombre: sem.proceso,
		criterioId: sem.criterioId,
		area: sem.area,
		lider: sem.lider
	});
	sem.subprocesos.forEach((sub, si) => {
		const sid = `${pid}-s${si + 1}`;
		subprocesos.push({
			id: sid,
			procesoId: pid,
			nombre: sub.nombre
		});
		procedimientos.push({
			id: `${sid}-pr1`,
			subprocesoId: sid,
			nombre: `Procedimiento de ${sub.nombre.toLowerCase()}`,
			version: `v1.${si + 1}`,
			estado: estadosDoc[Math.floor(rnd(s++) * 3)],
			actualizado: `2026-0${si % 8 + 1}-15`
		});
		documentos.push({
			id: `${sid}-d1`,
			subprocesoId: sid,
			nombre: `Formato de registro — ${sub.nombre}`,
			tipo: "Formato",
			version: "v2.0",
			estado: estadosDoc[Math.floor(rnd(s++) * 3)],
			actualizado: `2026-0${si % 8 + 2}-03`
		});
		documentos.push({
			id: `${sid}-d2`,
			subprocesoId: sid,
			nombre: `Guía operativa — ${sem.proceso}`,
			tipo: "Guía",
			version: "v1.0",
			estado: "Aprobado",
			actualizado: "2025-12-20"
		});
		sub.actividades.forEach((nombre, ai) => {
			const r = rnd(s++);
			const avance = Math.round(45 + r * 55);
			actividades.push({
				id: `${sid}-a${ai + 1}`,
				subprocesoId: sid,
				nombre,
				responsable: sem.lider,
				avance,
				estado: avance >= 100 ? "Completada" : avance >= 75 ? "En ejecución" : avance >= 60 ? "Planificada" : estadosAct[3]
			});
		});
		const iid = `${sid}-i1`;
		indicadores.push({
			id: iid,
			codigo: `IND-${String(indicadores.length + 1).padStart(3, "0")}`,
			subprocesoId: sid,
			nombre: `Cumplimiento de ${sub.nombre.toLowerCase()}`,
			formula: "(Actividades ejecutadas / Actividades programadas) × 100",
			unidad: "%",
			frecuencia: frecuencias[Math.floor(rnd(s++) * frecuencias.length)],
			polaridad: "Ascendente",
			responsable: responsables[Math.floor(rnd(s++) * responsables.length)],
			peso: 1
		});
		ANIOS.forEach((anio) => {
			metas.push({
				id: `${iid}-m${anio}`,
				indicadorId: iid,
				anio,
				valor: 100
			});
			const base = 62 + rnd(s++) * 38;
			const valor = Math.min(100, Math.round((base + (anio - 2024) * 3) * 10) / 10);
			const rid = `${iid}-r${anio}`;
			registros.push({
				id: rid,
				indicadorId: iid,
				anio,
				periodo: anio === 2026 ? "Parcial I" : "Cierre anual",
				valor,
				fecha: `${anio}-${anio === 2026 ? "09" : "12"}-15`,
				registradoPor: sem.lider
			});
			if (anio === 2026) evidencias.push({
				id: `${rid}-e1`,
				registroId: rid,
				nombre: `Acta de verificación ${sub.nombre}.pdf`,
				tipo: "PDF",
				subidoPor: sem.lider,
				fecha: `${anio}-09-16`
			});
		});
	});
});
var usuarios = [
	{
		id: "u1",
		nombre: "Administrador SGI",
		correo: "sistemas@bup.edu.pe",
		rol: "Administrador",
		area: "TIC",
		activo: true
	},
	{
		id: "u2",
		nombre: "Pbro. Director General",
		correo: "direccion@bup.edu.pe",
		rol: "Directivo",
		area: "Dirección General",
		activo: true
	},
	{
		id: "u3",
		nombre: "Administradora General",
		correo: "administracion@bup.edu.pe",
		rol: "Líder de proceso",
		area: "Administración",
		activo: true
	},
	{
		id: "u4",
		nombre: "Coordinador de Calidad",
		correo: "calidad@bup.edu.pe",
		rol: "Auditor EFQM",
		area: "Calidad",
		activo: true
	},
	{
		id: "u5",
		nombre: "Director Académico",
		correo: "academico@bup.edu.pe",
		rol: "Líder de proceso",
		area: "Académica",
		activo: true
	},
	{
		id: "u6",
		nombre: "Coordinadora de Pastoral",
		correo: "pastoral@bup.edu.pe",
		rol: "Responsable de área",
		area: "Pastoral",
		activo: true
	},
	{
		id: "u7",
		nombre: "Jefa de Personal",
		correo: "personal@bup.edu.pe",
		rol: "Responsable de área",
		area: "Talento Humano",
		activo: false
	}
];
var auditoria = [
	{
		id: "l1",
		fecha: "2026-09-24 13:42",
		usuario: "Coordinador de Calidad",
		accion: "Actualizó registro",
		modulo: "Registros",
		detalle: "IND-007 — Parcial I 2026"
	},
	{
		id: "l2",
		fecha: "2026-09-24 11:05",
		usuario: "Director Académico",
		accion: "Cargó evidencia",
		modulo: "Evidencias",
		detalle: "Acta de verificación monitoreo docente.pdf"
	},
	{
		id: "l3",
		fecha: "2026-09-23 17:20",
		usuario: "Administrador SGI",
		accion: "Creó usuario",
		modulo: "Usuarios",
		detalle: "personal@bup.edu.pe (Responsable de área)"
	},
	{
		id: "l4",
		fecha: "2026-09-23 09:12",
		usuario: "Administradora General",
		accion: "Aprobó documento",
		modulo: "Marco operativo",
		detalle: "Procedimiento de tesorería y control contable v1.1"
	},
	{
		id: "l5",
		fecha: "2026-09-22 16:48",
		usuario: "Coordinadora de Pastoral",
		accion: "Editó meta",
		modulo: "Metas",
		detalle: "IND-012 meta 2026 = 100%"
	}
];
var areas = Array.from(new Set(procesos.map((p) => p.area))).sort();
//#endregion
export { procedimientos as _, CardContent as a, subprocesos as b, CardTitle as c, auditoria as d, criterios as f, metas as g, indicadores as h, Card as i, actividades as l, evidencias as m, ANIO_ACTUAL as n, CardDescription as o, documentos as p, AppShell as r, CardHeader as s, ANIOS as t, areas as u, procesos as v, usuarios as x, registros as y };

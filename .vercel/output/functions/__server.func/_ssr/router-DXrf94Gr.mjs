import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { G as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DXrf94Gr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CY2X34G_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SGI EFQM · Colegio Diocesano El Buen Pastor" },
			{
				name: "description",
				content: "Sistema de Gestión Institucional basado en el modelo EFQM del Colegio Diocesano El Buen Pastor."
			},
			{
				name: "author",
				content: "Colegio Diocesano El Buen Pastor"
			},
			{
				property: "og:title",
				content: "SGI EFQM · Colegio Diocesano El Buen Pastor"
			},
			{
				property: "og:description",
				content: "Indicadores, procesos y marco operativo del modelo de excelencia EFQM."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$12 = () => import("./routes-DxwEnVa8.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "SGI EFQM | Colegio Diocesano El Buen Pastor" },
		{
			name: "description",
			content: "Sistema de Gestión Institucional basado en el modelo EFQM 2020: procesos, indicadores, metas y resultados."
		},
		{
			property: "og:title",
			content: "SGI EFQM | Colegio El Buen Pastor"
		},
		{
			property: "og:description",
			content: "Gestión de procesos, indicadores y metas bajo el modelo EFQM 2020."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_authenticated-BsiboBRC.mjs");
var Route$11 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data } = await supabase.auth.getSession();
		const email = data.session?.user.email?.trim().toLowerCase();
		if (!data.session || !email?.endsWith("@bup.edu.pe")) {
			if (data.session) await supabase.auth.signOut();
			throw redirect({ to: "/auth" });
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./auditoria-CCj4ttiU.mjs");
var Route$10 = createFileRoute("/_authenticated/auditoria")({
	head: () => ({ meta: [
		{ title: "Auditoría · SGI EFQM" },
		{
			name: "description",
			content: "Bitácora de acciones realizadas en el Sistema de Gestión Institucional."
		},
		{
			property: "og:title",
			content: "Auditoría · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Trazabilidad de cambios por usuario, módulo y fecha."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./dashboard-DvxB09_j.mjs");
var Route$9 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [
		{ title: "Dashboard Institucional · SGI EFQM — El Buen Pastor" },
		{
			name: "description",
			content: "Centro de control institucional del Colegio Diocesano El Buen Pastor: cumplimiento de indicadores EFQM por área, proceso y subproceso."
		},
		{
			property: "og:title",
			content: "Dashboard Institucional · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Panorama del desempeño institucional, metas y alertas de gestión del modelo EFQM."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./estructura-CCjPBVHE.mjs");
var Route$8 = createFileRoute("/_authenticated/estructura")({
	head: () => ({ meta: [
		{ title: "Estructura de Gestión · SGI EFQM" },
		{
			name: "description",
			content: "Procesos, subprocesos y marco operativo (procedimientos, documentación y actividades) del SGI EFQM."
		},
		{
			property: "og:title",
			content: "Estructura de Gestión · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Navegación jerárquica de procesos, subprocesos y marco operativo."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./evidencias-MjYUyoMp.mjs");
var Route$7 = createFileRoute("/_authenticated/evidencias")({
	head: () => ({ meta: [
		{ title: "Evidencias · SGI EFQM" },
		{
			name: "description",
			content: "Repositorio de evidencias que respaldan los registros de indicadores EFQM."
		},
		{
			property: "og:title",
			content: "Evidencias · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Actas, formatos y respaldos vinculados a cada medición."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./indicadores-D6rWcFLX.mjs");
var Route$6 = createFileRoute("/_authenticated/indicadores")({
	head: () => ({ meta: [{ title: "Indicadores · SGI EFQM" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./matriz-CxJfav0B.mjs");
var Route$5 = createFileRoute("/_authenticated/matriz")({
	head: () => ({ meta: [
		{ title: "Matriz EFQM · SGI" },
		{
			name: "description",
			content: "Matriz de trazabilidad EFQM: criterios, procesos, subprocesos y marco operativo que los sustentan."
		},
		{
			property: "og:title",
			content: "Matriz EFQM · SGI"
		},
		{
			property: "og:description",
			content: "Trazabilidad en cascada del modelo EFQM 2020 en la institución."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./metas-eMz_E6Un.mjs");
var Route$4 = createFileRoute("/_authenticated/metas")({
	head: () => ({ meta: [
		{ title: "Metas · SGI EFQM" },
		{
			name: "description",
			content: "Metas anuales por indicador, brecha frente al valor alcanzado y estado."
		},
		{
			property: "og:title",
			content: "Metas · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Configuración y seguimiento de metas anuales por indicador."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./registros-CEZ7wUDp.mjs");
var Route$3 = createFileRoute("/_authenticated/registros")({
	head: () => ({ meta: [
		{ title: "Registros · SGI EFQM" },
		{
			name: "description",
			content: "Mediciones periódicas cargadas por los responsables de cada subproceso."
		},
		{
			property: "og:title",
			content: "Registros · SGI EFQM"
		},
		{
			property: "og:description",
			content: "Histórico de mediciones de indicadores con evidencias asociadas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./usuarios-QRDsqQA3.mjs");
var Route$2 = createFileRoute("/_authenticated/usuarios")({
	head: () => ({ meta: [{ title: "Usuarios y roles · SGI EFQM" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./auth-ChLAO7st.mjs");
var Route$1 = createFileRoute("/auth/")({
	head: () => ({ meta: [
		{ title: "Acceso | SGI EFQM - El Buen Pastor" },
		{
			name: "description",
			content: "Ingrese al Sistema de Gestión Institucional EFQM del Colegio Diocesano El Buen Pastor."
		},
		{
			property: "og:title",
			content: "Acceso al SGI EFQM"
		},
		{
			property: "og:description",
			content: "Panel institucional de indicadores, procesos y marco operativo."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./callback-uAnhySUR.mjs");
var Route = createFileRoute("/auth/callback")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AuthenticatedRoute = Route$11.update({
	id: "/_authenticated",
	getParentRoute: () => Route$13
});
var AuthenticatedAuditoriaRoute = Route$10.update({
	id: "/auditoria",
	path: "/auditoria",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedDashboardRoute = Route$9.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedEstructuraRoute = Route$8.update({
	id: "/estructura",
	path: "/estructura",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedEvidenciasRoute = Route$7.update({
	id: "/evidencias",
	path: "/evidencias",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedIndicadoresRoute = Route$6.update({
	id: "/indicadores",
	path: "/indicadores",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedMatrizRoute = Route$5.update({
	id: "/matriz",
	path: "/matriz",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedMetasRoute = Route$4.update({
	id: "/metas",
	path: "/metas",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedRegistrosRoute = Route$3.update({
	id: "/registros",
	path: "/registros",
	getParentRoute: () => AuthenticatedRoute
});
var AuthenticatedUsuariosRoute = Route$2.update({
	id: "/usuarios",
	path: "/usuarios",
	getParentRoute: () => AuthenticatedRoute
});
var AuthIndexRoute = Route$1.update({
	id: "/auth/",
	path: "/auth/",
	getParentRoute: () => Route$13
});
var AuthCallbackRoute = Route.update({
	id: "/auth/callback",
	path: "/auth/callback",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteChildren = {
	AuthenticatedAuditoriaRoute,
	AuthenticatedDashboardRoute,
	AuthenticatedEstructuraRoute,
	AuthenticatedEvidenciasRoute,
	AuthenticatedIndicadoresRoute,
	AuthenticatedMatrizRoute,
	AuthenticatedMetasRoute,
	AuthenticatedRegistrosRoute,
	AuthenticatedUsuariosRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRoute: AuthenticatedRoute._addFileChildren(AuthenticatedRouteChildren),
	AuthCallbackRoute,
	AuthIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

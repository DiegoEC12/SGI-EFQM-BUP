import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-ChLAO7st.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [nombre, setNombre] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		async function redirectExistingSession() {
			try {
				const { data } = await supabase.auth.getSession();
				const email = data.session?.user.email?.trim().toLowerCase();
				if (data.session && email?.endsWith("@bup.edu.pe")) await navigate({
					to: "/dashboard",
					replace: true
				});
				else if (data.session && email) {
					await supabase.auth.signOut();
					setFeedback({
						type: "error",
						text: "Solo se permite el ingreso con correo institucional @bup.edu.pe"
					});
				}
			} catch {
				setFeedback({
					type: "error",
					text: "No se pudo conectar con el servicio de autenticación."
				});
			}
		}
		redirectExistingSession();
	}, [navigate]);
	async function submit(event) {
		event.preventDefault();
		setLoading(true);
		setFeedback(null);
		try {
			const institutionalEmail = email.trim().toLowerCase();
			if (!institutionalEmail.endsWith("@bup.edu.pe")) {
				setFeedback({
					type: "error",
					text: "Solo se permite el ingreso con correo institucional @bup.edu.pe"
				});
				return;
			}
			if (mode === "login") {
				const { error } = await supabase.auth.signInWithPassword({
					email: institutionalEmail,
					password
				});
				if (error) throw error;
				await navigate({
					to: "/dashboard",
					replace: true
				});
			} else {
				const { data, error } = await supabase.auth.signUp({
					email: institutionalEmail,
					password,
					options: {
						emailRedirectTo: window.location.origin,
						data: { nombre }
					}
				});
				if (error) throw error;
				if (data.session) await navigate({
					to: "/dashboard",
					replace: true
				});
				else setFeedback({
					type: "success",
					text: "Cuenta creada. Revise su correo para confirmarla."
				});
			}
		} catch (error) {
			setFeedback({
				type: "error",
				text: error instanceof Error ? error.message : "No se pudo completar la operación."
			});
		} finally {
			setLoading(false);
		}
	}
	async function signInWithGoogle() {
		setLoading(true);
		setFeedback(null);
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${window.location.origin}/auth/callback`,
					queryParams: {
						hd: "bup.edu.pe",
						prompt: "select_account"
					}
				}
			});
			if (error) throw error;
		} catch (error) {
			setFeedback({
				type: "error",
				text: error instanceof Error ? error.message : "No se pudo iniciar sesión con Google."
			});
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid min-h-screen bg-background lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-between bg-institucional px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex w-fit items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-full bg-accent font-display font-bold text-accent-foreground",
						children: "EBP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg",
						children: "SGI · EFQM 2020"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-white/75",
						children: "Colegio Diocesano El Buen Pastor"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-10 max-w-lg lg:my-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.18em] uppercase text-accent",
							children: "Centro de control institucional"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl",
							children: "Dirección, ejecución y resultados en un solo tablero."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-white/80",
							children: "Procesos, indicadores, metas y evidencias con trazabilidad para acompañar la gestión institucional."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-white/60",
					children: "Sistema de Gestión de Indicadores"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex items-center justify-center px-6 py-12 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: "← Volver al inicio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs font-semibold tracking-[0.16em] text-primary uppercase",
						children: mode === "login" ? "Iniciar sesión" : "Crear cuenta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: mode === "login" ? "Bienvenido de vuelta" : "Registro institucional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-8 space-y-4",
						children: [
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "nombre",
									children: "Nombre completo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "nombre",
									autoComplete: "name",
									value: nombre,
									onChange: (event) => setNombre(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Correo institucional"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									autoComplete: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Contraseña"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									autoComplete: mode === "login" ? "current-password" : "new-password",
									minLength: 6,
									value: password,
									onChange: (event) => setPassword(event.target.value),
									required: true
								})]
							}),
							feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: feedback.type === "error" ? "alert" : "status",
								className: feedback.type === "error" ? "text-sm text-destructive" : "text-sm text-success",
								children: feedback.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: loading,
								children: loading ? "Procesando..." : mode === "login" ? "Ingresar" : "Crear cuenta"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-5 flex items-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							" o ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						onClick: signInWithGoogle,
						disabled: loading,
						children: "Continuar con Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-sm text-muted-foreground",
						children: [
							mode === "login" ? "¿No tiene cuenta?" : "¿Ya tiene cuenta?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-semibold text-primary underline-offset-4 hover:underline",
								onClick: () => {
									setFeedback(null);
									setMode(mode === "login" ? "signup" : "login");
								},
								children: mode === "login" ? "Regístrese" : "Inicie sesión"
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };

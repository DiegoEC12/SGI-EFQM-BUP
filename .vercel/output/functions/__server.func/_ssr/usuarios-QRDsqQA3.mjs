import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { a as Trash2, c as Plus, l as Pencil } from "../_libs/lucide-react.mjs";
import { n as Card, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-BBUarmca.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/usuarios-QRDsqQA3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vacio = {
	nombre: "",
	correo: "",
	rol: "Responsable de área",
	area: "",
	activo: true
};
function Usuarios() {
	const [usuarios, setUsuarios] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(vacio);
	const [editando, setEditando] = (0, import_react.useState)(null);
	const [abierto, setAbierto] = (0, import_react.useState)(false);
	const [cargando, setCargando] = (0, import_react.useState)(true);
	async function cargar() {
		setCargando(true);
		const { data, error } = await supabase.from("usuarios_sgi").select("*").order("nombre");
		if (error) toast.error(`No se pudieron cargar los usuarios: ${error.message}`);
		else setUsuarios(data ?? []);
		setCargando(false);
	}
	(0, import_react.useEffect)(() => {
		cargar();
	}, []);
	function abrir(usuario) {
		setEditando(usuario ?? null);
		setForm(usuario ? {
			nombre: usuario.nombre,
			correo: usuario.correo,
			rol: usuario.rol,
			area: usuario.area,
			activo: usuario.activo
		} : vacio);
		setAbierto(true);
	}
	async function guardar(e) {
		e.preventDefault();
		if (!form.nombre.trim() || !form.correo.trim()) return toast.error("Nombre y correo son obligatorios.");
		const result = editando ? await supabase.from("usuarios_sgi").update(form).eq("id", editando.id) : await supabase.from("usuarios_sgi").insert(form);
		if (result.error) return toast.error(`No se pudo guardar: ${result.error.message}`);
		toast.success(editando ? "Usuario actualizado." : "Usuario creado.");
		setAbierto(false);
		await cargar();
	}
	async function eliminar(usuario) {
		if (!window.confirm(`¿Eliminar a ${usuario.nombre}?`)) return;
		const { error } = await supabase.from("usuarios_sgi").delete().eq("id", usuario.id);
		if (error) toast.error(`No se pudo eliminar: ${error.message}`);
		else {
			toast.success("Usuario eliminado.");
			await cargar();
		}
	}
	const campo = (key, value) => setForm((actual) => ({
		...actual,
		[key]: value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Usuarios",
		descripcion: "Accesos y roles del sistema de gestión",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => abrir(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Nuevo usuario"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "overflow-x-auto p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usuario" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Correo" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Rol" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Área" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "w-28 text-right",
							children: "Acciones"
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [cargando ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground",
						children: "Cargando usuarios…"
					}) }) : usuarios.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm font-medium",
							children: u.nombre
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm text-muted-foreground",
							children: u.correo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: u.rol
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm",
							children: u.area || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: u.activo ? "default" : "destructive",
							children: u.activo ? "Activo" : "Inactivo"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": "Editar",
								onClick: () => abrir(u),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": "Eliminar",
								onClick: () => void eliminar(u),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})]
						}) })
					] }, u.id)), !cargando && !usuarios.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground",
						children: "No hay usuarios registrados."
					}) })] })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: abierto,
				onOpenChange: setAbierto,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: guardar,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editando ? "Editar usuario" : "Nuevo usuario" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Los cambios se guardan en Supabase." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.nombre,
										onChange: (e) => campo("nombre", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Correo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "email",
										value: form.correo,
										onChange: (e) => campo("correo", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Rol", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.rol,
										onChange: (e) => campo("rol", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Área", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.area,
										onChange: (e) => campo("area", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: form.activo,
										onChange: (e) => campo("activo", e.target.checked)
									}), " Usuario activo"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setAbierto(false),
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Guardar"
						})] })
					]
				}) })
			})
		]
	});
}
//#endregion
export { Usuarios as component };

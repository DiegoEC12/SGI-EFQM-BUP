import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { a as Trash2, b as Eye, c as Plus, l as Pencil, v as FileText } from "../_libs/lucide-react.mjs";
import { n as Card, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-BBUarmca.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidencias-DKhiVF7L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BUCKET = "sgi-evidencias";
var vacio = {
	registro_id: "",
	nombre: "",
	tipo: "PDF",
	archivo: null
};
function Evidencias() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [registros, setRegistros] = (0, import_react.useState)([]);
	const [indicadores, setIndicadores] = (0, import_react.useState)([]);
	const [admin, setAdmin] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(vacio);
	const [editando, setEditando] = (0, import_react.useState)(null);
	const [abierto, setAbierto] = (0, import_react.useState)(false);
	const [cargando, setCargando] = (0, import_react.useState)(true);
	async function cargar() {
		setCargando(true);
		const [e, r, i, u] = await Promise.all([
			supabase.from("evidencias").select("id,registro_id,nombre,tipo,subido_por,fecha,archivo_path,archivo_mime,archivo_tamano").order("fecha", { ascending: false }),
			supabase.from("registros").select("*").order("anio", { ascending: false }),
			supabase.from("indicadores").select("*").order("codigo"),
			supabase.auth.getUser()
		]);
		if (e.error || r.error || i.error) toast.error(`No se pudieron cargar las evidencias: ${e.error?.message ?? r.error?.message ?? i.error?.message}`);
		else {
			setItems(e.data ?? []);
			setRegistros(r.data ?? []);
			setIndicadores(i.data ?? []);
		}
		if (u.data.user) {
			const role = await supabase.from("user_roles").select("role").eq("user_id", u.data.user.id).maybeSingle();
			setAdmin(role.data?.role === "admin");
		}
		setCargando(false);
	}
	(0, import_react.useEffect)(() => {
		cargar();
	}, []);
	function abrir(item) {
		setEditando(item ?? null);
		setForm(item ? {
			registro_id: item.registro_id,
			nombre: item.nombre,
			tipo: item.tipo,
			archivo: null
		} : {
			...vacio,
			registro_id: registros[0]?.id ?? ""
		});
		setAbierto(true);
	}
	async function guardar(e) {
		e.preventDefault();
		if (!form.registro_id || !form.nombre.trim()) {
			toast.error("Registro y nombre son obligatorios.");
			return;
		}
		if (!editando && !form.archivo) {
			toast.error("Selecciona el documento de la evidencia.");
			return;
		}
		let path = editando?.archivo_path ?? null;
		if (form.archivo) {
			path = `${form.registro_id}/${crypto.randomUUID()}-${form.archivo.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
			const upload = await supabase.storage.from(BUCKET).upload(path, form.archivo, {
				upsert: false,
				contentType: form.archivo.type
			});
			if (upload.error) {
				toast.error(`No se pudo subir el documento: ${upload.error.message}`);
				return;
			}
		}
		const values = {
			registro_id: form.registro_id,
			nombre: form.nombre,
			tipo: form.tipo,
			...path ? {
				archivo_path: path,
				archivo_mime: form.archivo?.type ?? editando?.archivo_mime,
				archivo_tamano: form.archivo?.size ?? editando?.archivo_tamano
			} : {}
		};
		const result = editando ? await supabase.from("evidencias").update(values).eq("id", editando.id) : await supabase.from("evidencias").insert({
			...values,
			subido_por: (await supabase.auth.getUser()).data.user?.email ?? ""
		});
		if (result.error) {
			toast.error(`No se pudo guardar: ${result.error.message}`);
			return;
		}
		toast.success(editando ? "Evidencia actualizada." : "Evidencia creada.");
		setAbierto(false);
		await cargar();
	}
	async function eliminar(item) {
		if (!window.confirm(`¿Eliminar ${item.nombre}?`)) return;
		const { error } = await supabase.from("evidencias").delete().eq("id", item.id);
		if (error) toast.error(`No se pudo eliminar: ${error.message}`);
		else {
			if (item.archivo_path) await supabase.storage.from(BUCKET).remove([item.archivo_path]);
			toast.success("Evidencia eliminada.");
			await cargar();
		}
	}
	async function ver(item) {
		if (!item.archivo_path) {
			toast.info("Esta evidencia histórica aún no tiene un documento adjunto.");
			return;
		}
		const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(item.archivo_path, 300, { download: false });
		if (error) toast.error(`No se pudo abrir el documento: ${error.message}`);
		else window.open(data.signedUrl, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Evidencias",
		descripcion: "Respaldos documentales de las mediciones",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => abrir(),
					disabled: !admin,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Nueva evidencia"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: cargando ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Cargando evidencias…"
				}) : items.map((e) => {
					const reg = registros.find((r) => r.id === e.registro_id);
					const ind = indicadores.find((i) => i.id === reg?.indicador_id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-2 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 place-items-center rounded-md bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: e.nombre
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										children: e.tipo
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										ind?.codigo ?? "—",
										" · ",
										ind?.nombre ?? "Registro"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										reg?.periodo ?? "",
										" ",
										reg?.anio ?? "",
										" · Subido por ",
										e.subido_por || "—"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => void ver(e),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {}), " Ver documento"]
									}), admin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Editar",
										onClick: () => abrir(e),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Eliminar",
										onClick: () => void eliminar(e),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
									})] })]
								})
							]
						})
					}, e.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: abierto,
				onOpenChange: setAbierto,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: guardar,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editando ? "Editar evidencia" : "Nueva evidencia" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"El documento se almacenará en el bucket privado ",
							BUCKET,
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Registro asociado", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: form.registro_id,
										onValueChange: (v) => setForm({
											...form,
											registro_id: v
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecciona un registro" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: registros.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
											value: r.id,
											children: [
												r.anio,
												" · ",
												r.periodo,
												" · ",
												indicadores.find((i) => i.id === r.indicador_id)?.codigo ?? r.indicador_id
											]
										}, r.id)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.nombre,
										onChange: (e) => setForm({
											...form,
											nombre: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Tipo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.tipo,
										onChange: (e) => setForm({
											...form,
											tipo: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: [
										"Documento ",
										editando && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "(opcional para conservar el actual)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "file",
											accept: ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg",
											onChange: (e) => setForm({
												...form,
												archivo: e.target.files?.[0] ?? null
											})
										})
									]
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
export { Evidencias as component };

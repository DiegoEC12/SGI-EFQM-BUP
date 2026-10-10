import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { a as Trash2, c as Plus, l as Pencil } from "../_libs/lucide-react.mjs";
import { n as Card, r as CardContent, t as AppShell } from "./card-tBwzq2Kc.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-BBUarmca.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/indicadores-DqPi1hdm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vacio = {
	codigo: "",
	nombre: "",
	formula: "",
	unidad: "%",
	frecuencia: "Anual",
	polaridad: "Ascendente",
	responsable: "",
	peso: 1,
	subproceso_id: ""
};
function Indicadores() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [subprocesos, setSubprocesos] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(vacio);
	const [editando, setEditando] = (0, import_react.useState)(null);
	const [abierto, setAbierto] = (0, import_react.useState)(false);
	const [cargando, setCargando] = (0, import_react.useState)(true);
	const [busqueda, setBusqueda] = (0, import_react.useState)("");
	async function cargar() {
		setCargando(true);
		const [i, s] = await Promise.all([supabase.from("indicadores").select("*").order("codigo"), supabase.from("subprocesos").select("*").order("nombre")]);
		if (i.error || s.error) toast.error(`No se pudieron cargar los datos: ${i.error?.message ?? s.error?.message}`);
		else {
			setItems(i.data ?? []);
			setSubprocesos(s.data ?? []);
		}
		setCargando(false);
	}
	(0, import_react.useEffect)(() => {
		cargar();
	}, []);
	function abrir(item) {
		setEditando(item ?? null);
		setForm(item ? {
			codigo: item.codigo,
			nombre: item.nombre,
			formula: item.formula,
			unidad: item.unidad,
			frecuencia: item.frecuencia,
			polaridad: item.polaridad,
			responsable: item.responsable,
			peso: item.peso,
			subproceso_id: item.subproceso_id
		} : {
			...vacio,
			subproceso_id: subprocesos[0]?.id ?? ""
		});
		setAbierto(true);
	}
	async function guardar(e) {
		e.preventDefault();
		if (!form.codigo.trim() || !form.nombre.trim() || !form.subproceso_id) {
			toast.error("Código, nombre y subproceso son obligatorios.");
			return;
		}
		const result = editando ? await supabase.from("indicadores").update(form).eq("id", editando.id) : await supabase.from("indicadores").insert(form);
		if (result.error) {
			toast.error(`No se pudo guardar: ${result.error.message}`);
			return;
		}
		toast.success(editando ? "Indicador actualizado." : "Indicador creado.");
		setAbierto(false);
		await cargar();
	}
	async function eliminar(item) {
		if (!window.confirm(`¿Eliminar el indicador ${item.codigo}?`)) return;
		const { error } = await supabase.from("indicadores").delete().eq("id", item.id);
		if (error) toast.error(`No se pudo eliminar: ${error.message}`);
		else {
			toast.success("Indicador eliminado.");
			await cargar();
		}
	}
	const campo = (key, value) => setForm((actual) => ({
		...actual,
		[key]: value
	}));
	const filtrados = items.filter((i) => `${i.codigo} ${i.nombre} ${i.responsable}`.toLowerCase().includes(busqueda.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Indicadores",
		descripcion: "Fichas técnicas y desempeño por periodo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Buscar por código, nombre o responsable…",
					value: busqueda,
					onChange: (e) => setBusqueda(e.target.value),
					className: "max-w-md bg-card"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => abrir(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Nuevo indicador"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "overflow-x-auto p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Código" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Indicador" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Subproceso" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Frecuencia" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Responsable" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "w-28 text-right",
							children: "Acciones"
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [cargando ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground",
						children: "Cargando indicadores…"
					}) }) : filtrados.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs",
							children: i.codigo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: i.nombre
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								i.unidad,
								" · ",
								i.polaridad
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm",
							children: subprocesos.find((s) => s.id === i.subproceso_id)?.nombre ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm",
							children: i.frecuencia
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm",
							children: i.responsable || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": "Editar",
								onClick: () => abrir(i),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								"aria-label": "Eliminar",
								onClick: () => void eliminar(i),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})]
						}) })
					] }, i.id)), !cargando && !filtrados.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground",
						children: "No hay indicadores registrados."
					}) })] })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: abierto,
				onOpenChange: setAbierto,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: guardar,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editando ? "Editar indicador" : "Nuevo indicador" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Los cambios se guardan en Supabase." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm",
										children: ["Código", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.codigo,
											onChange: (e) => campo("codigo", e.target.value)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm",
										children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.nombre,
											onChange: (e) => campo("nombre", e.target.value)
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Subproceso", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: form.subproceso_id,
										onValueChange: (v) => campo("subproceso_id", v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecciona un subproceso" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: subprocesos.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: s.id,
											children: s.nombre
										}, s.id)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Fórmula", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.formula,
										onChange: (e) => campo("formula", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-sm",
											children: ["Unidad", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: form.unidad,
												onChange: (e) => campo("unidad", e.target.value)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-sm",
											children: ["Frecuencia", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: form.frecuencia,
												onChange: (e) => campo("frecuencia", e.target.value)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-sm",
											children: ["Polaridad", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: form.polaridad,
												onChange: (e) => campo("polaridad", e.target.value)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-sm",
											children: ["Peso", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												step: "0.01",
												value: form.peso,
												onChange: (e) => campo("peso", Number(e.target.value))
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm",
									children: ["Responsable", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.responsable,
										onChange: (e) => campo("responsable", e.target.value)
									})]
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
export { Indicadores as component };

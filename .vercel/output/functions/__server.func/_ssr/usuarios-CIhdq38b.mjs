import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as CardContent, i as Card, r as AppShell, x as usuarios } from "./data-C_d6xyc5.mjs";
import { t as Badge } from "./badge-Cc0IblCb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BQuBX6bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/usuarios-CIhdq38b.js
var import_jsx_runtime = require_jsx_runtime();
function Usuarios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		titulo: "Usuarios",
		descripcion: "Accesos y roles del sistema de gestión",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "overflow-x-auto p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usuario" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Correo" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Rol" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Área" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: usuarios.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
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
						children: u.area
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: u.activo ? "default" : "destructive",
						children: u.activo ? "Activo" : "Inactivo"
					}) })
				] }, u.id)) })] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: "El inicio de sesión real y los permisos por rol se activarán al conectar la base de datos institucional."
		})]
	});
}
//#endregion
export { Usuarios as component };

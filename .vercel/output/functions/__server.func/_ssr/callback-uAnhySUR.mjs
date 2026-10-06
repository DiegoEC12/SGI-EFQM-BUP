import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-BqOWI5fA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/callback-uAnhySUR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthCallback() {
	const navigate = useNavigate();
	const [mensaje, setMensaje] = (0, import_react.useState)("Validando acceso institucional...");
	(0, import_react.useEffect)(() => {
		let activo = true;
		(async () => {
			const { data, error } = await supabase.auth.getSession();
			const email = data.session?.user.email?.trim().toLowerCase();
			if (error || !data.session || !email?.endsWith("@bup.edu.pe")) {
				if (data.session) await supabase.auth.signOut();
				if (activo) {
					setMensaje(error ? "No se pudo validar la sesión." : "Acceso denegado: solo se permiten cuentas @bup.edu.pe.");
					setTimeout(() => void navigate({
						to: "/auth",
						replace: true
					}), 900);
				}
				return;
			}
			const { error: syncError } = await supabase.rpc("sincronizar_usuario");
			if (syncError) console.warn("No se pudo sincronizar el perfil SGI", syncError);
			await navigate({
				to: "/dashboard",
				replace: true
			});
		})();
		return () => {
			activo = false;
		};
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-background p-6 text-sm text-muted-foreground",
		children: mensaje
	});
}
//#endregion
export { AuthCallback as component };

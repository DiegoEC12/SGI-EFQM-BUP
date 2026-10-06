import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth/callback")({ component: AuthCallback });

function AuthCallback() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("Validando acceso institucional...");

  useEffect(() => {
    let activo = true;
    void (async () => {
      const { data, error } = await supabase.auth.getSession();
      const email = data.session?.user.email?.trim().toLowerCase();
      if (error || !data.session || !email?.endsWith("@bup.edu.pe")) {
        if (data.session) await supabase.auth.signOut();
        if (activo) {
          setMensaje(error ? "No se pudo validar la sesión." : "Acceso denegado: solo se permiten cuentas @bup.edu.pe.");
          setTimeout(() => void navigate({ to: "/auth", replace: true }), 900);
        }
        return;
      }
      const { error: syncError } = await supabase.rpc("sincronizar_usuario");
      if (syncError) console.warn("No se pudo sincronizar el perfil SGI", syncError);
      await navigate({ to: "/dashboard", replace: true });
    })();
    return () => { activo = false; };
  }, [navigate]);

  return <main className="grid min-h-screen place-items-center bg-background p-6 text-sm text-muted-foreground">{mensaje}</main>;
}

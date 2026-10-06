import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth/")({
  head: () => ({
    meta: [
      { title: "Acceso | SGI EFQM - El Buen Pastor" },
      {
        name: "description",
        content:
          "Ingrese al Sistema de Gestión Institucional EFQM del Colegio Diocesano El Buen Pastor.",
      },
      { property: "og:title", content: "Acceso al SGI EFQM" },
      {
        property: "og:description",
        content: "Panel institucional de indicadores, procesos y marco operativo.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "error" | "success"; text: string } | null>(
    null,
  );

  useEffect(() => {
    async function redirectExistingSession() {
      try {
        const { data } = await supabase.auth.getSession();
        const email = data.session?.user.email?.trim().toLowerCase();
        if (data.session && email?.endsWith("@bup.edu.pe")) {
          await navigate({ to: "/dashboard", replace: true });
        } else if (data.session && email) {
          await supabase.auth.signOut();
          setFeedback({ type: "error", text: "Solo se permite el ingreso con correo institucional @bup.edu.pe" });
        }
      } catch {
        setFeedback({
          type: "error",
          text: "No se pudo conectar con el servicio de autenticación.",
        });
      }
    }

    void redirectExistingSession();
  }, [navigate]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const institutionalEmail = email.trim().toLowerCase();
      if (!institutionalEmail.endsWith("@bup.edu.pe")) {
        setFeedback({ type: "error", text: "Solo se permite el ingreso con correo institucional @bup.edu.pe" });
        return;
      }
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email: institutionalEmail, password });
        if (error) throw error;
        await navigate({ to: "/dashboard", replace: true });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: institutionalEmail,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { nombre },
          },
        });
        if (error) throw error;
        if (data.session) {
          await navigate({ to: "/dashboard", replace: true });
        } else {
          setFeedback({
            type: "success",
            text: "Cuenta creada. Revise su correo para confirmarla.",
          });
        }
      }
    } catch (error) {
      setFeedback({
        type: "error",
        text: error instanceof Error ? error.message : "No se pudo completar la operación.",
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
          queryParams: { hd: "bup.edu.pe", prompt: "select_account" },
        },
      });
      if (error) throw error;
    } catch (error) {
      setFeedback({
        type: "error",
        text: error instanceof Error ? error.message : "No se pudo iniciar sesión con Google.",
      });
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-2">
      <section className="flex flex-col justify-between bg-institucional px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:p-12">
        <Link
          to="/"
          className="flex w-fit items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="grid size-11 place-items-center rounded-full bg-accent font-display font-bold text-accent-foreground">
            EBP
          </span>
          <span>
            <span className="block font-display text-lg">SGI · EFQM 2020</span>
            <span className="block text-xs text-white/75">Colegio Diocesano El Buen Pastor</span>
          </span>
        </Link>
        <div className="my-10 max-w-lg lg:my-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
            Centro de control institucional
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Dirección, ejecución y resultados en un solo tablero.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            Procesos, indicadores, metas y evidencias con trazabilidad para acompañar la gestión
            institucional.
          </p>
        </div>
        <p className="text-xs text-white/60">Sistema de Gestión de Indicadores</p>
      </section>

      <section className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            ← Volver al inicio
          </Link>
          <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            {mode === "login" ? "Bienvenido de vuelta" : "Registro institucional"}
          </h2>
          <form onSubmit={submit} className="mt-8 space-y-4">
            {mode === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  autoComplete="name"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Correo institucional</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            {feedback && (
              <p
                role={feedback.type === "error" ? "alert" : "status"}
                className={
                  feedback.type === "error" ? "text-sm text-destructive" : "text-sm text-success"
                }
              >
                {feedback.text}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Procesando..." : mode === "login" ? "Ingresar" : "Crear cuenta"}
            </Button>
          </form>
          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> o <span className="h-px flex-1 bg-border" />
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={signInWithGoogle}
            disabled={loading}
          >
            Continuar con Google
          </Button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? "¿No tiene cuenta?" : "¿Ya tiene cuenta?"}{" "}
            <button
              type="button"
              className="font-semibold text-primary underline-offset-4 hover:underline"
              onClick={() => {
                setFeedback(null);
                setMode(mode === "login" ? "signup" : "login");
              }}
            >
              {mode === "login" ? "Regístrese" : "Inicie sesión"}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

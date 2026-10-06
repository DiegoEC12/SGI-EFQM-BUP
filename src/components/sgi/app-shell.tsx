import { Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  ClipboardList,
  FileStack,
  Gauge,
  Grid3x3,
  History,
  LogOut,
  Menu,
  Mail,
  Tag,
  User,
  Target,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "@tanstack/react-router";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: Gauge },
  { to: "/estructura", label: "Estructura de Gestión", icon: BookOpen },
  { to: "/indicadores", label: "Indicadores", icon: Activity },
  { to: "/metas", label: "Metas", icon: Target },
  { to: "/registros", label: "Registros", icon: ClipboardList },
  { to: "/evidencias", label: "Evidencias", icon: FileStack },
  { to: "/matriz", label: "Matriz EFQM", icon: Grid3x3 },
  { to: "/usuarios", label: "Usuarios", icon: Users },
  { to: "/auditoria", label: "Auditoría", icon: History },
] as const;

export function AppShell({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion: string;
  children: ReactNode;
}) {
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState({ nombre: "Usuario institucional", correo: "", rol: "SGI institucional", area: "Área institucional", avatar: "U" });

  useEffect(() => {
    let activo = true;
    void (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user || !activo) return;
      const correo = data.user.email?.toLowerCase() ?? "";
      const { data: profile } = await supabase.from("profiles").select("nombre, correo, avatar_url").eq("id", data.user.id).maybeSingle();
      const { data: userRole } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).maybeSingle();
      const { data: sgiUser } = await supabase.from("usuarios_sgi").select("area").eq("correo", correo).maybeSingle();
      const nombre = profile?.nombre || data.user.user_metadata?.["full_name"] || "Usuario institucional";
      const roles: Record<string, string> = { admin: "Administrador", directivo: "Directivo", lider: "Líder de proceso", responsable: "Responsable", auditor: "Auditor EFQM", lector: "Lector" };
      setPerfil({ nombre, correo: profile?.correo || correo, rol: roles[userRole?.role ?? ""] || "SGI institucional", area: sgiUser?.area || "Área institucional", avatar: nombre.charAt(0).toUpperCase() });
    })();
    return () => { activo = false; };
  }, []);

  async function cerrarSesion() {
    await supabase.auth.signOut();
    await navigate({ to: "/", replace: true });
  }

  return (
    <div className="min-h-screen bg-background">
      {abierto && (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-30 bg-black/45 lg:hidden"
          onClick={() => setAbierto(false)}
        />
      )}
      <aside
        aria-label="Navegación principal"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 lg:flex lg:translate-x-0",
          abierto ? "flex translate-x-0" : "hidden -translate-x-full lg:flex",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Escudo Colegio El Buen Pastor"
              className="size-10 rounded-full bg-white/95 p-0.5"
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold">SGI</p>
              <p className="text-[11px] text-sidebar-foreground/70">Gestión Institucional</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground hover:bg-sidebar-accent lg:hidden"
            aria-label="Cerrar menú"
            onClick={() => setAbierto(false)}
          >
            <X className="size-5" />
          </Button>
        </div>
        <div className="mx-4 rounded-md bg-sidebar-accent px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-sidebar-accent-foreground">
          EFQM 2020
        </div>
        <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-3 pb-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/dashboard" }}
              onClick={() => setAbierto(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              activeProps={{
                className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm",
              }}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-sidebar-border px-5 py-4 text-[11px] leading-snug text-sidebar-foreground/70">
          Colegio Diocesano
          <br />
          <span className="font-semibold text-sidebar-foreground">El Buen Pastor</span>
          <br />
          Sistema de Gestión de Indicadores
          <button type="button" onClick={() => void cerrarSesion()} className="mt-3 flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-accent-foreground">
            <LogOut className="size-3.5" /> Cerrar sesión
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={abierto}
              onClick={() => setAbierto((v) => !v)}
            >
              <Menu className="size-5" />
            </Button>
            <div>
              <p className="hidden text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:block">
                Sistema de Gestión Institucional
              </p>
              <h1 className="font-display text-lg font-semibold text-foreground sm:text-2xl">{titulo}</h1>
              <p className="hidden text-xs text-muted-foreground sm:block">{descripcion}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground md:flex">
              <span className="size-2 rounded-full bg-success" /> Sistema activo
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto gap-2 px-2 py-1.5">
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{perfil.avatar}</span>
                  <span className="hidden text-left text-xs leading-tight sm:block"><span className="block max-w-36 truncate font-semibold">{perfil.nombre}</span><span className="text-muted-foreground">{perfil.rol}</span></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuLabel className="space-y-2 font-normal">
                  <p className="flex items-center gap-2 font-semibold"><User className="size-4" />{perfil.nombre}</p>
                  <p className="flex items-center gap-2 text-xs text-muted-foreground"><Mail className="size-3.5" />{perfil.correo || "Correo institucional"}</p>
                  <p className="flex items-center gap-2 text-xs text-muted-foreground"><Tag className="size-3.5" />Rol: {perfil.rol} · {perfil.area}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-muted-foreground"><span className="mr-2 size-2 rounded-full bg-success" />Sistema activo · EFQM 2020</DropdownMenuItem>
                <DropdownMenuItem onClick={() => void cerrarSesion()}><LogOut className="mr-2 size-4" />Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="space-y-6 p-5">{children}</main>
      </div>
    </div>
  );
}

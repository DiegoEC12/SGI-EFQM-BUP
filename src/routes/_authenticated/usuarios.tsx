import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Usuario = Database["public"]["Tables"]["usuarios_sgi"]["Row"];
type Formulario = Omit<Usuario, "id">;
const vacio: Formulario = { nombre: "", correo: "", rol: "Responsable de área", area: "", activo: true };

export const Route = createFileRoute("/_authenticated/usuarios")({ head: () => ({ meta: [{ title: "Usuarios y roles · SGI EFQM" }] }), component: Usuarios });

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]); const [form, setForm] = useState<Formulario>(vacio); const [editando, setEditando] = useState<Usuario | null>(null); const [abierto, setAbierto] = useState(false); const [cargando, setCargando] = useState(true);
  async function cargar() { setCargando(true); const { data, error } = await supabase.from("usuarios_sgi").select("*").order("nombre"); if (error) toast.error(`No se pudieron cargar los usuarios: ${error.message}`); else setUsuarios(data ?? []); setCargando(false); }
  useEffect(() => { void cargar(); }, []);
  function abrir(usuario?: Usuario) { setEditando(usuario ?? null); setForm(usuario ? { nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol, area: usuario.area, activo: usuario.activo } : vacio); setAbierto(true); }
  async function guardar(e: React.FormEvent) { e.preventDefault(); if (!form.nombre.trim() || !form.correo.trim()) { toast.error("Nombre y correo son obligatorios."); return; } const result = editando ? await supabase.from("usuarios_sgi").update(form).eq("id", editando.id) : await supabase.from("usuarios_sgi").insert(form); if (result.error) { toast.error(`No se pudo guardar: ${result.error.message}`); return; } toast.success(editando ? "Usuario actualizado." : "Usuario creado."); setAbierto(false); await cargar(); }
  async function eliminar(usuario: Usuario) { if (!window.confirm(`¿Eliminar a ${usuario.nombre}?`)) return; const { error } = await supabase.from("usuarios_sgi").delete().eq("id", usuario.id); if (error) toast.error(`No se pudo eliminar: ${error.message}`); else { toast.success("Usuario eliminado."); await cargar(); } }
  const campo = (key: keyof Formulario, value: string | boolean) => setForm((actual) => ({ ...actual, [key]: value }));
  return <AppShell titulo="Usuarios" descripcion="Accesos y roles del sistema de gestión"><div className="flex justify-end"><Button onClick={() => abrir()}><Plus /> Nuevo usuario</Button></div><Card className="shadow-card"><CardContent className="overflow-x-auto p-0"><Table><TableHeader><TableRow><TableHead>Usuario</TableHead><TableHead>Correo</TableHead><TableHead>Rol</TableHead><TableHead>Área</TableHead><TableHead>Estado</TableHead><TableHead className="w-28 text-right">Acciones</TableHead></TableRow></TableHeader><TableBody>{cargando ? <TableRow><TableCell colSpan={6} className="py-8 text-center text-muted-foreground">Cargando usuarios…</TableCell></TableRow> : usuarios.map((u) => <TableRow key={u.id}><TableCell className="text-sm font-medium">{u.nombre}</TableCell><TableCell className="text-sm text-muted-foreground">{u.correo}</TableCell><TableCell><Badge variant="secondary">{u.rol}</Badge></TableCell><TableCell className="text-sm">{u.area || "—"}</TableCell><TableCell><Badge variant={u.activo ? "default" : "destructive"}>{u.activo ? "Activo" : "Inactivo"}</Badge></TableCell><TableCell><div className="flex justify-end gap-1"><Button size="icon" variant="ghost" aria-label="Editar" onClick={() => abrir(u)}><Pencil /></Button><Button size="icon" variant="ghost" aria-label="Eliminar" onClick={() => void eliminar(u)}><Trash2 /></Button></div></TableCell></TableRow>)}{!cargando && !usuarios.length && <TableRow><TableCell colSpan={6} className="py-8 text-center text-muted-foreground">No hay usuarios registrados.</TableCell></TableRow>}</TableBody></Table></CardContent></Card><Dialog open={abierto} onOpenChange={setAbierto}><DialogContent><form onSubmit={guardar}><DialogHeader><DialogTitle>{editando ? "Editar usuario" : "Nuevo usuario"}</DialogTitle><DialogDescription>Los cambios se guardan en Supabase.</DialogDescription></DialogHeader><div className="grid gap-3 py-4"><label className="text-sm">Nombre<Input value={form.nombre} onChange={(e) => campo("nombre", e.target.value)} /></label><label className="text-sm">Correo<Input type="email" value={form.correo} onChange={(e) => campo("correo", e.target.value)} /></label><label className="text-sm">Rol<Input value={form.rol} onChange={(e) => campo("rol", e.target.value)} /></label><label className="text-sm">Área<Input value={form.area} onChange={(e) => campo("area", e.target.value)} /></label><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.activo} onChange={(e) => campo("activo", e.target.checked)} /> Usuario activo</label></div><DialogFooter><Button type="button" variant="outline" onClick={() => setAbierto(false)}>Cancelar</Button><Button type="submit">Guardar</Button></DialogFooter></form></DialogContent></Dialog></AppShell>;
}

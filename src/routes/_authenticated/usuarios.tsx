import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usuarios } from "@/lib/sgi/data";

export const Route = createFileRoute("/_authenticated/usuarios")({
  head: () => ({
    meta: [
      { title: "Usuarios y roles · SGI EFQM" },
      {
        name: "description",
        content: "Control de usuarios del SGI con roles: administrador, directivo, líder de proceso y auditor EFQM.",
      },
      { property: "og:title", content: "Usuarios y roles · SGI EFQM" },
      { property: "og:description", content: "Gestión de accesos por rol y área institucional." },
    ],
  }),
  component: Usuarios,
});

function Usuarios() {
  return (
    <AppShell titulo="Usuarios" descripcion="Accesos y roles del sistema de gestión">
      <Card className="shadow-card">
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="text-sm font-medium">{u.nombre}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{u.correo}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{u.rol}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{u.area}</TableCell>
                  <TableCell>
                    <Badge variant={u.activo ? "default" : "destructive"}>{u.activo ? "Activo" : "Inactivo"}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <p className="text-xs text-muted-foreground">
        El inicio de sesión real y los permisos por rol se activarán al conectar la base de datos institucional.
      </p>
    </AppShell>
  );
}

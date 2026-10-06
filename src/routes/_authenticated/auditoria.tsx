import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { auditoria } from "@/lib/sgi/data";

export const Route = createFileRoute("/_authenticated/auditoria")({
  head: () => ({
    meta: [
      { title: "Auditoría · SGI EFQM" },
      { name: "description", content: "Bitácora de acciones realizadas en el Sistema de Gestión Institucional." },
      { property: "og:title", content: "Auditoría · SGI EFQM" },
      { property: "og:description", content: "Trazabilidad de cambios por usuario, módulo y fecha." },
    ],
  }),
  component: Auditoria,
});

function Auditoria() {
  return (
    <AppShell titulo="Auditoría" descripcion="Bitácora de acciones del sistema">
      <Card className="shadow-card">
        <CardContent className="space-y-3 p-4">
          {auditoria.map((l) => (
            <div key={l.id} className="flex flex-wrap items-start justify-between gap-2 rounded-md border border-border p-3">
              <div>
                <p className="text-sm font-medium">
                  {l.usuario} — {l.accion}
                </p>
                <p className="text-xs text-muted-foreground">{l.detalle}</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary">{l.modulo}</Badge>
                <p className="mt-1 text-xs text-muted-foreground">{l.fecha}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}

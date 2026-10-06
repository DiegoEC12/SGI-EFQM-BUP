import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { evidencias, indicadores, procesos, registros, subprocesos } from "@/lib/sgi/data";

export const Route = createFileRoute("/_authenticated/evidencias")({
  head: () => ({
    meta: [
      { title: "Evidencias · SGI EFQM" },
      { name: "description", content: "Repositorio de evidencias que respaldan los registros de indicadores EFQM." },
      { property: "og:title", content: "Evidencias · SGI EFQM" },
      { property: "og:description", content: "Actas, formatos y respaldos vinculados a cada medición." },
    ],
  }),
  component: Evidencias,
});

function Evidencias() {
  const filas = evidencias.map((e) => {
    const reg = registros.find((r) => r.id === e.registroId)!;
    const ind = indicadores.find((i) => i.id === reg.indicadorId)!;
    const sub = subprocesos.find((s) => s.id === ind.subprocesoId)!;
    const proc = procesos.find((p) => p.id === sub.procesoId)!;
    return { e, reg, ind, sub, proc };
  });

  return (
    <AppShell titulo="Evidencias" descripcion="Respaldos documentales de las mediciones">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filas.map(({ e, reg, ind, proc }) => (
          <Card key={e.id} className="shadow-card">
            <CardContent className="space-y-2 p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary">
                    <FileText className="size-4" />
                  </span>
                  <p className="text-sm font-medium">{e.nombre}</p>
                </div>
                <Badge variant="secondary">{e.tipo}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {ind.codigo} · {ind.nombre}
              </p>
              <p className="text-xs text-muted-foreground">
                {proc.nombre} — {reg.periodo} {reg.anio}
              </p>
              <p className="text-xs text-muted-foreground">
                Subido por {e.subidoPor} el {e.fecha}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

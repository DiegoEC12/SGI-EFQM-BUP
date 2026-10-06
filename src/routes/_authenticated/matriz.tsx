import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { AppShell } from "@/components/sgi/app-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { actividades, criterios, documentos, procedimientos, procesos, subprocesos } from "@/lib/sgi/data";
import { ANIO_ACTUAL } from "@/lib/sgi/data";
import { evaluarIndicadores, porPilar, promedio } from "@/lib/sgi/metrics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/matriz")({
  head: () => ({
    meta: [
      { title: "Matriz EFQM · SGI" },
      {
        name: "description",
        content: "Matriz de trazabilidad EFQM: criterios, procesos, subprocesos y marco operativo que los sustentan.",
      },
      { property: "og:title", content: "Matriz EFQM · SGI" },
      { property: "og:description", content: "Trazabilidad en cascada del modelo EFQM 2020 en la institución." },
    ],
  }),
  component: Matriz,
});

function Matriz() {
  const [criterioSel, setCriterioSel] = useState(criterios[0]!.id);
  const evaluados = evaluarIndicadores(ANIO_ACTUAL);
  const pilares = porPilar(ANIO_ACTUAL);
  const procs = procesos.filter((p) => p.criterioId === criterioSel);
  const criterio = criterios.find((c) => c.id === criterioSel)!;

  return (
    <AppShell titulo="Matriz EFQM" descripcion="Trazabilidad entre criterios, procesos y marco operativo">
      <div className="grid gap-4 md:grid-cols-3">
        {criterios.map((c) => {
          const p = pilares.find((x) => x.criterioId === c.id)!;
          return (
            <button key={c.id} onClick={() => setCriterioSel(c.id)} className="text-left">
              <Card
                className={cn(
                  "h-full shadow-card transition-colors",
                  c.id === criterioSel ? "border-primary bg-primary/5" : "hover:border-primary/40",
                )}
              >
                <CardHeader>
                  <CardDescription className="tracking-wide uppercase">Criterio EFQM</CardDescription>
                  <CardTitle className="font-display">{c.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-muted-foreground">{c.descripcion}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{p.total} indicadores</span>
                    <span className="font-display text-xl font-semibold">{p.valor}%</span>
                  </div>
                  <Progress value={p.valor} />
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardDescription className="tracking-wide uppercase">Cascada de trazabilidad</CardDescription>
          <CardTitle className="font-display">{criterio.nombre}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {procs.map((p) => {
            const subs = subprocesos.filter((s) => s.procesoId === p.id);
            const valor = promedio(evaluados.filter((e) => e.procesoId === p.id));
            return (
              <div key={p.id} className="rounded-lg border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">
                      {p.codigo} · {p.nombre}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Área {p.area} — Líder {p.lider}
                    </p>
                  </div>
                  <span className="font-display text-lg font-semibold">{valor}%</span>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {subs.map((s) => (
                    <div key={s.id} className="rounded-md bg-muted p-3 text-xs">
                      <p className="text-sm font-medium">{s.nombre}</p>
                      <p className="mt-1 text-muted-foreground">
                        {procedimientos.filter((x) => x.subprocesoId === s.id).length} procedimientos ·{" "}
                        {documentos.filter((x) => x.subprocesoId === s.id).length} documentos ·{" "}
                        {actividades.filter((x) => x.subprocesoId === s.id).length} actividades
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </AppShell>
  );
}

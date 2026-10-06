import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { AppShell } from "@/components/sgi/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  actividades,
  criterios,
  documentos,
  indicadores,
  procedimientos,
  procesos,
  subprocesos,
} from "@/lib/sgi/data";
import { avanceSubproceso } from "@/lib/sgi/metrics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/estructura")({
  head: () => ({
    meta: [
      { title: "Estructura de Gestión · SGI EFQM" },
      {
        name: "description",
        content: "Procesos, subprocesos y marco operativo (procedimientos, documentación y actividades) del SGI EFQM.",
      },
      { property: "og:title", content: "Estructura de Gestión · SGI EFQM" },
      { property: "og:description", content: "Navegación jerárquica de procesos, subprocesos y marco operativo." },
    ],
  }),
  component: Estructura,
});

function Estructura() {
  const [subSel, setSubSel] = useState(subprocesos[0]!.id);
  const sub = subprocesos.find((s) => s.id === subSel)!;
  const proceso = procesos.find((p) => p.id === sub.procesoId)!;
  const procs = procedimientos.filter((x) => x.subprocesoId === sub.id);
  const docs = documentos.filter((x) => x.subprocesoId === sub.id);
  const acts = actividades.filter((x) => x.subprocesoId === sub.id);
  const inds = indicadores.filter((x) => x.subprocesoId === sub.id);

  return (
    <AppShell titulo="Estructura de Gestión" descripcion="Proceso ➔ Subproceso ➔ Marco operativo">
      <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
        <Card className="h-fit shadow-card">
          <CardHeader>
            <CardDescription className="tracking-wide uppercase">Árbol EFQM</CardDescription>
            <CardTitle className="font-display">Procesos institucionales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {criterios.map((c) => (
              <div key={c.id}>
                <p className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">{c.pilar}</p>
                <div className="space-y-2">
                  {procesos
                    .filter((p) => p.criterioId === c.id)
                    .map((p) => (
                      <div key={p.id} className="rounded-md border border-border p-2">
                        <p className="text-xs font-semibold">
                          {p.codigo} · {p.nombre}
                        </p>
                        <div className="mt-1 space-y-1">
                          {subprocesos
                            .filter((s) => s.procesoId === p.id)
                            .map((s) => (
                              <button
                                key={s.id}
                                onClick={() => setSubSel(s.id)}
                                className={cn(
                                  "w-full rounded px-2 py-1 text-left text-xs transition-colors hover:bg-muted",
                                  s.id === subSel && "bg-primary font-medium text-primary-foreground hover:bg-primary",
                                )}
                              >
                                {s.nombre}
                              </button>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardDescription className="tracking-wide uppercase">
              {proceso.codigo} · {proceso.area}
            </CardDescription>
            <CardTitle className="font-display">{sub.nombre}</CardTitle>
            <p className="text-xs text-muted-foreground">
              Proceso: {proceso.nombre} — Líder: {proceso.lider}
            </p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs">
                <span>Avance del plan de actividades</span>
                <span className="font-semibold">{avanceSubproceso(sub.id)}%</span>
              </div>
              <Progress value={avanceSubproceso(sub.id)} className="mt-1.5" />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="actividades">
              <TabsList>
                <TabsTrigger value="actividades">Actividades ({acts.length})</TabsTrigger>
                <TabsTrigger value="procedimientos">Procedimientos ({procs.length})</TabsTrigger>
                <TabsTrigger value="documentos">Documentación ({docs.length})</TabsTrigger>
                <TabsTrigger value="indicadores">Indicadores ({inds.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="actividades" className="space-y-2">
                {acts.map((a) => (
                  <div key={a.id} className="rounded-md border border-border p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium">{a.nombre}</p>
                      <Badge variant={a.estado === "En riesgo" ? "destructive" : "secondary"}>{a.estado}</Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Responsable: {a.responsable}</p>
                    <Progress value={a.avance} className="mt-2" />
                    <p className="mt-1 text-right text-xs text-muted-foreground">{a.avance}% de avance</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="procedimientos" className="space-y-2">
                {procs.map((p) => (
                  <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border p-3">
                    <div>
                      <p className="text-sm font-medium">{p.nombre}</p>
                      <p className="text-xs text-muted-foreground">
                        Versión {p.version} · Actualizado {p.actualizado}
                      </p>
                    </div>
                    <Badge variant={p.estado === "Aprobado" ? "default" : "secondary"}>{p.estado}</Badge>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="documentos" className="space-y-2">
                {docs.map((d) => (
                  <div key={d.id} className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border p-3">
                    <div>
                      <p className="text-sm font-medium">{d.nombre}</p>
                      <p className="text-xs text-muted-foreground">
                        {d.tipo} · Versión {d.version} · {d.actualizado}
                      </p>
                    </div>
                    <Badge variant={d.estado === "Aprobado" ? "default" : "secondary"}>{d.estado}</Badge>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="indicadores" className="space-y-2">
                {inds.map((i) => (
                  <div key={i.id} className="rounded-md border border-border p-3">
                    <p className="text-sm font-medium">
                      {i.codigo} · {i.nombre}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Fórmula: {i.formula}</p>
                    <p className="text-xs text-muted-foreground">
                      {i.frecuencia} · {i.polaridad} · Responsable: {i.responsable}
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

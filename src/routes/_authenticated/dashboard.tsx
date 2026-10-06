import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, CircleHelp, Gem, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AppShell } from "@/components/sgi/app-shell";
import { EstadoBadge } from "@/components/sgi/estado-badge";
import { FiltrosBar } from "@/components/sgi/filtros-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  aplicarFiltros,
  evaluarIndicadores,
  filtrosIniciales,
  historico,
  porArea,
  porPilar,
  resumen,
  type Filtros,
} from "@/lib/sgi/metrics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard Institucional · SGI EFQM — El Buen Pastor" },
      {
        name: "description",
        content:
          "Centro de control institucional del Colegio Diocesano El Buen Pastor: cumplimiento de indicadores EFQM por área, proceso y subproceso.",
      },
      { property: "og:title", content: "Dashboard Institucional · SGI EFQM" },
      {
        property: "og:description",
        content:
          "Panorama del desempeño institucional, metas y alertas de gestión del modelo EFQM.",
      },
    ],
  }),
  component: Dashboard,
});

function Gauge({ valor }: { valor: number }) {
  const angulo = -90 + (valor / 100) * 180;
  const color =
    valor >= 90 ? "var(--success)" : valor >= 70 ? "var(--warning)" : "var(--destructive)";
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <svg viewBox="0 0 200 118" className="w-full">
        <path
          d="M14 104 A86 86 0 0 1 60 29"
          fill="none"
          stroke="var(--destructive)"
          strokeWidth="18"
        />
        <path d="M60 29 A86 86 0 0 1 140 29" fill="none" stroke="var(--warning)" strokeWidth="18" />
        <path
          d="M140 29 A86 86 0 0 1 186 104"
          fill="none"
          stroke="var(--success)"
          strokeWidth="18"
        />
        <g transform={`rotate(${angulo} 100 104)`}>
          <line
            x1="100"
            y1="104"
            x2="100"
            y2="38"
            stroke="var(--foreground)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <circle cx="100" cy="104" r="6" fill="var(--foreground)" />
      </svg>
      <div className="mt-2 text-center">
        <p className="font-display text-4xl font-bold" style={{ color }}>
          {valor}%
        </p>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {valor >= 90 ? "Cumple" : valor >= 70 ? "Atención" : "Crítico"}
        </p>
      </div>
    </div>
  );
}

function Kpi({
  label,
  valor,
  pie,
  clase,
  icono: Icono,
}: {
  label: string;
  valor: number;
  pie: string;
  clase: string;
  icono: typeof Gem;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl p-4 text-white shadow-card", clase)}>
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-semibold tracking-wide uppercase opacity-90">{label}</p>
        <Icono className="size-4 opacity-80" />
      </div>
      <p className="mt-2 font-display text-3xl font-bold">{valor}</p>
      <p className="mt-1 text-[11px] opacity-85">{pie}</p>
      <div className="absolute -right-6 -bottom-8 size-24 rounded-full bg-white/10" />
    </div>
  );
}

function Dashboard() {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales);
  const evaluados = useMemo(() => evaluarIndicadores(filtros.anio), [filtros.anio]);
  const lista = useMemo(() => aplicarFiltros(evaluados, filtros), [evaluados, filtros]);
  const r = resumen(lista);
  const areas = porArea(lista);
  const pilares = porPilar(filtros.anio, lista);
  const hist = historico(filtros);
  const atencion = lista.filter((i) => i.estado === "Atención");
  const criticos = lista.filter((i) => i.estado === "Crítico");

  return (
    <AppShell titulo="Dashboard Institucional" descripcion="Colegio Diocesano El Buen Pastor">
      <section className="relative overflow-hidden rounded-xl bg-institucional p-7 text-white shadow-card">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase opacity-80">
          SGI · EFQM 2020
        </p>
        <h2 className="mt-1 font-display text-3xl font-bold">Centro de Control Institucional</h2>
        <p className="mt-2 max-w-xl text-sm opacity-90">
          Panorama del desempeño institucional, cumplimiento de metas y alertas de gestión para
          facilitar la toma de decisiones.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
          {[
            `Periodo ${filtros.anio}`,
            `${r.total} indicadores evaluados`,
            "Dirección • Ejecución • Resultados",
          ].map((t) => (
            <span key={t} className="rounded-full bg-white/15 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute top-1/2 right-8 hidden size-28 -translate-y-1/2 place-items-center rounded-full border-4 border-accent text-center md:grid">
          <div>
            <p className="font-display text-2xl font-bold">{r.global}%</p>
            <p className="text-[9px] tracking-widest uppercase opacity-85">Cumplimiento</p>
          </div>
        </div>
      </section>

      <FiltrosBar valor={filtros} onChange={setFiltros} />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <Kpi
          label="Indicadores"
          valor={r.total}
          pie="Según el filtro activo"
          clase="bg-chart-4"
          icono={Gem}
        />
        <Kpi
          label="Cumplen"
          valor={r.cumplen}
          pie="Meta alcanzada"
          clase="bg-success"
          icono={CheckCircle2}
        />
        <Kpi
          label="Atención"
          valor={r.atencion}
          pie="Requieren seguimiento"
          clase="bg-warning"
          icono={TriangleAlert}
        />
        <Kpi
          label="Críticos"
          valor={r.criticos}
          pie="Acción prioritaria"
          clase="bg-destructive"
          icono={AlertTriangle}
        />
        <Kpi
          label="Sin evaluar"
          valor={r.sinEvaluar}
          pie="Datos pendientes"
          clase="bg-info"
          icono={CircleHelp}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardDescription className="tracking-wide uppercase">
              Resumen del filtro
            </CardDescription>
            <CardTitle className="font-display">Cumplimiento institucional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <Gauge valor={r.global} />
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {[
                { l: "Crítico", d: "< 70%", c: "bg-destructive" },
                { l: "Atención", d: "70% – 89%", c: "bg-warning" },
                { l: "Cumple", d: "≥ 90%", c: "bg-success" },
              ].map((x) => (
                <div key={x.l} className="rounded-md border border-border p-2">
                  <span className={cn("mx-auto mb-1 block size-2 rounded-full", x.c)} />
                  <p className="font-medium">{x.l}</p>
                  <p className="text-muted-foreground">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {pilares.map((p) => (
                <div key={p.criterioId} className="rounded-md bg-muted p-2">
                  <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
                    {p.pilar}
                  </p>
                  <p className="font-display text-lg font-semibold">{p.valor}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
            <div>
              <CardDescription className="tracking-wide uppercase">Visión general</CardDescription>
              <CardTitle className="font-display">Nivel de cumplimiento por área</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Áreas ordenadas de menor a mayor cumplimiento.
              </p>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  Alertas ({atencion.length + criticos.length})
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full overflow-y-auto sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="font-display">
                    Indicadores que requieren gestión
                  </SheetTitle>
                  <SheetDescription>
                    Priorizados por nivel de riesgo del periodo {filtros.anio}.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-3 px-4 pb-6">
                  {[...criticos, ...atencion].map((i) => (
                    <div key={i.indicador.id} className="rounded-md border border-border p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium">{i.indicador.nombre}</p>
                        <EstadoBadge estado={i.estado} />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {i.proceso} · {i.subproceso}
                      </p>
                      <p className="mt-2 text-xs">
                        Avance <span className="font-semibold">{i.cumplimiento}%</span> — meta{" "}
                        {i.meta}%
                      </p>
                    </div>
                  ))}
                  {!criticos.length && !atencion.length && (
                    <p className="text-sm text-muted-foreground">
                      No hay indicadores en riesgo con este filtro.
                    </p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={Math.max(240, areas.length * 34)}>
              <BarChart data={areas} layout="vertical" margin={{ left: 8, right: 24 }}>
                <CartesianGrid horizontal={false} stroke="var(--border)" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fontSize: 11 }}
                  stroke="var(--muted-foreground)"
                />
                <YAxis
                  type="category"
                  dataKey="area"
                  width={130}
                  tick={{ fontSize: 11 }}
                  stroke="var(--muted-foreground)"
                />
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Cumplimiento"]}
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]} barSize={16}>
                  {areas.map((a) => (
                    <Cell
                      key={a.area}
                      fill={
                        a.valor >= 90
                          ? "var(--success)"
                          : a.valor >= 70
                            ? "var(--warning)"
                            : "var(--destructive)"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-card">
        <CardHeader>
          <CardDescription className="tracking-wide uppercase">Evolución histórica</CardDescription>
          <CardTitle className="font-display">Línea de tiempo del desempeño</CardTitle>
          <p className="text-xs text-muted-foreground">
            Evolución institucional desde el primer año con información hasta la actualidad.
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={hist} margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis dataKey="anio" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
              <Tooltip
                formatter={(v: number, n) => [`${v}%`, n === "valor" ? "Cumplimiento" : "Meta"]}
                contentStyle={{ borderRadius: 8, border: "1px solid var(--border)", fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="meta"
                stroke="var(--muted-foreground)"
                strokeDasharray="5 5"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="valor"
                stroke="var(--primary)"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </AppShell>
  );
}

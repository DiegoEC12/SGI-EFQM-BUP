import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/sgi/app-shell";
import { EstadoBadge } from "@/components/sgi/estado-badge";
import { FiltrosBar } from "@/components/sgi/filtros-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  aplicarFiltros,
  evaluarIndicadores,
  filtrosIniciales,
  type Filtros,
  type IndicadorEvaluado,
} from "@/lib/sgi/metrics";

export const Route = createFileRoute("/_authenticated/indicadores")({
  head: () => ({
    meta: [
      { title: "Indicadores · SGI EFQM" },
      {
        name: "description",
        content: "Fichas técnicas de indicadores EFQM con fórmula, frecuencia, meta, valor alcanzado y estado.",
      },
      { property: "og:title", content: "Indicadores · SGI EFQM" },
      { property: "og:description", content: "Tabla avanzada de indicadores con filtros por área, proceso y estado." },
    ],
  }),
  component: Indicadores,
});

function Indicadores() {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [sel, setSel] = useState<IndicadorEvaluado | null>(null);

  const lista = useMemo(() => {
    const base = aplicarFiltros(evaluarIndicadores(filtros.anio), filtros);
    const q = busqueda.trim().toLowerCase();
    return q
      ? base.filter((i) =>
          `${i.indicador.codigo} ${i.indicador.nombre} ${i.proceso} ${i.subproceso} ${i.area}`
            .toLowerCase()
            .includes(q),
        )
      : base;
  }, [filtros, busqueda]);

  return (
    <AppShell titulo="Indicadores" descripcion="Fichas técnicas y desempeño por periodo">
      <FiltrosBar valor={filtros} onChange={setFiltros} />
      <Input
        placeholder="Buscar por código, nombre, proceso o área…"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="max-w-md bg-card"
      />
      <Card className="shadow-card">
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Indicador</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Frecuencia</TableHead>
                <TableHead className="text-right">Meta</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead className="text-right">Cumplimiento</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lista.map((i) => (
                <TableRow key={i.indicador.id} className="cursor-pointer" onClick={() => setSel(i)}>
                  <TableCell className="font-mono text-xs">{i.indicador.codigo}</TableCell>
                  <TableCell>
                    <p className="text-sm font-medium">{i.indicador.nombre}</p>
                    <p className="text-xs text-muted-foreground">{i.subproceso}</p>
                  </TableCell>
                  <TableCell className="text-sm">{i.area}</TableCell>
                  <TableCell className="text-sm">{i.indicador.frecuencia}</TableCell>
                  <TableCell className="text-right text-sm">{i.meta}%</TableCell>
                  <TableCell className="text-right text-sm">{i.valor ?? "—"}</TableCell>
                  <TableCell className="text-right text-sm font-semibold">{i.cumplimiento ?? "—"}%</TableCell>
                  <TableCell>
                    <EstadoBadge estado={i.estado} />
                  </TableCell>
                </TableRow>
              ))}
              {!lista.length && (
                <TableRow>
                  <TableCell colSpan={8} className="py-8 text-center text-sm text-muted-foreground">
                    No se encontraron indicadores con los filtros aplicados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent>
          {sel && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display">{sel.indicador.nombre}</DialogTitle>
                <DialogDescription>
                  {sel.indicador.codigo} · {sel.proceso} · {sel.subproceso}
                </DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Fórmula", sel.indicador.formula],
                  ["Unidad", sel.indicador.unidad],
                  ["Frecuencia", sel.indicador.frecuencia],
                  ["Polaridad", sel.indicador.polaridad],
                  ["Responsable", sel.indicador.responsable],
                  ["Área", sel.area],
                  ["Meta", `${sel.meta}%`],
                  ["Valor alcanzado", sel.valor === null ? "Sin registro" : `${sel.valor}%`],
                ].map(([k, v]) => (
                  <div key={k as string} className="rounded-md bg-muted p-2">
                    <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">{k}</dt>
                    <dd className="mt-0.5">{v}</dd>
                  </div>
                ))}
              </dl>
              <EstadoBadge estado={sel.estado} className="w-fit" />
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/sgi/app-shell";
import { EstadoBadge } from "@/components/sgi/estado-badge";
import { FiltrosBar } from "@/components/sgi/filtros-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { aplicarFiltros, evaluarIndicadores, filtrosIniciales, type Filtros } from "@/lib/sgi/metrics";

export const Route = createFileRoute("/_authenticated/metas")({
  head: () => ({
    meta: [
      { title: "Metas · SGI EFQM" },
      { name: "description", content: "Metas anuales por indicador, brecha frente al valor alcanzado y estado." },
      { property: "og:title", content: "Metas · SGI EFQM" },
      { property: "og:description", content: "Configuración y seguimiento de metas anuales por indicador." },
    ],
  }),
  component: Metas,
});

function Metas() {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales);
  const lista = useMemo(() => aplicarFiltros(evaluarIndicadores(filtros.anio), filtros), [filtros]);

  return (
    <AppShell titulo="Metas" descripcion={`Metas configuradas para el periodo ${filtros.anio}`}>
      <FiltrosBar valor={filtros} onChange={setFiltros} />
      <Card className="shadow-card">
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Proceso</TableHead>
                <TableHead className="text-right">Meta</TableHead>
                <TableHead className="text-right">Alcanzado</TableHead>
                <TableHead className="text-right">Brecha</TableHead>
                <TableHead className="w-48">Avance</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lista.map((i) => (
                <TableRow key={i.indicador.id}>
                  <TableCell>
                    <p className="text-sm font-medium">{i.indicador.nombre}</p>
                    <p className="font-mono text-xs text-muted-foreground">{i.indicador.codigo}</p>
                  </TableCell>
                  <TableCell className="text-sm">{i.proceso}</TableCell>
                  <TableCell className="text-right text-sm">{i.meta}%</TableCell>
                  <TableCell className="text-right text-sm">{i.valor ?? "—"}%</TableCell>
                  <TableCell className="text-right text-sm">
                    {i.valor === null ? "—" : `${Math.round((i.meta - i.valor) * 10) / 10}%`}
                  </TableCell>
                  <TableCell>
                    <Progress value={i.cumplimiento ?? 0} />
                  </TableCell>
                  <TableCell>
                    <EstadoBadge estado={i.estado} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppShell>
  );
}

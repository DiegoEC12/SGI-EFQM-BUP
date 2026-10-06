import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/sgi/app-shell";
import { FiltrosBar } from "@/components/sgi/filtros-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { evidencias, indicadores, procesos, registros, subprocesos } from "@/lib/sgi/data";
import { aplicarFiltros, evaluarIndicadores, filtrosIniciales, type Filtros } from "@/lib/sgi/metrics";

export const Route = createFileRoute("/_authenticated/registros")({
  head: () => ({
    meta: [
      { title: "Registros · SGI EFQM" },
      { name: "description", content: "Mediciones periódicas cargadas por los responsables de cada subproceso." },
      { property: "og:title", content: "Registros · SGI EFQM" },
      { property: "og:description", content: "Histórico de mediciones de indicadores con evidencias asociadas." },
    ],
  }),
  component: Registros,
});

function Registros() {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales);

  const filas = useMemo(() => {
    const permitidos = new Set(aplicarFiltros(evaluarIndicadores(filtros.anio), filtros).map((i) => i.indicador.id));
    return registros
      .filter((r) => r.anio === filtros.anio && permitidos.has(r.indicadorId))
      .map((r) => {
        const ind = indicadores.find((i) => i.id === r.indicadorId)!;
        const sub = subprocesos.find((s) => s.id === ind.subprocesoId)!;
        const proc = procesos.find((p) => p.id === sub.procesoId)!;
        return { r, ind, sub, proc, evid: evidencias.filter((e) => e.registroId === r.id).length };
      });
  }, [filtros]);

  return (
    <AppShell titulo="Registros" descripcion="Mediciones periódicas de los indicadores">
      <FiltrosBar valor={filtros} onChange={setFiltros} />
      <Card className="shadow-card">
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Subproceso</TableHead>
                <TableHead>Periodo</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Registrado por</TableHead>
                <TableHead>Evidencias</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filas.map(({ r, ind, sub, evid }) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <p className="text-sm font-medium">{ind.nombre}</p>
                    <p className="font-mono text-xs text-muted-foreground">{ind.codigo}</p>
                  </TableCell>
                  <TableCell className="text-sm">{sub.nombre}</TableCell>
                  <TableCell className="text-sm">{r.periodo}</TableCell>
                  <TableCell className="text-right text-sm font-semibold">{r.valor}%</TableCell>
                  <TableCell className="text-sm">{r.fecha}</TableCell>
                  <TableCell className="text-sm">{r.registradoPor}</TableCell>
                  <TableCell>
                    <Badge variant={evid ? "default" : "secondary"}>{evid} adjunta(s)</Badge>
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

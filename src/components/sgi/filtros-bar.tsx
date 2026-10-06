import { ANIOS, areas, indicadores, procesos, subprocesos } from "@/lib/sgi/data";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Filtros } from "@/lib/sgi/metrics";

export function FiltrosBar({ valor, onChange }: { valor: Filtros; onChange: (f: Filtros) => void }) {
  const procesosDisponibles = procesos.filter((p) => valor.area === "todas" || p.area === valor.area);
  const procesoActivo = procesos.find((p) => p.id === valor.procesoId);
  const subs = subprocesos.filter((s) => valor.procesoId === "todos" || s.procesoId === valor.procesoId);
  const inds = indicadores.filter((i) => subs.some((s) => s.id === i.subprocesoId));

  const campo = (
    id: string,
    label: string,
    value: string,
    placeholder: string,
    opciones: { value: string; label: string }[],
    onSet: (v: string) => void,
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-[11px] tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      <Select value={value} onValueChange={onSet}>
        <SelectTrigger id={id} className="w-full bg-card">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {opciones.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="grid gap-3 rounded-lg border border-border bg-card p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
      {campo(
        "f-anio",
        "Año",
        String(valor.anio),
        "Año",
        ANIOS.map((a) => ({ value: String(a), label: String(a) })),
        (v) => onChange({ ...valor, anio: Number(v) }),
      )}
      {campo(
        "f-area",
        "Área",
        valor.area,
        "Todas las áreas",
        [{ value: "todas", label: "Todas las áreas" }, ...areas.map((a) => ({ value: a, label: a }))],
        (v) => onChange({ ...valor, area: v, procesoId: "todos", subprocesoId: "todos", indicadorId: "todos" }),
      )}
      {campo(
        "f-proceso",
        "Proceso",
        valor.procesoId,
        "Todos los procesos",
        [
          { value: "todos", label: "Todos los procesos" },
          ...procesosDisponibles.map((p) => ({ value: p.id, label: `${p.codigo} · ${p.nombre}` })),
        ],
        (v) => {
          const p = procesos.find((item) => item.id === v);
          onChange({ ...valor, area: p?.area ?? valor.area, procesoId: v, subprocesoId: "todos", indicadorId: "todos" });
        },
      )}
      {campo(
        "f-sub",
        "Subproceso",
        valor.subprocesoId,
        "Todos los subprocesos",
        [
          { value: "todos", label: "Todos los subprocesos" },
          ...subs.map((s) => ({ value: s.id, label: s.nombre })),
        ],
        (v) => {
          const sub = subprocesos.find((item) => item.id === v);
          const p = procesos.find((item) => item.id === sub?.procesoId);
          onChange({ ...valor, area: p?.area ?? valor.area, procesoId: p?.id ?? valor.procesoId, subprocesoId: v, indicadorId: "todos" });
        },
      )}
      {campo(
        "f-ind",
        "Indicador",
        valor.indicadorId,
        "Todos los indicadores",
        [
          { value: "todos", label: "Todos los indicadores" },
          ...inds.map((i) => ({ value: i.id, label: `${i.codigo} · ${i.nombre}` })),
        ],
        (v) => {
          const ind = indicadores.find((item) => item.id === v);
          const sub = subprocesos.find((item) => item.id === ind?.subprocesoId);
          const p = procesos.find((item) => item.id === sub?.procesoId);
          onChange({ ...valor, area: p?.area ?? valor.area, procesoId: p?.id ?? valor.procesoId, subprocesoId: sub?.id ?? valor.subprocesoId, indicadorId: v });
        },
      )}
    </div>
  );
}

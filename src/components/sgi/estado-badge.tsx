import { cn } from "@/lib/utils";
import type { Estado } from "@/lib/sgi/metrics";

const estilos: Record<Estado, string> = {
  Cumple: "bg-success/12 text-success border-success/30",
  Atención: "bg-warning/15 text-warning-foreground border-warning/40",
  Crítico: "bg-destructive/12 text-destructive border-destructive/30",
  "Sin evaluar": "bg-muted text-muted-foreground border-border",
};

export function EstadoBadge({ estado, className }: { estado: Estado; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        estilos[estado],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {estado}
    </span>
  );
}

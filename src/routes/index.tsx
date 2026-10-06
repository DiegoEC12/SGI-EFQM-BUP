import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Grid3x3, Network } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGI EFQM | Colegio Diocesano El Buen Pastor" },
      {
        name: "description",
        content:
          "Sistema de Gestión Institucional basado en el modelo EFQM 2020: procesos, indicadores, metas y resultados.",
      },
      { property: "og:title", content: "SGI EFQM | Colegio El Buen Pastor" },
      {
        property: "og:description",
        content: "Gestión de procesos, indicadores y metas bajo el modelo EFQM 2020.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const highlights = [
    {
      icon: Network,
      title: "Estructura EFQM",
      description: "Procesos y subprocesos con su marco operativo.",
    },
    {
      icon: Gauge,
      title: "Indicadores",
      description: "Cumplimiento y seguimiento de metas institucionales.",
    },
    {
      icon: Grid3x3,
      title: "Matriz de procesos",
      description: "Una visión integral de dirección, ejecución y resultados.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-institucional px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/75">
            Colegio Diocesano El Buen Pastor · EFQM 2020
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Sistema de Gestión Institucional
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Procesos, indicadores, metas y evidencias en un solo lugar para decidir con datos y
            avanzar en la excelencia educativa.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/auth">Ingresar al sistema</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3 sm:gap-6 sm:py-16">
        {highlights.map(({ icon: Icon, title, description }) => (
          <article key={title} className="border-t-2 border-accent pt-5">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

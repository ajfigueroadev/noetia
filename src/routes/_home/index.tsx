import { createFileRoute } from "@tanstack/react-router"

import { StatCard } from "@/features/dashboard/components/StatCard";
import { StatPatients } from "@/features/dashboard/components/StatPatients";
import { AnnualChart } from "@/features/dashboard/components/AnnualChart";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_home/")({ component: Dashboard });

function Dashboard() {
  return (
    <section className="grid grid-cols-1 gap-3">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-extrabold">Dashboard</h1>
          <p className="text-xs text-muted-foreground">Bienvenido de vuelta, Alejandro Sanchez!</p>
        </div>

        <Button variant={'default'} size={'sm'}>Personalizar Widgets</Button>
      </header>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-3">
          <StatCard
            label="Pacientes"
            value={128}
            hint="23 pacientes nuevos este año"
            segments={[
              { label: "Recurrentes", value: 105, className: "bg-primary" },
              { label: "Nuevos", value: 23, className: "bg-primary/30" },
            ]}
          />
          <StatCard
            label="Pruebas aplicadas"
            value={79}
            hint="Distribución por instrumento"
            segments={[
              { label: "WISC-V", value: 48, className: "bg-primary" },
              { label: "WPPSI-III", value: 31, className: "bg-primary/30" },
            ]}
          />
          <StatCard
            label="Evaluaciones"
            value={94}
            hint="13 evaluaciones sin cerrar"
            segments={[
              { label: "Completadas", value: 81, className: "bg-primary" },
              { label: "En curso", value: 13, className: "bg-primary/30" },
            ]}
          />
        </div>

        <AnnualChart />
        <StatPatients />
    </section>
  )
}

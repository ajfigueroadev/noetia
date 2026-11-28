import { createFileRoute } from '@tanstack/react-router'

import { AltArrowRightIcon } from "@solar-icons/react/linear";
import { WppsiManuals } from '@/features/wppsi-iii/components/WppsiManuals';

export const Route = createFileRoute('/_home/wpsii-iii/')({ component: RouteComponent });

function RouteComponent() {
  return (
    <section className="grid grid-cols-1 gap-4">
      <header className="space-y-2">
        <h1 className="flex gap-1 items-center text-base font-extrabold">
          WPPSI-III <AltArrowRightIcon className="size-3" /> Pruebas
        </h1>
        <p className="text-xs text-muted-foreground">
          Explora y selecciona el instrumento de evaluación que deseas aplicar.
        </p>
      </header>

      <WppsiManuals />
    </section>
  )
}

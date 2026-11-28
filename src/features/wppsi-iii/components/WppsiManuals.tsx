import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

import { manuales } from "@/features/wppsi-iii/manuales.mocks"

import { ArrowRightIcon } from "@solar-icons/react/linear"

export function WppsiManuals() {
  return (
    <section className="grid grid-cols-1 gap-3">
      {manuales.map((manual) => (
        <article
          key={manual.nombre}
          className="flex flex-col overflow-hidden rounded-md border border-muted bg-secondary"
        >
          {/* Contenido de la parte superior */}
          <div className="bg-white space-y-3 p-3 rounded-md">
            {/* Titulo y descripción */}
            <header className="space-y-1">
              <h3 className="text-sm font-bold">{manual.nombre}</h3>
              <p className="text-xs text-muted-foreground">{manual.descripcion}</p>
            </header>

            {/* Grid de información metadata */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 border-t border-muted pt-3">
              <div className="space-y-1">
                <dt className="text-xs text-muted-foreground">Edad de aplicación</dt>
                <dd className="text-sm font-medium">{manual.edad}</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-xs text-muted-foreground">Duración aproximada</dt>
                <dd className="text-sm font-medium">{manual.duracion}</dd>
              </div>
            </dl>
          </div>

          {/* Grid de subpruebas principales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3">
            {manual.subpruebas.filter((grupo) => grupo.tipo === 'Principales').map((grupo) => (
              <section className="space-y-2">
                <h4 className="text-xs font-semibold">{grupo.tipo}</h4>

                {grupo.items.map((item) => <p className="text-xs text-muted-foreground">- {item}</p>)}
              </section>
            ))}

            {/* Grid de subpruebas suplementarias */}
            {manual.subpruebas.filter((grupo) => grupo.tipo === 'Suplementarias').map((grupo) => (
              <section className="space-y-2">
                <h4 className="text-xs font-semibold">{grupo.tipo}</h4>

                {grupo.items.map((item) => <p className="text-xs text-muted-foreground">- {item}</p>)}
              </section>
            ))}

            {/* Grid de subpruebas opcionales */}
            {manual.subpruebas.filter((grupo) => grupo.tipo === 'Opcionales').map((grupo) => (
              <section className="space-y-2">
                <h4 className="text-xs font-semibold">{grupo.tipo}</h4>

                {grupo.items.map((item) => <p className="text-xs text-muted-foreground">- {item}</p>)}
              </section>
            ))}
          </div>

          {/* Acciones establecidas para la prueba */}
          <footer className="ml-auto p-3">
            <Link to="/wpsii-iii/prueba">
              <Button variant={'default'}>
                Aplicar prueba
                <ArrowRightIcon/>
              </Button>
            </Link>
          </footer>
        </article>
      ))}
    </section>
  )
}

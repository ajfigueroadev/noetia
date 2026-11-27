import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/wpsii-iii')({
  component: RouteComponent,
})

const manuales = [
  { nombre: 'WPSSI-III (2:3)', portada: '/images/wpssi-iii.webp' },
  { nombre: 'WPSSI-III (4:7)', portada: '/images/wpssi-iii.webp' },
]

function RouteComponent() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-base font-semibold tracking-tight">WPPSI-III</h1>
        <p className="text-sm text-muted-foreground">Selecciona la prueba que deseas aplicar.</p>
      </header>

      <div className="grid grid-cols-4 gap-3">
        {manuales.map((manual) => (
          <button
            key={manual.nombre}
            type="button"
            className="group overflow-hidden rounded-xl border border-border bg-secondary text-left text-secondary-foreground shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:ring-2 hover:ring-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <div className="overflow-hidden">
              <img
                src={manual.portada}
                alt={`Portada del ${manual.nombre} del WPPSI-III`}
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="px-3 py-3 text-sm leading-snug font-semibold">
              {manual.nombre}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}

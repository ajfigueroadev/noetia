import { cn } from "cn"

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
const ATENDIDOS: (number | null)[] = [18, 24, 31, 27, 35, 42, 38, 45, 40, 52, 47, null]
const MES_ACTUAL = 10

export function AnnualChart() {
  const max = 60
  const ticks = [60, 40, 20, 0]
  const total = ATENDIDOS.reduce<number>((sum, n) => sum + (n ?? 0), 0)

  return (
    <section className="rounded-md border border-muted bg-secondary">
      <header className="flex items-start justify-between gap-4 px-3 py-2">
        <div className="space-y-1">
          <h2 className="text-sm font-semibold">Pacientes atendidos</h2>
          <p className="text-xs text-muted-foreground">Por mes durante 2026</p>
        </div>

        <div className="space-y-1 text-right">
          <p className="text-sm font-semibold tabular-nums">{total}</p>
          <p className="text-xs text-muted-foreground">en lo que va del año</p>
        </div>
      </header>

      <div className="flex gap-3 bg-white rounded-md p-3">
        <div
          aria-hidden
          className="flex h-56 flex-col justify-between text-xs tabular-nums text-muted-foreground"
        >
          {ticks.map((t) => (
            <span key={t} className="leading-none">{t}</span>
          ))}
        </div>

        <div className="relative flex-1">
          {/* líneas guía */}
          <div aria-hidden className="absolute inset-x-0 top-0 flex h-56 flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="border-t border-dashed border-border" />
            ))}
          </div>

          {/* barras */}
          <ul className="relative flex h-56 items-end gap-2 sm:gap-3">
            {ATENDIDOS.map((n, i) => (
              <li
                key={MESES[i]}
                className="group relative flex h-full flex-1 items-end"
                title={n === null ? `${MESES[i]}: sin datos` : `${MESES[i]}: ${n} pacientes`}
              >
                {n === null ? (
                  <div className="h-2 w-full rounded-full bg-secondary" />
                ) : (
                  <>
                    <div
                      className={cn(
                        "w-full rounded-t-sm transition-colors",
                        i === MES_ACTUAL ? "bg-primary" : "bg-primary/30 group-hover:bg-primary/60"
                      )}
                      style={{ height: `${(n / max) * 100}%` }}
                    />
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-md bg-foreground px-1.5 py-0.5 text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ bottom: `calc(${(n / max) * 100}% + 4px)` }}
                    >
                      {n}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* meses */}
          <ul className="mt-2 flex gap-2 sm:gap-3">
            {MESES.map((mes, i) => (
              <li
                key={mes}
                className={cn(
                  "flex-1 text-center text-xs",
                  i === MES_ACTUAL ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {mes}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

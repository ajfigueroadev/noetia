interface IStatCard {
  label: string;
  value: number;
  hint: string;
  segments: { label: string; value: number; className: string }[];
}

export function StatCard({ label, value, hint, segments }: IStatCard) {
  return (
    <section className="flex flex-col gap-2 bg-card border border-muted rounded-md p-3">
      <div className="flex gap-2 items-baseline">
        <p className="text-lg font-semibold tabular-nums">{value}</p>
        <h2 className="text-xs text-muted-foreground">{label}</h2>
      </div>

      <p className="text-xs text-muted-foreground">{hint}</p>

      <ul className="grid grid-cols-1 gap-1 text-xs text-muted-foreground mt-2">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-1.5">
            <span className={"size-2 rounded-full " + s.className} /> {s.label}
            <span className={"ml-auto font-medium"}>{s.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

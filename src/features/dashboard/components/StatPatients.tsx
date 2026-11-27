import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";

type Patient = {
  nombre: string;
  edad: number;
  prueba: string;
  fecha: string;
  estado: string;
}

const ULTIMOS: Patient[] = [
  { nombre: "Valeria Mendoza", edad: 9, prueba: "WISC-V", fecha: "26 nov", estado: "En curso" },
  { nombre: "Daniel Rivera", edad: 5, prueba: "WPPSI-III", fecha: "25 nov", estado: "Completada" },
  { nombre: "Camila Zelaya", edad: 11, prueba: "WISC-V", fecha: "25 nov", estado: "Completada" },
  { nombre: "José Pineda", edad: 6, prueba: "WPPSI-III", fecha: "22 nov", estado: "Pendiente" },
  { nombre: "Sofía Aguilar", edad: 8, prueba: "WISC-V", fecha: "21 nov", estado: "Completada" },
]

export function StatPatients() {
  return (
    <section className="flex flex-col gap-6 rounded-md border border-muted bg-card p-3">
      <header className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold">Últimos pacientes atendidos</h2>
        <p className="text-xs text-muted-foreground">Las 5 evaluaciones más recientes</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {ULTIMOS.map((patient) => <PatientCard patient={patient}/>)}
      </div>
    </section>
  )
}

function PatientCard({ patient } : { patient: Patient }) {
  return (
    <article className={"grid grid-cols-[2fr_1fr_1fr_1fr] w-full items-center gap-2"}>
      <div className="flex gap-4 min-w-0">
        <Avatar>
          <AvatarImage src="https://i.pinimg.com/736x/ae/32/35/ae32350bccaf286509ffa3bcd989c906.jpg" />
          <AvatarFallback>AZ</AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-col">
          <p className="text-xs font-medium">{patient.nombre}</p>
          <p className="text-xs text-muted-foreground">{patient.edad} años</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground font-medium">{patient.prueba}</p>
      <p className="text-xs text-muted-foreground font-medium">{patient.fecha}</p>

      <Badge variant={'secondary'}>{patient.estado}</Badge>
    </article>
  )
}

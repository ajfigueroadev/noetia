import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

import { MagnifierIcon } from '@solar-icons/react/bold'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

export const Route = createFileRoute('/_home/pacientes')({ component: Pacientes });

const pacientes = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  edad: '3 años, 3 meses.',
  nombre: '(AHR-240) Alejandro Josue Sanchez Velasquez',
}))

function Pacientes() {
  return (
    <section className="flex flex-col gap-4">
      {/* Encabezado */}
      <header className="flex flex-col gap-1">
        <h1 className="text-base font-semibold">Pacientes</h1>
        <p className="text-sm text-muted-foreground">Todos los pacientes registrados durante la sesión.</p>
      </header>

      {/* Buscador */}
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <MagnifierIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder={`${pacientes.length} items`} />
      </InputGroup>

      {/* Lista de pacientes */}
      <ul className="flex flex-col gap-3">
        {pacientes.map((paciente) => (
          <li
            key={paciente.id}
            className="relative bg-secondary flex flex-col gap-1 rounded-md border border-muted p-3"
          >
            <p className="text-xs text-muted-foreground">{paciente.edad}</p>
            <p className="text-sm font-medium">{paciente.nombre}</p>

            <Button
              size="sm"
              className="absolute top-3 right-3 font-semibold"
            >
              Visualizar
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}

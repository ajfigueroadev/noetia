import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/pacientes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pacientes"!</div>
}

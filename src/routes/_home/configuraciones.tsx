import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/configuraciones')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/configuraciones"!</div>
}

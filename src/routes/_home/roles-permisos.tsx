import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/roles-permisos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/roles-permisos"!</div>
}

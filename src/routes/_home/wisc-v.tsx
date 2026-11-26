import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/wisc-v')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/wisc-v"!</div>
}

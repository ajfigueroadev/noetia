import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/wpsii-iii')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wpsii-iii"!</div>
}

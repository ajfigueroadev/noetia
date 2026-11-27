import { Sidebar } from '@/components/Sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_home')({
  component: () => {
    return (
      <main className="flex h-dvh overflow-hidden">
        <Sidebar />

        <div className="min-w-0 flex-1 overflow-y-auto px-4 py-3"> <Outlet /> </div>
      </main>
    )
  },
})

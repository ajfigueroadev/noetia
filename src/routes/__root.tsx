import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import { TanStackDevtools } from "@tanstack/react-devtools"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import { SolarProvider } from "@solar-icons/react/lib/SolarProvider"

import stylesCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Noetia" }
    ],
    links: [
      { rel: "stylesheet", href: stylesCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head> <HeadContent /> </head>

      <body>
        <SolarProvider strokeWidth={2.5}>
          {children}
        </SolarProvider>

        <TanStackDevtools plugins={[{
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
        }]}/>

        <Scripts />
      </body>
    </html>
  )
}

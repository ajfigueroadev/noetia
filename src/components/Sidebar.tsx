import { Link } from "@tanstack/react-router";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

import {
  Home2Icon as HomeBold,
  MedicalKitIcon as MedicalBold,
  FileTextIcon as FileTextBold,
  KeyIcon as KeyBold,
  Document2Icon as DocumentBold,
  PanelLeftIcon, SettingsIcon,
} from '@solar-icons/react/bold'

export function Sidebar() {
  return (
    <aside className="flex flex-col h-dvh w-52 shrink-0 border-r border-muted bg-secondary p-3">
      <header className="flex justify-between items-center w-full">
        <h1 className="text-xl font-extrabold">Noetia.</h1>

        <Button variant={'outline'}>
          <PanelLeftIcon/>
        </Button>
      </header>

      {/* Contenido de la barra lateral */}
      <section className="flex flex-col flex-1 w-full gap-3 mt-4">
        {/* Seccion de la barra lateral (Main Home) */}
        <section className="flex flex-col gap-1 w-full">
          <h2 className="text-xs font-medium mb-1">Espacio de Trabajo</h2>

          <Link to="/">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <HomeBold />
                Dashboard
              </Button>
            )}
          </Link>

          <Link to="/pacientes">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <MedicalBold />
                Pacientes
              </Button>
            )}
          </Link>
        </section>

        {/* Seccion de la barra lateral (Pruebas) */}
        <section className="flex flex-col gap-1 border-t pt-4 w-full">
          <h2 className="text-xs font-medium mb-1">Pruebas Psicometricas</h2>

          <Link to="/wisc-v">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <FileTextBold />
                Wisc-V
              </Button>
            )}
          </Link>

          <Link to="/wpsii-iii">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <FileTextBold />
                Wpssi-III
              </Button>
            )}
          </Link>
        </section>

        {/* Seccion de la barra lateral (Administración) */}
        <section className="flex flex-col gap-1 border-t pt-4 w-full">
          <h2 className="text-xs font-medium mb-1">Administraciónes</h2>

          <Link to="/roles-permisos">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <KeyBold />
                Roles & Permisos
              </Button>
            )}
          </Link>

          <Link to="/configuraciones">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <SettingsIcon />
                Configuraciones
              </Button>
            )}
          </Link>

          <Link to="/configuraciones">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <DocumentBold />
                Ayuda & Recursos
              </Button>
            )}
          </Link>
        </section>
      </section>

      <footer className="flex flex-col mt-auto gap-3 w-full">
        {/* Perfil de usuario conectado */}
        <section className="flex gap-3 w-full items-center">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/736x/2b/d7/77/2bd777d7c47d056106d238c8cc2724de.jpg"/>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="space-y-0.5">
            <p className="text-xs font-semibold truncate">Roxy Miguardia</p>
            <p className="text-xs text-muted-foreground">Administradora</p>
          </div>
        </section>
      </footer>
    </aside>
  );
}

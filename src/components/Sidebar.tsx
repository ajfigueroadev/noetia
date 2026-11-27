import { Link } from "@tanstack/react-router";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

import { Home2Icon, MedicalKitIcon, FileTextIcon, SettingsIcon, KeyIcon, DocumentIcon, PanelLeftIcon } from '@solar-icons/react/linear'

export function Sidebar() {
  return (
    <aside className="flex flex-col h-dvh w-52 shrink-0 border-r border-muted p-3 bg-secondary/40">
      <header className="flex justify-between items-center w-full">
        <h1 className="text-xl font-extrabold">Noetia.</h1>

        <Button variant={'ghost'}>
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
                <Home2Icon /> Dashboard
              </Button>
            )}
          </Link>

          <Link to="/pacientes">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <MedicalKitIcon /> Pacientes
              </Button>
            )}
          </Link>
        </section>

        {/* Seccion de la barra lateral (Pruebas) */}
        <section className="flex flex-col gap-1 w-full">
          <h2 className="text-xs font-medium mb-1">Pruebas Psicometricas</h2>

          <Link to="/wisc-v">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <FileTextIcon /> Wisc-V
              </Button>
            )}
          </Link>

          <Link to="/wpsii-iii">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <FileTextIcon /> Wpssi-III
              </Button>
            )}
          </Link>
        </section>

        {/* Seccion de la barra lateral (Administración) */}
        <section className="flex flex-col gap-1 w-full">
          <h2 className="text-xs font-medium mb-1">Administraciónes</h2>

          <Link to="/roles-permisos">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <KeyIcon /> Roles & Permisos
              </Button>
            )}
          </Link>

          <Link to="/configuraciones">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <SettingsIcon /> Configuraciones
              </Button>
            )}
          </Link>

          <Link to="/configuraciones">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                className={'justify-start w-full'}
              >
                <DocumentIcon /> Ayuda & Recursos
              </Button>
            )}
          </Link>
        </section>
      </section>

      <footer className="flex mt-auto items-center gap-3 w-full">
        {/* Perfil de usuario conectado */}
        <section className="flex flex-row gap-3 w-full items-center">
          <Avatar size="sm">
            <AvatarImage src="https://i.pinimg.com/736x/ae/32/35/ae32350bccaf286509ffa3bcd989c906.jpg"/>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <p className="text-xs font-semibold truncate">Rizzy Rosales</p>
        </section>
      </footer>
    </aside>
  );
}

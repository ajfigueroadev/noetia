import { Link } from "@tanstack/react-router";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

import { IconHome, IconUser, IconFileDescription, IconSettings, IconUserKey } from '@tabler/icons-react'
import { Home2Icon, MedicalKitIcon, FileTextIcon, SettingsIcon, KeyIcon } from '@solar-icons/react/bold'

export function Sidebar() {
  return (
    <aside className="flex flex-col h-dvh w-52 shrink-0 border-r border-secondary bg-muted/30">
      {/* Contenido de la barra lateral */}
      <section className="flex flex-col flex-1 w-full gap-3 p-2 mt-2">
        {/* Seccion de la barra lateral (Main Home) */}
        <section className="flex flex-col gap-1 w-full">
          <h2 className="text-xs text-muted-foreground font-semibold ml-2 mb-1">Main Home</h2>

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
          <h2 className="text-xs text-muted-foreground font-semibold ml-2 mb-1">Psicometricas</h2>

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
          <h2 className="text-xs text-muted-foregroundfont-semibold ml-2 mb-1">Administración</h2>

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
        </section>
      </section>

      <footer className="flex mt-auto items-center gap-2 w-full p-4">
        {/* Perfil de usuario conectado */}
        <section className="flex flex-row gap-3 w-full items-center border-t border-black/10 pt-4">
          <Avatar size="default">
            <AvatarImage src="https://i.pinimg.com/736x/ae/32/35/ae32350bccaf286509ffa3bcd989c906.jpg"/>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <p className="text-xs font-semibold truncate">Rizzy Rosales</p>
        </section>
      </footer>
    </aside>
  );
}

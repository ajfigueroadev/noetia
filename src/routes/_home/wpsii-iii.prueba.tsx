import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { manuales } from '@/features/wppsi-iii/manuales.mocks'
import { AltArrowRightIcon } from '@solar-icons/react/linear'
import { createFileRoute } from '@tanstack/react-router'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { format } from "date-fns"

export const Route = createFileRoute('/_home/wpsii-iii/prueba')({  component: PruebaPage })

function PruebaPage() {
  const [formulario, setFormulario] = useState<{
    edad: number;
    evaluación: Date | undefined;
    nacimiento: Date | undefined;
  }>({
    edad: 0,
    evaluación: undefined,
    nacimiento: undefined,
  });

  // TODO: Esta ruta sera mediante un $id para obtener esto dinamicamente.
  const manual = manuales.find((m) => m.id === 'preescolar-inicial');

  const edad =
    formulario.nacimiento && formulario.evaluación
      ? calcularEdad(
          formulario.nacimiento,
          formulario.evaluación
        )
      : '';

  return (
    <section className='space-y-4'>
      <header className="space-y-2">
        <h1 className="flex gap-1 items-center text-base font-extrabold">
          WPPSI-III <AltArrowRightIcon className="size-3" /> {manual?.nombre}
        </h1>
        <p className="text-xs text-muted-foreground">{manual?.descripcion}</p>
      </header>

      {/* Formulario Inicial de Información */}
      <div className='flex bg-secondary border border-muted rounded-md flex-col'>
        <header className='flex flex-col gap-1 p-3'>
          <h2 className='text-sm font-semibold'>Información de la Consulta</h2>
          <p className='text-xs text-muted-foreground'>Ingresa los datos iniciales sobre este expediente.</p>
        </header>

        <div className='bg-white p-3 rounded-md grid grid-cols-1 gap-3'>
          <div className='grid grid-cols-2 gap-3'>
            <Field orientation={'vertical'}>
              <FieldLabel aria-required htmlFor='nombre-paciente'>Nombre del niño/niña</FieldLabel>
              <Input id='nombre-paciente' placeholder='Nombre del niño o niña.'/>
            </Field>

            <Field orientation={'vertical'}>
              <FieldLabel aria-required htmlFor='sexo'>Sexo</FieldLabel>
              <Input id='sexo' placeholder='Ingrese el sexo.'/>
            </Field>
          </div>

          <Field orientation={'vertical'}>
            <FieldLabel aria-required htmlFor='nombre-examinador'>Nombre del examinador</FieldLabel>
            <Input id='nombre-examinador' placeholder='Nombre del examinador.'/>
          </Field>
        </div>
      </div>

      {/* Formulario Calculo de edad del niño */}
      <div className='flex bg-secondary border border-muted rounded-md flex-col'>
        <header className='flex flex-col gap-1 p-3'>
          <h2 className='text-sm font-semibold'>Calculo de la Edad</h2>
          <p className='text-xs text-muted-foreground'>Ingresa las fechas para hacer el calculo de edad.</p>
        </header>

        <div className='bg-white p-3 rounded-md grid grid-cols-3 gap-3'>
          <Field orientation={'vertical'}>
            <FieldLabel aria-required htmlFor='fecha-evaluación'>
              Fecha de evaluación
            </FieldLabel>
            <Popover>
              <PopoverTrigger
                render={
                  <Button variant="outline" id="date-picker-simple" className="justify-start font-normal">
                    {formulario.evaluación ?
                      format(formulario.evaluación, "PPP")
                      : "Selecciona una fecha"}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={formulario.evaluación}
                  onSelect={(date) => setFormulario((prev) => ({ ...prev, evaluación: date }))}
                  defaultMonth={formulario.evaluación}
                />
              </PopoverContent>
            </Popover>
          </Field>

          <Field orientation={'vertical'}>
            <FieldLabel aria-required htmlFor='fecha-nacimiento'>
              Fecha de nacimiento
            </FieldLabel>
            <Popover>
              <PopoverTrigger
                render={
                  <Button variant="outline" id="date-picker-simple" className="justify-start font-normal">
                    {formulario.nacimiento ?
                      format(formulario.nacimiento, "PPP")
                      : "Selecciona una fecha"}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={formulario.nacimiento}
                  onSelect={(date) => setFormulario((prev) => ({ ...prev, nacimiento: date }))}
                  defaultMonth={formulario.nacimiento}
                />
              </PopoverContent>
            </Popover>
          </Field>

          <Field orientation={'vertical'}>
            <FieldLabel htmlFor='fecha-edad'>Edad a la evaluación</FieldLabel>
            <Input
              disabled
              id="edad"
              value={edad !== '' ? `${edad} años` : ''}
              placeholder="Calculo automáticamente."
            />
          </Field>
        </div>
      </div>
    </section>
  )
}

function calcularEdad(fechaNacimiento: Date, fechaEvaluacion: Date): number {
  let edad = fechaEvaluacion.getFullYear() - fechaNacimiento.getFullYear();

  const noHaCumplidoAnos =
    fechaEvaluacion.getMonth() < fechaNacimiento.getMonth() || (
      fechaEvaluacion.getMonth() === fechaNacimiento.getMonth() &&
      fechaEvaluacion.getDate() < fechaNacimiento.getDate()
    );

  if (noHaCumplidoAnos) edad--;

  return edad;
}

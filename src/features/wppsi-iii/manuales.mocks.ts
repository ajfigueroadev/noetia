export const manuales = [
  {
    id: 'preescolar-inicial',
    nombre: 'WPPSI-III (2:6 – 3:11)',
    descripcion: 'Primer nivel de la escala. Evalúa la capacidad cognitiva en la primera infancia mediante tareas verbales y de ejecución breves.',
    edad: '2 años 6 meses a 3 años 11 meses',
    duracion: '30 a 45 min',
    subpruebas: [
      {
        tipo: 'Principales',
        items: ['Vocabulario receptivo','Información','Diseño con cubos','Rompecabezas',],
      },
      {
        tipo: 'Suplementarias',
        items: ['Denominaciones']
      },
    ],
  },
  {
    id: 'preescolar-avanzado',
    nombre: 'WPPSI-III (4:0 – 7:3)',
    descripcion: 'Segundo nivel de la escala. Amplía la evaluación con tareas de razonamiento, lenguaje y velocidad de procesamiento.',
    edad: '4 años a 7 años 3 meses',
    duracion: '45 a 60 min',
    subpruebas: [
      {
        tipo: 'Principales',
        items: ['Diseño con cubos','Información','Matrices','Vocabulario','Conceptos con dibujos','Pistas','Claves'],
      },
      {
        tipo: 'Suplementarias',
        items: ['Búsqueda de símbolos','Comprensión','Figuras incompletas','Semejanzas','Rompecabezas'],
      },
      {
        tipo: 'Opcionales',
        items: ['Vocabulario receptivo','Denominaciones'],
      },
    ],
  },
]

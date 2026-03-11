export const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    shortDescription: 'Aplicación del clima con datos en tiempo real',
    icon: '🌤️',
    technologies: ['React', 'API REST', 'Tailwind CSS'],
    problem: 'Los usuarios necesitan información meteorológica precisa y actualizada de manera rápida y visual para planificar sus actividades diarias.',
    solution: 'Desarrollé una aplicación del clima que consume la API de OpenWeatherMap, mostrando datos en tiempo real con una interfaz limpia e intuitiva.',
    features: [
      'Búsqueda de ciudades con autocompletado',
      'Pronóstico de 5 días con gráficos visuales',
      'Detección automática de ubicación',
      'Diseño responsivo para todos los dispositivos',
      'Animaciones suaves y transiciones'
    ],
    results: 'La aplicación proporciona información meteorológica precisa con una experiencia de usuario fluida. Los usuarios pueden acceder rápidamente a los datos que necesitan.',
    lesson: 'Aprendí a manejar estados asíncronos con React hooks, gestionar errores de API y crear interfaces que muestran datos complejos de forma simple.',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'ToDo App',
    shortDescription: 'Gestor de tareas con persistencia local',
    icon: '✅',
    technologies: ['React', 'LocalStorage', 'CSS3'],
    problem: 'Las personas necesitan una forma simple de organizar sus tareas diarias sin complicaciones ni registros innecesarios.',
    solution: 'Creé una aplicación de tareas con persistencia en LocalStorage, permitiendo a los usuarios gestionar sus pendientes sin necesidad de backend.',
    features: [
      'Agregar, editar y eliminar tareas',
      'Marcar tareas como completadas',
      'Filtros por estado (todas, activas, completadas)',
      'Persistencia de datos en el navegador',
      'Contador de tareas pendientes'
    ],
    results: 'Una herramienta práctica y ligera que los usuarios pueden usar inmediatamente sin configuración. Los datos persisten entre sesiones.',
    lesson: 'Profundicé en el manejo del estado con useState y useEffect, y aprendí las mejores prácticas para trabajar con LocalStorage en React.',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Starbucks Rewards Clone',
    shortDescription: 'Réplica pixel-perfect de landing page',
    icon: '☕',
    technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
    problem: 'Demostrar habilidades de maquetación y atención al detalle recreando una landing page profesional de una marca reconocida.',
    solution: 'Desarrollé un clon de la página Starbucks Rewards, replicando fielmente el diseño, animaciones y comportamiento responsivo del original.',
    features: [
      'Diseño pixel-perfect del original',
      'Animaciones y transiciones suaves',
      'Totalmente responsivo (mobile-first)',
      'Componentes reutilizables',
      'Optimización de imágenes y rendimiento'
    ],
    results: 'Una réplica fiel que demuestra capacidad técnica y atención al detalle. El sitio es indistinguible del original en términos de diseño.',
    lesson: 'Mejoré mis habilidades de maquetación CSS, aprendí a analizar y replicar diseños complejos, y perfeccioné el uso de Tailwind CSS.',
    demoUrl: '#',
    githubUrl: '#'
  }
]

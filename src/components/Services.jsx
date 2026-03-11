const Services = () => {
  const services = [
    {
      icon: 'bi-code-slash',
      title: 'Desarrollo Full Stack',
      description: 'Desarrollo aplicaciones web completas usando Blazor (.NET), Laravel (PHP) y tecnologías modernas tanto en frontend como backend.'
    },
    {
      icon: 'bi-database',
      title: 'APIs y Bases de Datos',
      description: 'Diseño e implementación de APIs RESTful y gestión de bases de datos SQL (MySQL) para sistemas robustos y escalables.'
    },
    {
      icon: 'bi-git',
      title: 'Control de Versiones',
      description: 'Experiencia con Git para control de versiones, trabajo colaborativo y despliegue de proyectos en entornos de producción.'
    },
    {
      icon: 'bi-kanban',
      title: 'Metodologías Ágiles',
      description: 'Trabajo bajo metodología Scrum, con presentación de avances semanales y gestión eficiente de proyectos.'
    }
  ]

  return (
    <section id="servicios" className="py-20 px-6 border-b border-black dark:border-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          SERVICIOS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              <i className={`${service.icon} text-4xl mb-4 block`}></i>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

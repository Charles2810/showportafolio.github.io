const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Diseño UX/UI',
      description: 'Creo interfaces intuitivas y atractivas centradas en la experiencia del usuario, desde wireframes hasta prototipos interactivos.'
    },
    {
      icon: '⚛️',
      title: 'Desarrollo React',
      description: 'Desarrollo aplicaciones web modernas y escalables usando React, con código limpio y mejores prácticas.'
    },
    {
      icon: '📱',
      title: 'Diseño Responsivo',
      description: 'Garantizo que tus aplicaciones se vean y funcionen perfectamente en cualquier dispositivo y tamaño de pantalla.'
    },
    {
      icon: '⚡',
      title: 'Optimización',
      description: 'Mejoro el rendimiento de aplicaciones web para tiempos de carga rápidos y experiencias fluidas.'
    }
  ]

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Servicios
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

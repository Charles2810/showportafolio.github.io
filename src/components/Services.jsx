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
    <section id="servicios" className="py-20 px-6 border-b border-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          SERVICIOS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
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

import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Transformando ideas en experiencias digitales'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hola, soy <span className="text-primary">Charles</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 h-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Desarrollador Frontend especializado en React y diseño UX/UI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#proyectos"
            className="px-8 py-3 bg-primary hover:bg-primary/80 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contacto"
            className="px-8 py-3 border-2 border-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

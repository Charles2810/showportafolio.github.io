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
      className="min-h-screen flex items-center justify-center pt-20 px-6 border-b border-black"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          CHARLES
        </h1>
        <p className="text-xl md:text-3xl mb-8 h-10 font-light">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-base md:text-lg mb-12 uppercase tracking-widest text-gray-600">
          Frontend Developer · UX/UI Designer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#proyectos"
            className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            VER PROYECTOS
          </a>
          <a 
            href="#contacto"
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

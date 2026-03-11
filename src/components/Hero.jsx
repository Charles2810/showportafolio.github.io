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
      className="min-h-screen flex items-center justify-center pt-20 px-6 border-b border-black dark:border-white"
    >
      <div className="text-center max-w-4xl">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-black dark:border-white flex items-center justify-center font-bold text-4xl md:text-5xl">
              CY
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          CHARLES
        </h1>
        <p className="text-xl md:text-3xl mb-8 h-10 font-light">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-base md:text-lg mb-12 uppercase tracking-widest text-gray-600 dark:text-gray-400">
          Full Stack Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#proyectos"
            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-all duration-300"
          >
            VER PROYECTOS
          </a>
          <a 
            href="#contacto"
            className="px-8 py-3 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

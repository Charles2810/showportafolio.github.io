const About = () => {
  const education = [
    {
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Tecnológica',
      year: '2018 - 2022'
    },
    {
      title: 'Certificación React Avanzado',
      institution: 'Platzi',
      year: '2023'
    }
  ]

  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Tailwind CSS',
    'HTML5', 'CSS3', 'Git', 'Figma', 'UX/UI Design'
  ]

  return (
    <section id="sobre-mi" className="py-20 px-6 border-b border-black dark:border-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          SOBRE MÍ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Mi Historia</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 border-2 border-black dark:border-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                CY
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Charles Yañez</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Soy un desarrollador frontend apasionado por crear experiencias web 
              excepcionales. Mi enfoque combina código limpio con diseño intuitivo 
              para construir aplicaciones que no solo funcionan bien, sino que también 
              se ven increíbles.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Me especializo en React y diseño UX/UI, siempre buscando la mejor 
              manera de resolver problemas complejos con soluciones elegantes y 
              centradas en el usuario.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Educación</h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-black dark:border-white pl-4">
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 border border-black dark:border-white text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

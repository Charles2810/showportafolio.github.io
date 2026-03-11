const About = () => {
  const education = [
    {
      title: 'Ingeniería de Sistemas',
      institution: 'Universidad Privada Domingo Savio',
      year: '8vo Semestre'
    },
    {
      title: 'Bachiller en Humanidades',
      institution: 'Santa Cruz, Bolivia',
      year: 'Completado'
    }
  ]

  const skills = [
    'Blazor (.NET)', 'Laravel (PHP)', 'HTML', 'CSS', 'JavaScript',
    'C++', 'Python', 'SQL (MySQL)', 'Git', 'Scrum', 'Telerik UI', 'Hostinger'
  ]

  return (
    <section id="sobre-mi" className="py-20 px-6 border-b border-black dark:border-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          SOBRE MÍ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 border-2 border-black dark:border-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                CY
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Charles</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Estudiante de 8vo semestre de Ingeniería de Sistemas con sólida base técnica en 
              desarrollo Full Stack. Experiencia práctica en entornos institucionales y proyectos 
              independientes utilizando Blazor y Laravel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Capacidad demostrada para la resolución de problemas mediante la creación de APIs 
              y sistemas de gestión. Experiencia en metodologías ágiles (Scrum) y despliegue de 
              aplicaciones en producción.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
              <i className="bi bi-mortarboard mr-2"></i>Educación
            </h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-black dark:border-white pl-4">
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
              <i className="bi bi-tools mr-2"></i>Habilidades Técnicas
            </h3>
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

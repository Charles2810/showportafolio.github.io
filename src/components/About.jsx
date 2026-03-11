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
    <section id="sobre-mi" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Sobre mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Mi Historia</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Soy un desarrollador frontend apasionado por crear experiencias web 
              excepcionales. Mi enfoque combina código limpio con diseño intuitivo 
              para construir aplicaciones que no solo funcionan bien, sino que también 
              se ven increíbles.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Me especializo en React y diseño UX/UI, siempre buscando la mejor 
              manera de resolver problemas complejos con soluciones elegantes y 
              centradas en el usuario.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Educación</h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/20 border border-primary rounded-full text-sm"
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

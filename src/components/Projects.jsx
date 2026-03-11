import { projectsData } from '../data/projectsData'

const Projects = ({ onProjectClick }) => {
  return (
    <section id="proyectos" className="py-20 px-6 border-b border-black dark:border-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          PROYECTOS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-900 dark:group-hover:bg-gray-100 flex items-center justify-center text-6xl transition-colors duration-300">
                {project.icon}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">
                  {project.title}
                </h3>
                <p className="opacity-80 mb-4 text-sm">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 border border-current"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="uppercase text-sm tracking-wider hover:underline">
                  Ver caso →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

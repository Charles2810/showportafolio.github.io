import { projectsData } from '../data/projectsData'

const Projects = ({ onProjectClick }) => {
  return (
    <section id="proyectos" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Proyectos Destacados
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                {project.icon}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-primary hover:underline">
                  Ver estudio de caso →
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

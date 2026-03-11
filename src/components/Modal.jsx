import { useEffect } from 'react'

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 rounded-lg max-w-4xl w-full my-8 border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 bg-primary/20 border border-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-3xl hover:text-primary transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-8xl mb-8">
            {project.icon}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">El Problema</h3>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">La Solución</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{project.solution}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Resultados y Aprendizajes</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{project.results}</p>
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-gray-400 italic">
                  <strong>Lección clave:</strong> {project.lesson}
                </p>
              </div>
            </div>

            {project.demoUrl && (
              <div className="flex gap-4">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg transition-all duration-300"
                >
                  Ver Demo
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  >
                    Ver Código
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

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
      className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-4xl w-full my-8 border-2 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 uppercase tracking-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 border border-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-3xl hover:opacity-50 transition-opacity"
            >
              ✕
            </button>
          </div>

          <div className="aspect-video bg-gray-100 flex items-center justify-center text-8xl mb-8 border border-black">
            {project.icon}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">El Problema</h3>
              <p className="text-gray-700 leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">La Solución</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{project.solution}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Resultados y Aprendizajes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{project.results}</p>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-sm text-gray-700">
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
                  className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Ver Demo
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
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

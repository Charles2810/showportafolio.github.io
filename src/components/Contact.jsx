import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Contacto
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Trabajemos juntos</h3>
            <p className="text-gray-300 mb-6">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
              Envíame un mensaje y conversemos sobre cómo puedo ayudarte.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a href="mailto:charles@example.com" className="hover:text-primary transition-colors">
                  charles@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐙</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
            
            {status && (
              <p className="text-center text-green-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

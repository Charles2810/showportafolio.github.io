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
    <section id="contacto" className="py-20 px-6 border-b border-black dark:border-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          CONTACTO
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Trabajemos juntos</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
              Envíame un mensaje y conversemos sobre cómo puedo ayudarte.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a href="mailto:charles@example.com" className="hover:opacity-50 transition-opacity">
                  charles@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐙</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 uppercase text-sm tracking-wider">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white dark:bg-black border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 uppercase text-sm tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white dark:bg-black border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 uppercase text-sm tracking-wider">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-white dark:bg-black border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-all duration-300 uppercase tracking-wider"
            >
              Enviar Mensaje
            </button>
            
            {status && (
              <p className="text-center">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

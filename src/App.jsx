import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects onProjectClick={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  )
}

export default App

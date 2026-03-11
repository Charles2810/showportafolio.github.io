import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-black' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-2xl font-bold tracking-tight">
            CHARLES
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="hover:opacity-50 transition-opacity duration-300 uppercase text-sm tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block hover:opacity-50 transition-opacity duration-300 uppercase text-sm tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-black dark:border-white flex items-center justify-center font-bold text-xs">
              CY
            </div>
            <p className="text-sm uppercase tracking-wider">
              © 2024 CHARLES YAÑEZ
            </p>
          </div>
          
          <div className="flex gap-6 text-sm uppercase tracking-wider">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

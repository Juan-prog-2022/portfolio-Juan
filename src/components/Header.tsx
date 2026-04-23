import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-bold text-white hover:text-blue-400 transition"
          onClick={closeMenu}
        >
          <img
            src="/profile.jpg"
            alt="Juan Quiroz"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-600"
          />
          <span className="hidden sm:block">Juan Quiroz</span>
          <span className="sm:hidden">JQ</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://github.com/Juan-prog-2022"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          GitHub
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-300 hover:text-white transition"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-800 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-4">
          <a
            href="#home"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Contacto
          </a>
          <div className="pt-4 border-t border-slate-700">
            <a
              href="https://github.com/Juan-prog-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
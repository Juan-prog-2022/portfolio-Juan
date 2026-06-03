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
          className="flex items-center gap-3 hover:text-blue-400 transition"
          onClick={closeMenu}
        >
          <img
            src="/profile.jpg"
            alt="Juan Quiroz"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-600"
          />

          {/* Desktop */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-bold text-sm md:text-base">
              Juan Quiroz
            </span>
            <span className="text-xs text-slate-400">
              Java Backend Developer
            </span>
          </div>

          {/* Mobile */}
          <span className="sm:hidden text-white font-bold">
            JQ
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
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
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Backend Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Juan-prog-2022"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/juan-quiroz-programador"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            LinkedIn
          </a>
          <a
            href="/CV_Juan_Quiroz_Backend_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
          >
            CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-300 hover:text-white transition"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen
                ? 'rotate-45 translate-y-1'
                : '-translate-y-1'
                }`}
            ></span>

            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></span>

            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen
                ? '-rotate-45 -translate-y-1'
                : 'translate-y-1'
                }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-800 transition-all duration-300 ${isMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
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
            href="#skills"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Backend Projects
          </a>

          <a
            href="#contact"
            className="block text-slate-300 hover:text-blue-400 transition py-2"
            onClick={closeMenu}
          >
            Contacto
          </a>

          <div className="pt-4 border-t border-slate-700 flex gap-3">
            <a
              href="https://github.com/Juan-prog-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
              onClick={closeMenu}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/juan-quiroz-programador"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              onClick={closeMenu}
            >
              LinkedIn
            </a>

            <a
              href="/CV_Juan_Quiroz_Backend_2026.pdf"
              download
              className="text-sm font-medium border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
              onClick={closeMenu}
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
import { NavLink } from "react-router-dom"
import { useDarkMode } from "../hooks/useDarkMode"

const linkBase =
  "transition-colors hover:text-blue-500"

const linkActive =
  "text-blue-500"

export default function Header() {
  const { isDark, toggle } = useDarkMode()

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Nombre */}
        <span className="font-bold text-slate-900 dark:text-slate-100">
          Juan Quiroz
        </span>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Contacto
            </NavLink>
          </li>

          {/* Toggle Dark Mode */}
          <li>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="ml-2 rounded-md border border-slate-300 dark:border-slate-600 px-2 py-1 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

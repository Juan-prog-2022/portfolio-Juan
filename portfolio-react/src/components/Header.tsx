import { NavLink } from "react-router-dom"

const linkClass =
  "hover:text-blue-400 transition-colors"

const activeClass =
  "text-blue-400"

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-lg">Juan Quiroz</span>

        <ul className="flex gap-6 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

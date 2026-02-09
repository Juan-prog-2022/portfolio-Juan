export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-lg">Juan Quiroz</span>
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Proyectos</li>
          <li className="hover:text-blue-400 cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </header>
  )
}

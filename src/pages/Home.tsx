export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl text-center">
        
        {/* 👋 Nombre */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Juan Quiroz
        </h1>

        {/* 💼 Rol */}
        <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
          Full Stack Developer
        </h2>

        {/* 🧠 Descripción */}
        <p className="text-slate-300 text-base md:text-lg mb-8">
          Desarrollo aplicaciones web modernas utilizando React, Node.js y
          Spring Boot. Me enfoco en crear soluciones escalables, limpias y con
          buena experiencia de usuario.
        </p>

        {/* 🚀 CTA */}
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border border-slate-700 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
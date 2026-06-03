export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl text-center">

        {/* 👋 Nombre */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Juan Quiroz
        </h1>

        {/* 💼 Rol */}
        <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
          Java Backend Developer
        </h2>

        {/* 🧠 Descripción */}
        <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          Desarrollador orientado al backend especializado en Java y Spring Boot.
          Construyo APIs REST seguras y escalables utilizando Spring Security,
          JWT, MySQL, PostgreSQL y Docker.
          <br />
          <br />
          También cuento con experiencia en React y desarrollo full stack para
          integrar soluciones completas.
        </p>

        {/* 🛠️ Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'MySQL',
            'PostgreSQL',
            'Docker',
            'React',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </a>

          <a
            href="/CV_Juan_Quiroz_Backend_2026.pdf"
            download
            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}
export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Foto */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Juan Quiroz"
            className="w-72 h-72 rounded-3xl object-cover border border-slate-800 shadow-xl"
          />
        </div>

        {/* Contenido */}
        <div>

          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
            About Me
          </span>

          <h2 className="text-4xl font-bold text-white mt-3 mb-8">
            Backend Developer especializado en Java y Spring Boot
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Soy desarrollador orientado al backend enfocado en la creación de
              APIs REST escalables, seguras y bien estructuradas utilizando Java y
              Spring Boot.
            </p>

            <p>
              Trabajo principalmente con Spring Security, JWT, PostgreSQL,
              MySQL y Docker, aplicando buenas prácticas y arquitectura limpia.
            </p>

            <p>
              También cuento con experiencia en React y desarrollo full stack,
              permitiéndome construir soluciones completas de extremo a extremo.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {[
              "REST APIs",
              "Spring Security",
              "Docker",
              "Microservices",
              "PostgreSQL",
              "Clean Architecture",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
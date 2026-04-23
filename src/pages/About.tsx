export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 ABOUT */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Sobre mí
          </h2>

          <p className="text-slate-300 mb-4">
            Soy desarrollador Full Stack enfocado en la creación de aplicaciones web
            modernas, escalables y bien estructuradas. Trabajo principalmente con
            React en el frontend y Spring Boot o Node.js en el backend.
          </p>

          <p className="text-slate-300 mb-4">
            Me interesa escribir código limpio, aplicar buenas prácticas y diseñar
            APIs robustas. Disfruto resolver problemas complejos y transformar ideas
            en productos funcionales.
          </p>

          <p className="text-slate-300">
            Actualmente estoy enfocado en mejorar mis habilidades en arquitectura
            de software y desarrollo de sistemas distribuidos.
          </p>
        </div>

        {/* 🛠️ SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Tecnologías
          </h3>

          <div className="grid grid-cols-2 gap-6">
            
            {/* Frontend */}
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h4 className="font-medium text-blue-400 mb-2">
                Frontend
              </h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h4 className="font-medium text-blue-400 mb-2">
                Backend
              </h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h4 className="font-medium text-blue-400 mb-2">
                Base de Datos
              </h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h4 className="font-medium text-blue-400 mb-2">
                Herramientas
              </h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>Linux</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
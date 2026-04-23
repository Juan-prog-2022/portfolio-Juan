import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 🧠 Título */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Proyectos
        </h2>

        <p className="text-slate-300 mb-12 max-w-2xl">
          Algunos de los proyectos en los que he trabajado, aplicando diferentes tecnologías y buenas prácticas de desarrollo.
        </p>

        {/* ⭐ Featured */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Proyectos destacados
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {featured.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* 📦 Otros proyectos */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">
            Otros proyectos
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
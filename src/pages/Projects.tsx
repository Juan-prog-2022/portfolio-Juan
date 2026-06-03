import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
            Portfolio
          </span>

          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Proyectos desarrollados utilizando Java, Spring Boot,
            React, Node.js y arquitecturas modernas orientadas a la
            construcción de APIs REST y aplicaciones escalables.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              {projects.length}
            </p>
            <p className="text-slate-400 text-sm">
              Projects
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              Java
            </p>
            <p className="text-slate-400 text-sm">
              Main Stack
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              REST
            </p>
            <p className="text-slate-400 text-sm">
              APIs
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              Docker
            </p>
            <p className="text-slate-400 text-sm">
              Deployment
            </p>
          </div>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        )}

        {/* Others */}
        {others.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Additional Projects
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
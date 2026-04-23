import { motion } from "framer-motion"
import type { Project } from "../data/projects"


interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-sm hover:shadow-xl transition-all"
    >
      {/* 🖼️ Imagen */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* ⭐ Featured */}
        {project.featured && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-md">
            ⭐ Destacado
          </span>
        )}
      </div>

      {/* 📦 Contenido */}
      <div className="p-5 flex flex-col h-full">

        <div>
          <h3 className="text-lg font-bold mb-2 text-white">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* 🛠️ Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ⚠️ Nota */}
          {project.notes && (
            <p className="text-xs text-yellow-400 mb-3">
              ⚠️ {project.notes}
            </p>
          )}

          {/* 🔐 Credenciales */}
          {project.credentials && (
            <div className="text-xs bg-slate-800 p-2 rounded mb-3 text-slate-300">
              <p className="font-semibold text-white">Demo:</p>
              <p>Email: {project.credentials.email}</p>
              <p>Password: {project.credentials.password}</p>
            </div>
          )}
        </div>

        {/* 🔗 Botones */}
        <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-800 pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 hover:shadow-md"
            >
              DEMO
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 hover:shadow-md"
            >
              CÓDIGO
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
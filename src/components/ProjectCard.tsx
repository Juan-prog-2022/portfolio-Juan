import { motion } from "framer-motion"
import type { Project } from "../data/projects"

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

import {
  SiSwagger,
} from "react-icons/si"

interface Props {
  project: Project
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.article
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        h-full
        rounded-2xl
        overflow-hidden
        border
        border-slate-800
        bg-slate-900/80
        backdrop-blur
        hover:border-blue-500/40
        transition-all
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden border-b border-slate-800">
        <img
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "
        />

        {project.featured && (
          <span
            className="
              absolute
              top-3
              left-3
              bg-blue-600
              text-white
              text-xs
              font-medium
              px-3
              py-1
              rounded-full
              shadow
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">

        {/* Category */}
        <span
          className="
            text-xs
            uppercase
            tracking-widest
            text-blue-400
            font-medium
            mb-3
          "
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies
            .slice(0, 6)
            .map((tech) => (
              <span
                key={tech}
                className="
                  text-xs
                  border
                  border-slate-700
                  bg-slate-800/80
                  text-slate-300
                  px-3
                  py-1
                  rounded-full
                "
              >
                {tech}
              </span>
            ))}

          {project.technologies.length > 6 && (
            <span
              className="
                text-xs
                border
                border-slate-700
                bg-slate-800
                text-slate-400
                px-3
                py-1
                rounded-full
              "
            >
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* Notes */}
        {project.notes && (
          <div
            className="
              mb-5
              rounded-lg
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-3
              py-2
            "
          >
            <p className="text-xs text-yellow-300">
              {project.notes}
            </p>
          </div>
        )}

        {/* Credentials */}
        {project.credentials && (
          <div
            className="
              mb-5
              rounded-lg
              border
              border-slate-700
              bg-slate-800/70
              p-3
            "
          >
            <p className="text-xs font-semibold text-white mb-2">
              Demo Credentials
            </p>

            <div className="space-y-1 text-xs text-slate-300">
              <p>
                <span className="text-slate-500">
                  Email:
                </span>{" "}
                {project.credentials.email}
              </p>

              <p>
                <span className="text-slate-500">
                  Password:
                </span>{" "}
                {project.credentials.password}
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto pt-5 border-t border-slate-800 flex flex-wrap gap-3">

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
              "
            >
              <FaExternalLinkAlt size={13} />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-slate-700
                hover:border-slate-500
                px-4
                py-2
                text-sm
                font-medium
                text-slate-300
                hover:text-white
                transition
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.swagger && (
            <a
              href={project.swagger}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-emerald-700
                hover:border-emerald-500
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-300
                transition
              "
            >
              <SiSwagger />
              Swagger
            </a>
          )}

        </div>
      </div>
    </motion.article>
  )
}
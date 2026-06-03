import {
  FaJava,
  FaReact,
  FaDocker,
  FaDatabase,
} from "react-icons/fa"

const skillGroups = [
  {
    title: "Backend",
    icon: <FaJava size={24} />,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA / Hibernate",
      "REST APIs",
    ],
  },

  {
    title: "Databases",
    icon: <FaDatabase size={24} />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
    ],
  },

  {
    title: "DevOps & Tools",
    icon: <FaDocker size={24} />,
    skills: [
      "Docker",
      "Git & GitHub",
      "Linux",
      "Postman",
      "Swagger",
    ],
  },

  {
    title: "Frontend",
    icon: <FaReact size={24} />,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
            Skills & Technologies
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            Tecnologías principales
          </h2>
        </div>

        {/* Primary Stack */}
        <div className="flex justify-center mb-14">
          <div className="bg-slate-900 border border-blue-500/20 rounded-2xl px-6 py-5 max-w-xl w-full text-center">
            <h3 className="text-white font-semibold mb-2">
              ☕ Primary Stack
            </h3>

            <p className="text-slate-300">
              Java • Spring Boot • Spring Security • PostgreSQL • Docker
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                bg-slate-900/80
                p-6
                rounded-2xl
                border
                border-slate-800
                hover:border-blue-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3 mb-5 text-blue-400">
                {group.icon}

                <h3 className="text-xl font-semibold">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      text-sm
                      border
                      border-slate-700
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Learning */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Actualmente aprendiendo
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Spring Cloud",
              "Microservices",
              "Distributed Systems",
              "Clean Architecture",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-300
                  text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
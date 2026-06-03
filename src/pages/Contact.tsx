import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-10 shadow-xl shadow-slate-900/20">

          {/* Header */}
          <div className="text-center mb-10">

            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
              Contact
            </span>

            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              Trabajemos juntos
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Actualmente estoy abierto a oportunidades como
              <span className="text-white font-medium">
                {" "}Java Backend Developer
              </span>.
              <br />
              Si buscás alguien para desarrollar APIs REST,
              aplicaciones Spring Boot o soluciones full stack,
              estaré encantado de conversar.
            </p>

            <a
              href="mailto:quirozjuan497@gmail.com"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <FaEnvelope />
              Enviar Email
            </a>

          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-3">

            <a
              href="mailto:quirozjuan497@gmail.com"
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-5
                transition
                hover:border-blue-500
                hover:-translate-y-1
              "
            >
              <FaEnvelope
                className="text-blue-400 mb-4"
                size={22}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Email
              </p>

              <p className="mt-3 text-sm font-medium text-slate-100 break-all">
                quirozjuan497@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Juan-prog-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-5
                transition
                hover:border-blue-500
                hover:-translate-y-1
              "
            >
              <FaGithub
                className="text-blue-400 mb-4"
                size={22}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                GitHub
              </p>

              <p className="mt-3 text-sm font-medium text-slate-100">
                /Juan-prog-2022
              </p>
            </a>

            <a
              href="https://linkedin.com/in/juan-quiroz-programador"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-5
                transition
                hover:border-blue-500
                hover:-translate-y-1
              "
            >
              <FaLinkedin
                className="text-blue-400 mb-4"
                size={22}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                LinkedIn
              </p>

              <p className="mt-3 text-sm font-medium text-slate-100">
                /juan-quiroz-programador
              </p>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
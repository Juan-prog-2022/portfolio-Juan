export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-10 shadow-xl shadow-slate-900/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trabajemos juntos
            </h2>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades como desarrollador Full Stack.
            Si tenés un proyecto o propuesta, no dudes en contactarme.
          </p>

          <a
            href="mailto:quirozjuan497@gmail.com"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            📩 Enviar email
          </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:quirozjuan497@gmail.com"
              className="group rounded-3xl border border-slate-800 bg-slate-950 p-5 text-left transition hover:border-blue-500"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Email
              </p>
              <p className="mt-3 text-sm font-medium text-slate-100">
                quirozjuan497@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Juan-prog-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-950 p-5 text-left transition hover:border-blue-500"
            >
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
              className="group rounded-3xl border border-slate-800 bg-slate-950 p-5 text-left transition hover:border-blue-500"
            >
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
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <p className="text-white font-medium">
              Juan Quiroz
            </p>

            <p className="text-sm text-slate-400">
              Java Backend Developer
            </p>
          </div>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Juan-prog-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/juan-quiroz-programador"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>

          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Juan Quiroz · Java Backend Developer
        </div>

      </div>

    </footer>
  )
}
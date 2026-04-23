export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Juan Quiroz · Full Stack Developer
      </div>
    </footer>
  )
}
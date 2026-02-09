import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-20 text-center"
    >
      <h1 className="text-5xl font-extrabold mb-6">
        Full Stack Developer
      </h1>

      <p className="text-slate-600 max-w-2xl mx-auto">
        Desarrollo aplicaciones web modernas con React, Node.js y Java.
      </p>
    </motion.section>
  )
}

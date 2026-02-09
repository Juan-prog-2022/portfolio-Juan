export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Market Products",
    description:
      "Aplicación full stack para gestión de productos con autenticación y API REST.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/tu-usuario/market-products",
    demo: "https://market-products.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio Web",
    description:
      "Portafolio personal desarrollado con React, Vite y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/tu-usuario/portfolio-react",
  },
]

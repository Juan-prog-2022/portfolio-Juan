export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]

  github: string
  demo?: string

  image?: string // screenshot del proyecto
  featured?: boolean // para destacar proyectos importantes

  credentials?: {
    email: string
    password: string
  }

  notes?: string // ej: "Puede tardar en iniciar (free tier)"
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
    image: "/screenshots/market-products.jpg",
    featured: true,
    notes: "El backend puede tardar unos segundos en iniciar (free tier).",
  },
  {
    id: 2,
    title: "UpTask",
    description:
      "Aplicación de gestión de tareas con autenticación para organizar proyectos y tareas.",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/tu-usuario/up-task",
    demo: "https://up-task.vercel.app",
    image: "/screenshots/uptask.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "City Connect Pro",
    description:
      "Plataforma para conectar ciudadanos con profesionales y servicios locales, con autenticación y roles.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
    ],
    github: "https://github.com/tu-usuario/city-connect-pro",
    demo: "https://city-connect-pro.vercel.app",
    image: "/screenshots/city-connect-pro.jpg",
    featured: true,
    notes: "El backend puede tardar en iniciar (free tier).",
  },
  {
    id: 4,
    title: "PetShop - Doguito",
    description:
      "Sistema para gestión de productos y servicios de una veterinaria con autenticación y API REST.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
    ],
    github: "https://github.com/tu-usuario/petshop-doguito",
    demo: "https://petshop-doguito.vercel.app",
    image: "/screenshots/petshop-doguito.jpg",
    notes: "El backend puede tardar unos segundos en iniciar (free tier).",
  },
]
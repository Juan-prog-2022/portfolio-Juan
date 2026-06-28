export interface Project {
  id: number;
  category: string;

  title: string;
  description: string;

  technologies: string[];

  github: string;
  demo?: string;
  swagger?: string;

  image?: string;
  featured?: boolean;

  credentials?: {
    email: string;
    password: string;
  };

  notes?: string;
}

export const projects: Project[] = [
  // =====================================
  // 🚀 FEATURED PROJECTS
  // =====================================

  {
    id: 1,
    category: "Full Stack",

    title: "City Connect Pro",

    description:
      "Plataforma full stack para conectar ciudadanos con profesionales y servicios locales. Implementa autenticación JWT, autorización basada en roles, gestión de servicios y arquitectura escalable utilizando Spring Boot y React.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],

    github: "https://github.com/Juan-prog-2022/city-connect-pro",

    demo: "https://city-connect-pro.vercel.app",

    swagger: "https://city-connect-pro-api.onrender.com/swagger-ui/index.html",

    image: "/screenshots/city-connect-pro.png",

    featured: true,

    notes:
      "Proyecto principal del portfolio. Backend desplegado con Spring Boot y frontend desarrollado con React.",
  },

  {
    id: 2,
    category: "Full Stack",

    title: "PetCare System",

    description:
      "Sistema de gestión para veterinarias que permite administrar productos, servicios, clientes y turnos mediante una arquitectura full stack con Spring Boot y React.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
      "JPA",
      "Hibernate",
    ],

    github: "https://github.com/Juan-prog-2022/pet-care-system-front",

    demo: "https://pet-care-system-front.vercel.app",

    swagger: "https://pet-care-system-api.onrender.com/swagger-ui/index.html",

    image: "/screenshots/pet-care-system.jpg",

    featured: true,

    notes:
      "Incluye autenticación, persistencia de datos y arquitectura cliente-servidor.",
  },

  {
    id: 3,
    category: "Backend",

    title: "Microservices Platform",

    description:
      "Arquitectura basada en microservicios utilizando Spring Cloud. Incluye API Gateway, Config Server, Service Discovery y comunicación entre servicios para aplicaciones distribuidas.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "API Gateway",
      "Config Server",
      "PostgreSQL",
      "Docker",
    ],

    github: "https://github.com/Juan-prog-2022/microservices-platform",

    swagger:
      "https://microservices-platform.onrender.com/swagger-ui/index.html",

    image: "/screenshots/microservices-platform.jpg",

    featured: true,

    notes: "Proyecto orientado a arquitectura backend y sistemas distribuidos.",
  },

  {
    id: 4,
    category: "PERN Stack",

    title: "InventoryHub",

    description:
      "Sistema de gestión de inventario y productos desarrollado con PostgreSQL, Express, React y Node.js. Permite administrar stock, categorías y operaciones CRUD completas.",

    technologies: [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "JWT",
    ],

    github: "https://github.com/Juan-prog-2022/inventoryhub",

    demo: "https://inventoryhub.vercel.app",

    image: "/screenshots/inventoryhub.jpg",

    featured: true,
  },

  // =====================================
  // 🎨 ADDITIONAL PROJECTS
  // =====================================

  {
    id: 5,
    category: "MERN Stack",

    title: "UpTask",

    description:
      "Aplicación full stack para gestión de tareas y proyectos. Permite autenticación de usuarios, administración de proyectos colaborativos y seguimiento de tareas mediante una arquitectura MERN.",

    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "JWT",
      "Tailwind CSS",
    ],

    github: "https://github.com/Juan-prog-2022/uptask",

    demo: "https://uptask.vercel.app",

    image: "/screenshots/uptask.jpg",
  },

  {
    id: 6,
    category: "PERN Stack",

    title: "Buscador de Bebidas con IA",

    description:
      "App Full Stack con Stack PERN para bares y restaurantes que permite buscar y gestionar bebidas utilizando inteligencia artificial. Cuenta con autenticación JWT, base de datos PostgreSQL con Sequelize y una interfaz moderna con React y Tailwind CSS.",

    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Sequelize",
      "Zustand",
      "React Hook Form",
    ],

    github: "https://github.com/Juan-prog-2022/buscador-de-bebidas-con-IA",

    demo: "https://buscador-de-bebidas-con-ia.vercel.app",

    image: "/screenshots/sabores-con-IA.png",
  },
];

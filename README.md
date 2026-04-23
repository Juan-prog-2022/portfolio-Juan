# Portfolio Juan Quiroz

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS. Diseño responsive mobile-first con menú hamburguesa.

## 🚀 Características

- **Responsive Design**: Mobile-first con menú hamburguesa
- **Modern UI**: Tailwind CSS con tema oscuro
- **TypeScript**: Tipado completo para mejor desarrollo
- **Vite**: Build rápido y optimizado
- **Framer Motion**: Animaciones suaves

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header.tsx      # Navegación con menú hamburguesa
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── data/
│   └── projects.ts     # Datos de proyectos con screenshots
├── layouts/
│   └── MyLayout.tsx
└── pages/
    ├── Home.tsx
    ├── About.tsx
    ├── Projects.tsx
    └── Contact.tsx

public/
├── profile.jpg         # Foto de perfil para el header
└── screenshots/        # Imágenes de proyectos
    ├── market-products.jpg
    ├── uptask.jpg
    ├── city-connect-pro.jpg
    └── petshop-doguito.jpg
```

## 🛠️ Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (menú hamburguesa)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (menú horizontal completo)

## 🎨 Personalización

### Imágenes
- **Foto de perfil**: `public/profile.jpg` (recomendado: 200x200px)
- **Screenshots de proyectos**: `public/screenshots/[nombre-proyecto].jpg`

### Colores del tema
El proyecto usa un tema oscuro con azul como color primario. Modifica las clases Tailwind en los componentes para cambiar colores.

### Proyectos
Edita `src/data/projects.ts` para agregar, modificar o eliminar proyectos.
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Portafolio de Charles

Portafolio profesional desarrollado con React y Tailwind CSS. Una Single Page Application (SPA) moderna y responsiva que muestra proyectos, habilidades y experiencia.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia con tipografía monospace y esquema de colores profesional
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Estudios de Caso**: Modales detallados para cada proyecto
- **Secciones Completas**: Inicio, Sobre mí, Servicios, Proyectos y Contacto

## 🛠️ Tecnologías

- React 18
- Vite
- Tailwind CSS
- JavaScript (ES6+)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
charles-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Modal.jsx
│   ├── data/
│   │   └── projectsData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar el esquema de colores:
```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  dark: '#0f172a',
  light: '#f1f5f9',
}
```

### Proyectos
Modifica `src/data/projectsData.js` para agregar o editar proyectos.

### Información Personal
Actualiza los componentes en `src/components/` con tu información.

## 🌐 Despliegue

Este proyecto está listo para ser desplegado en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático

## 📝 Licencia

MIT License - Siéntete libre de usar este portafolio como base para el tuyo.

## 👤 Autor

**Charles**
- Portfolio: [tu-sitio.com](#)
- GitHub: [@charles](#)
- LinkedIn: [Charles](#)

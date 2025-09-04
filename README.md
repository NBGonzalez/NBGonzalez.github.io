# CV Personal - Estudiante de Desarrollo de Videojuegos

Este es un CV personal creado con Next.js, diseñado especialmente para estudiantes de desarrollo de videojuegos con un tema gaming moderno.

## 🚀 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   git add .
   git commit -m "Add CV website"
   git push origin main
   ```

2. **Habilita GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "GitHub Actions"
   - El workflow se ejecutará automáticamente en cada push

### Opción 2: Despliegue Manual

1. **Genera los archivos estáticos:**
   ```bash
   npm run build
   ```

2. **Sube el contenido de la carpeta `out/` a la rama `gh-pages`**

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar archivos estáticos para producción
npm run build
```

## 📁 Estructura del Proyecto

- `app/page.tsx` - Archivo principal del CV
- `components/cv-*.tsx` - Componentes de cada sección
- `components/floating-nav.tsx` - Navegación flotante
- `app/globals.css` - Estilos globales
- `tailwind.config.ts` - Configuración de Tailwind

## 🎨 Personalización

Para personalizar tu CV, edita los archivos en la carpeta `components/` con tu información personal:

- **cv-hero.tsx**: Nombre, título y descripción principal
- **cv-about.tsx**: Información personal y biografía
- **cv-skills.tsx**: Habilidades técnicas y herramientas
- **cv-projects.tsx**: Proyectos y trabajos realizados
- **cv-education.tsx**: Formación académica
- **cv-contact.tsx**: Información de contacto

## 📱 Características

- ✅ Diseño responsive (móvil y desktop)
- ✅ Navegación smooth scroll
- ✅ Tema gaming moderno
- ✅ Animaciones con Framer Motion
- ✅ Optimizado para GitHub Pages
- ✅ TypeScript para mejor mantenibilidad
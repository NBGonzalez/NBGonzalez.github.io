// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Vacío para repositorio usuario.github.io
  assetPrefix: '', // Vacío para repositorio usuario.github.io
  trailingSlash: true, // Recomendado para GitHub Pages
  // El resto de tu configuración actual...
};
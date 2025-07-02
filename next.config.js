/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  output: 'export',
  // Configura esto con el nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/NBGonzalez.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NBGonzalez.github.io/' : '',
};

module.exports = nextConfig;
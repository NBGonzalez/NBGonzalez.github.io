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
  // No devIndicators ni allowedDevOrigins para evitar errores
  // assetPrefix y basePath vacíos para evitar error con next/font
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;

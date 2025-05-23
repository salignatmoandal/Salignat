/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactive ESLint pendant le build de production
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionnel : désactive aussi TypeScript strict checking
    ignoreBuildErrors: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;

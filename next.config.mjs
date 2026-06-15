/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
};

export default nextConfig;

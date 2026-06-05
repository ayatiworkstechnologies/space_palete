/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;

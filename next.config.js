/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/vku',
        destination: '/vku',
      },
    ]
  },
}

module.exports = nextConfig 
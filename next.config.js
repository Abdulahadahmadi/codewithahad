/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    domains: ['media.licdn.com', 'media.istockphoto.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      }
    ]
  }
}

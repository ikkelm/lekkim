// next.config.js
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ← Add this:
  output: 'export',
  
  /* your existing options */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

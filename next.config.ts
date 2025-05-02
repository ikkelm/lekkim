// next.config.js
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 1. Force static export
  output: 'export',

  // 2. Emit folders (out/foo/index.html) instead of flat files (out/foo.html)
  trailingSlash: true,

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

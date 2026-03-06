import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/products/harness-ai/agents',
  assetPrefix: '/products/harness-ai/agents',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

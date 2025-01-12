/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off strict mode
  reactStrictMode: false,
  // Automatically bundle external packages in the Pages Router
  bundlePagesRouterDependencies: true,
  experimental: {    
    // Add the react compiler for better performance
    reactCompiler: true,  
  },
}

// eslint-disable-next-line
const withBundleAnalyzer = require('@next/bundle-analyzer')()

module.exports =
  process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig

module.exports = nextConfig

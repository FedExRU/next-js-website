/** @type {import('next').NextConfig} */
const nextConfig = {
  // Automatically bundle external packages in the Pages Router
  bundlePagesRouterDependencies: true,
  reactCompiler: true,
  // Turn off strict mode
  reactStrictMode: false,
  serverExternalPackages: ['knex'],
}

// eslint-disable-next-line
const withBundleAnalyzer = require('@next/bundle-analyzer')()

module.exports =
  process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig

module.exports = nextConfig

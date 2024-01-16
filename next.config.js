/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['e24bollywood.com'],
      },
      experimental: {
        nextScriptWorkers: true,
      },
}


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)

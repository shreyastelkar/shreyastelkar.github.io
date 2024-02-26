/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'production'
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/shreyast.github.io':'',
  images: {
    unoptimized: true
  }
}
export default nextConfig;
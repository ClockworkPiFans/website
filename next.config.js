/** @type {import('next').NextConfig} */

const repo = 'website'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: assetPrefix,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig

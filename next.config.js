/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["pages", "utils", "components"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "Scss")],
  },
}

module.exports = nextConfig

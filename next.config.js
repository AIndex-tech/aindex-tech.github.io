/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true, // Necessary because GitHub Pages doesn't support image optimization
  },
};

module.exports = nextConfig;

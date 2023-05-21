/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/image-loader.ts",
  },
};

module.exports = nextConfig;

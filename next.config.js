/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.myanimelist.net", "i.imgur.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

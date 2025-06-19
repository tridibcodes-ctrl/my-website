const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: 'export',
  basePath: '/my-website',
  assetPrefix: '/my-website/',
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/pages/api/:path*',
          },
        ];
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev',
          },
        ],
      },
}

module.exports = nextConfig

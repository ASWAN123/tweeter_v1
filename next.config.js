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
}

module.exports = nextConfig

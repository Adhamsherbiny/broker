/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'http://localhost.com',
            port: '',
            pathname: '../frontend/public/**',
          },
        ],
      },
};
// module.exports = nextConfig

export default nextConfig;

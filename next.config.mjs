/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: 'https://zsvp-backend.onrender.com',
    // baseUrl: 'http://127.0.0.1:1337',
    baseUrlApi: 'https://zsvp-backend.onrender.com/api',
    // baseUrlApi: 'http://127.0.0.1:1337/api',
    baseUrlUploads: 'https://zsvp-backend.onrender.com/uploads'
    // baseUrlUploads: 'http://127.0.0.1:1337/uploads'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'zsvp-backend.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  // output: 'export'
  staticPageGenerationTimeout: 120, // 
};

export default nextConfig;

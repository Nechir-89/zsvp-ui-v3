/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // baseUrl: 'https://zsvp-backend.onrender.com',
    baseUrl: 'https://cp.zsvp.org',
    // baseUrl: 'http://127.0.0.1:1337',
    // baseUrlApi: 'https://zsvp-backend.onrender.com/api',
    baseUrlApi: 'https://cp.zsvp.org/api',
    // baseUrlApi: 'http://127.0.0.1:1337/api',
    // baseUrlUploads: 'https://zsvp-backend.onrender.com/uploads',
    baseUrlUploads: 'https://cp.zsvp.org/uploads',
    // baseUrlUploads: 'http://127.0.0.1:1337/uploads'
    // wpBaseUri: 'https://admin.zsvp.org/wp-json/wp/v2',
    // wpBaseUri: 'https://admin.zsvp.org/wp-json/wp/v2',

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
        // hostname: 'zsvp-backend.onrender.com',
        hostname: 'cp.zsvp.org',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  // output: 'export'
  staticPageGenerationTimeout: 120, // 
};

export default nextConfig;

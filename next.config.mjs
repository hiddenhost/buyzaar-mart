/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/delhi-ncr/:path*',
        destination: '/delhi/:path*',
        permanent: true,
      },
      {
        source: '/noida/:path*',
        destination: '/cities/noida/:path*',
        permanent: true,
      },
      {
        source: '/noida',
        destination: '/cities/noida',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

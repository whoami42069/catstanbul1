/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },
    transpilePackages: ['react-leaflet', '@react-leaflet/core'],
    experimental: {
        esmExternals: 'loose'
    }
};

module.exports = nextConfig; 
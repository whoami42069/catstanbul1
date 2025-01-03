/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: '/istanbul-guide',
                destination: '/',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig 
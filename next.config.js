/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'sun9-6.userapi.com'
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig

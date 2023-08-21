/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'content-prod-live.cert.starbucks.com',
            },
        ],
    },
}

module.exports = nextConfig

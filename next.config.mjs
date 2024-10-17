/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images-assets.nasa.gov',
            port: '',
            pathname: '/image/**'
        },
        {
            protocol: 'https',
            hostname: 'images-assets.nasa.gov',
            port: '',
            pathname: '/video/**'
        }
    ]
    }
};

export default nextConfig;

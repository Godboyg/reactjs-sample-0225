/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://taskboardbackend.onrender.com/:path*",
            },
        ];
    }
};

export default nextConfig;

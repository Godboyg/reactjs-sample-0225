/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://taskboardbackend.onrender.com/:path*",
            },
        ];
    }
};

export default nextConfig;

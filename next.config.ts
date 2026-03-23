import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@tabler/icons-react", "react-icons"],
  },
  output: 'export',
  // Prevent server-side evaluation of Three.js related modules
  serverComponentsExternalPackages: [
    '@react-three/fiber',
    '@react-three/postprocessing',
    'three',
    'postprocessing'
  ],
  // Redirects for maintenance page
  async redirects() {
    return [
      {
        source: '/launch-app',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/ai',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/app',
        destination: '/maintenance',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

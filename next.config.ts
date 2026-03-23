import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@tabler/icons-react", "react-icons"],
  },
  /** Required for `output: 'export'` — Image Optimization API is not available on static hosts. */
  images: {
    unoptimized: true,
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Every client component on the home page pulls from `motion` and most pull
  // an icon or two from `lucide-react`. Left alone, a bare import of either
  // drags the whole barrel file into the client bundle; this rewrites them to
  // the individual modules actually used, which is worth a few hundred
  // kilobytes of parse and execute time on the first load.
  experimental: {
    optimizePackageImports: ["motion", "motion/react", "lucide-react"],
  },
};

export default nextConfig;

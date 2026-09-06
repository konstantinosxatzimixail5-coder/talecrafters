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
  // The Armoury became the Supply Drop. The name was the point of the change,
  // but the old URLs are in sitemaps, in IndexNow submissions and in whatever
  // links out there already point at them, so they 301 rather than 404. Keep
  // these: a permanent redirect that later disappears is a 404 with a delay.
  async redirects() {
    return [
      { source: "/armoury", destination: "/supply-drop", permanent: true },
      { source: "/armoury/:slug*", destination: "/supply-drop/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;

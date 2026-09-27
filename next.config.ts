import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a single page now; keep old links and search results working.
  async redirects() {
    return ["/about", "/projects", "/projects/:path*", "/snake"].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;

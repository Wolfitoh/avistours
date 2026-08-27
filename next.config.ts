import type { NextConfig } from "next";

// Avoid shipping Next's feature-detected legacy shim in modern browser bundles.
const emptyPolyfillModule = "./utils/empty-polyfill.js";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": { browser: emptyPolyfillModule },
      "../build/polyfills/polyfill-module.js": { browser: emptyPolyfillModule },
      "next/dist/build/polyfills/polyfill-module": { browser: emptyPolyfillModule },
      "next/dist/build/polyfills/polyfill-module.js": { browser: emptyPolyfillModule },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/inicio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/operador-turistico",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

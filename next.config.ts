import type { NextConfig } from "next";
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default nextConfig;

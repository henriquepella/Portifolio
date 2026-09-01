import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 *
 * `unsafe-inline` on script-src is required by next-themes (it injects a
 * blocking inline script to avoid a flash of the wrong theme) and by the
 * JSON-LD blocks in `app/layout.tsx`. Everything else is locked to `self`
 * plus the handful of third parties the page actually talks to:
 *
 *   - formsubmit.co ............. contact form (AJAX POST)
 *   - api.github.com ............ profile/language stats
 *   - jogruber.de ............... contribution calendar data
 *   - github-readme-stats ....... externally rendered SVG widgets
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://formsubmit.co",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://github-readme-stats.vercel.app https://avatars.githubusercontent.com",
  "font-src 'self' data:",
  "connect-src 'self' https://formsubmit.co https://api.github.com https://github-contributions-api.jogruber.de",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,

  // Strip EXIF/GPS from optimized images and prefer modern formats.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

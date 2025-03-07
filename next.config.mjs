const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "startup-template-sage.vercel.app",
        pathname: "/**",
      },
    ],
    domains: ["admin139255a85d.wpcomstaging.com"],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,

  // Add security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://admin139255a85d.wpcomstaging.com https://*.vercel.app; frame-src 'self'",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/multifamily-investors",
        destination: "/pages/products/InvestAssist",
        permanent: true,
      },
      {
        source: "/cre-software-providers",
        destination: "/pages/products/SmartExtract",
        permanent: true,
      },
      {
        source: "/lenders-banks",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/asset-managers",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/multifamily-underwriting",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/rent-roll-analysis",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/lease-abstraction",
        destination:
          "/pages/services/Lease&DataAdministration/Abstraction&Audit",
        permanent: true,
      },
      {
        source: "/financial-statement-analysis",
        destination: "/pages/services/LoanOrigination/underwritingDDS",
        permanent: true,
      },
      {
        source: "/mortgage-servicing",
        destination:
          "/pages/services/Lease&DataAdministration/LoanOnboarding&DataDigitization",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/pages/why-clik-ai",
        permanent: true,
      },
      {
        source: "/due-diligence",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/commercial-loan-underwriting",
        destination: "/pages/services/LoanOrigination/underwritingDDS",
        permanent: true,
      },
      {
        source: "/multi-family-loans",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/pages/privacy-policy",
        permanent: true,
      },
      {
        source: "/clik-for-asset-managers-agent",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/software-for-cre-traders",
        destination: "/pages/products/SmartExtract",
        permanent: true,
      },
      {
        source: "/software-for-multifamily-players",
        destination: "/pages/products/InvestAssist",
        permanent: true,
      },
      {
        source: "/clik-for-real-estate-professionals",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/clik-for-multifamily-players-and-bankers",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/clik-for-real-estate-buying-or-selling",
        destination: "/pages/products/InvestAssist",
        permanent: true,
      },
      {
        source: "/automated-underwriting",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/os-rr-analyser",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/career/analytics-engineer",
        destination: "/pages/about-us",
        permanent: true,
      },
      {
        source: "/career/business-development-representative",
        destination: "/pages/about-us",
        permanent: true,
      },
      {
        source: "/career/director-of-sales",
        destination: "/pages/about-us",
        permanent: true,
      },
      {
        source: "/career/product-designer",
        destination: "/pages/about-us",
        permanent: true,
      },
      {
        source: "/career/product-marketing-lead",
        destination: "/pages/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;

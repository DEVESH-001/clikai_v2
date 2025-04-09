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
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://static.hsappstatic.net https://js.hsforms.net https://js.hs-scripts.com https://js.hs-analytics.net https://www.youtube.com ; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "img-src 'self' data: https: ; " +
              "font-src 'self' data: https://fonts.gstatic.com; " +
              "frame-src 'self' https://share.hsforms.com https://meetings.hubspot.com https://js.hsforms.net http://js.hsforms.net https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://docs.google.com https://drive.google.com https://*.google.com; " +
              "connect-src 'self' https://*.hubspot.com https://*.hubapi.com https://www.youtube.com https://*.google.com;",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
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
        source: "/lenders-banks.html",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/asset-managers",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/all-posts",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-tag/marketing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-tag/technology",
        destination: "/blog",
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
        destination: "/pages/services/DataDigitization/LeaseAbstraction",
        permanent: true,
      },
      {
        source: "/financial-statement-analysis",
        destination: "/pages/services/LoanOrigination/Underwriting",
        permanent: true,
      },
      {
        source: "/financial-statement-analysis.html",
        destination: "/pages/services/LoanOrigination/Underwriting",
        permanent: true,
      },
      {
        source: "/mortgage-servicing",
        destination: "pages/services/DataDigitization/LoanOnboarding",
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
        destination: "/pages/services/LoanOrigination/Underwriting",
        permanent: true,
      },
      {
        source: "/multi-family-loans",
        destination: "/pages/products/autouw",
        permanent: true,
      },
      {
        source: "/multi-family-loans.html",
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
        source: "/automated-underwriting.html",
        destination: "/pages/products/autouw",
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
      {
        source: "/career/product-designer",
        destination: "/pages/about-us",
        permanent: true,
      },
      {
        source: "/mortgage-servicing.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/clik-for-real-estate-buying-or-selling.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signup.html",
        destination: "https://gateway.clik.ai/",
        permanent: true,
      },
      {
        source: "/error-404.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/security.html",
        destination: "/pages/security",
        permanent: true,
      },
      {
        source: "/intro.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/pages/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

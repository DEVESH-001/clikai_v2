// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "startup-template-sage.vercel.app",
//         pathname: "/**",
//       },
//     ],
//     domains: ["admin139255a85d.wpcomstaging.com"],
//   },
//   poweredByHeader: false,
//   compress: true,
//   reactStrictMode: true,
//   swcMinify: true,
  
//   // Add security headers
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'X-DNS-Prefetch-Control',
//             value: 'on'
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block'
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'SAMEORIGIN'
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff'
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin'
//           },
//           {
//             key: 'Permissions-Policy',
//             value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
//           },
//           {
//             key: 'Content-Security-Policy',
//             value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-insights.com https://*.hsforms.net https://*.hsforms.com https://*.hubspot.com https://static.hsappstatic.net https://www.googletagmanager.com https://googletagmanager.com http://www.googletagmanager.com http://googletagmanager.com https://static.hotjar.com https://snap.licdn.com https://s3-us-west-2.amazonaws.com http://js.hs-scripts.com https://js.hs-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://admin139255a85d.wpcomstaging.com https://*.vercel.app https://*.hubspot.com https://*.hsforms.com https://*.hotjar.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com; frame-src 'self' https://*.hubspot.com https://meetings.hubspot.com https://share.hsforms.com https://*.hsforms.com https://www.youtube.com https://player.vimeo.com https://*.hotjar.com"
//           }
//         ]
//       }
//     ]
//   },
  
//   async redirects() {
//     return [
//       {
//         source: "/multifamily-investors",
//         destination: "/pages/products/InvestAssist",
//         permanent: true,
//       },
//       {
//         source: "/cre-software-providers",
//         destination: "/pages/products/SmartExtract",
//         permanent: true,
//       },
//       {
//         source: "/lenders-banks",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/asset-managers",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/multifamily-underwriting",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/rent-roll-analysis",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/lease-abstraction",
//         destination:
//           "/pages/services/Lease&DataAdministration/Abstraction&Audit",
//         permanent: true,
//       },
//       {
//         source: "/financial-statement-analysis",
//         destination: "/pages/services/LoanOrigination/underwritingDDS",
//         permanent: true,
//       },
//       {
//         source: "/mortgage-servicing",
//         destination:
//           "/pages/services/Lease&DataAdministration/LoanOnboarding&DataDigitization",
//         permanent: true,
//       },
//       {
//         source: "/about-us",
//         destination: "/pages/why-clik-ai",
//         permanent: true,
//       },
//       {
//         source: "/due-diligence",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/commercial-loan-underwriting",
//         destination: "/pages/services/LoanOrigination/underwritingDDS",
//         permanent: true,
//       },
//       {
//         source: "/multi-family-loans",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/privacy-policy",
//         destination: "/pages/privacy-policy",
//         permanent: true,
//       },
//       {
//         source: "/clik-for-asset-managers-agent",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/software-for-cre-traders",
//         destination: "/pages/products/SmartExtract",
//         permanent: true,
//       },
//       {
//         source: "/software-for-multifamily-players",
//         destination: "/pages/products/InvestAssist",
//         permanent: true,
//       },
//       {
//         source: "/clik-for-real-estate-professionals",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/clik-for-multifamily-players-and-bankers",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/clik-for-real-estate-buying-or-selling",
//         destination: "/pages/products/InvestAssist",
//         permanent: true,
//       },
//       {
//         source: "/automated-underwriting",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/os-rr-analyser",
//         destination: "/pages/products/autouw",
//         permanent: true,
//       },
//       {
//         source: "/career/analytics-engineer",
//         destination: "/pages/about-us",
//         permanent: true,
//       },
//       {
//         source: "/career/business-development-representative",
//         destination: "/pages/about-us",
//         permanent: true,
//       },
//       {
//         source: "/career/director-of-sales",
//         destination: "/pages/about-us",
//         permanent: true,
//       },
//       {
//         source: "/career/product-designer",
//         destination: "/pages/about-us",
//         permanent: true,
//       },
//       {
//         source: "/career/product-marketing-lead",
//         destination: "/pages/about-us",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;


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
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-insights.com https://*.hsforms.net http://*.hsforms.net https://*.hsforms.com http://*.hsforms.com https://*.hubspot.com https://static.hsappstatic.net https://www.googletagmanager.com https://googletagmanager.com http://www.googletagmanager.com http://googletagmanager.com https://static.hotjar.com https://snap.licdn.com https://s3-us-west-2.amazonaws.com http://js.hs-scripts.com https://js.hs-scripts.com https://js.hs-banner.com https://forms.hsforms.com https://forms-na1.hsforms.com; style-src 'self' 'unsafe-inline' https://*.hsforms.net http://*.hsforms.net https://*.hsforms.com http://*.hsforms.com https://*.hubspot.com; img-src 'self' data: https: blob: http://*.hsforms.net http://*.hsforms.com; font-src 'self' data: https://*.hsforms.net http://*.hsforms.net https://*.hubspot.com; connect-src 'self' https://admin139255a85d.wpcomstaging.com https://*.vercel.app https://*.hubspot.com http://*.hubspot.com https://*.hsforms.com http://*.hsforms.com https://*.hotjar.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com https://forms.hubspot.com https://api.hubapi.com https://forms-na1.hsforms.com; frame-src 'self' https://*.hubspot.com http://*.hubspot.com https://meetings.hubspot.com https://share.hsforms.com https://*.hsforms.com http://*.hsforms.com http://js.hsforms.net https://js.hsforms.net https://www.youtube.com https://player.vimeo.com https://*.hotjar.com https://app.hubspot.com https://forms.hsforms.com https://forms-na1.hsforms.com; child-src blob: https://*.hubspot.com http://*.hubspot.com https://*.hsforms.com http://*.hsforms.com http://js.hsforms.net https://js.hsforms.net"
          }
        ]
      }
    ]
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


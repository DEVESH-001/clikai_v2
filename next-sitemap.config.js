/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://clikai-v2.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // Add any pages you want to exclude
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.clik.ai/server-sitemap.xml", // Your dynamic sitemap
    ],
  },
  // Add any additional configuration options here
};

const siteUrl = process.env.SITE_URL;
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  // 以/admin/*的路由不生成sitemap
  exclude: ['/admin/*', '/auth/*', '/server-sitemap.xml'],
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/admin/*'],
      },
      {
        userAgent: '*',
        disallow: ['/auth/', '/auth/*'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

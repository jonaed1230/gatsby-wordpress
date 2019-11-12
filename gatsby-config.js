module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data form WordPress`,
    subtitle: `Sourcing data from WordPress`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `demo.wp-api.org`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
  ],
}
module.exports = {
  siteMetadata: {
    title: `matei`,
    description: `Software Developer`,
    author: `@Claudiu Matei`,
    siteUrl: `https://www.matei.be`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graveyard`,
        path: `${__dirname}/src/data/`,
        plugins: [
          `gatsby-transformer-json`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#007a80`,
        theme_color: `#007a80`,
        display: `minimal-ui`,
        icon: `src/images/m.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`,`500`, `600`, `900`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: "dddd D MMMM YYYY", // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        locale: null, // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available
        // date-and-time localization
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //  `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          [
            {
              url: `${site.siteMetadata.siteUrl}`,
              changefreq: `daily`,
              priority: 0.7,
            },
            {
              url: `${site.siteMetadata.siteUrl}#hello`,
              changefreq: `daily`,
              priority: 0.7,
            },            {
              url: `${site.siteMetadata.siteUrl}#skills`,
              changefreq: `daily`,
              priority: 0.7,
            },
            {
              url: `${site.siteMetadata.siteUrl}#projects-experience`,
              changefreq: `daily`,
              priority: 0.7,
            },
            {
              url: `${site.siteMetadata.siteUrl}#contact`,
              changefreq: `daily`,
              priority: 0.7,
            },
            {
              url: `${site.siteMetadata.siteUrl}#education`,
              changefreq: `daily`,
              priority: 0.7,
            }
          ],
      },
    },
  ],
}

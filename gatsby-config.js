module.exports = {
  siteMetadata: {
    title: `Andy Cooke`,
    description: `Design & direction across brand identity, screen and print.`,
    author: `@__ccld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-storyblok`,
      options: {
        accessToken: `jK5tTVp364A2XEsUw0DhAAtt`,
        homeSlug: `home`,
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        includeLinks: true,
        resolveRelations: [
          'page.pageCategories',
          'page.selected_projects',
          'page.tag_list',
          'page.credits.credit',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andy Cooke`,
        short_name: `tiac`,
        start_url: `/`,
        background_color: `#191919`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config()

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Patrocreations",
    siteUrl: "https://patrocreations.com",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.REACT_APP_ANALYTICS_TRACKING_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}

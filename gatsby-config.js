// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config()
const path = require("path")

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Patrocreations",
    siteUrl: "https://patrocreations.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.REACT_APP_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["100", "300", "400", "500", "700", "900"],
            },
            {
              family: "JetBrains Mono",
              variants: ["300", "400", "500"],
            },
          ],
        },
        usePreload: true,
        // usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.REACT_APP_DATOCMS_API_TOKEN,
        disableLiveReload: true,
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        layout: path.join(__dirname, "src/layout"),
      },
    },
  ],
}

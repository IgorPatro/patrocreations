// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config()
const path = require("path")

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Patrocreations",
    siteUrl: "https://patrocreations.com",
    description:
      "I’m a young geek who loves sitting with a cup of coffee and writing code! ☕ My work is my passion 🙏 I love improving my skills, and I’m always looking forward to getting new experiences.",
    author: "Igor Patro",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.REACT_APP_ANALYTICS_TRACKING_ID],
      },
      pluginConfig: {
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrocreations`,
        short_name: `Patrocreations`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: "src/assets/icon.png",
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
        usePreconnect: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.REACT_APP_DATOCMS_API_TOKEN,
        disableLiveReload: true,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        ErrorDocument: `
          ErrorDocument 404 /404/index.html
        `,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: "./src/assets/images",
      },
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
        data: path.join(__dirname, "src/data"),
      },
    },
  ],
}

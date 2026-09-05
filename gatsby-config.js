const adapter = require("gatsby-adapter-netlify")

module.exports = {
  siteMetadata: {
    title: "Camellando",
    description: "Directorio de talento, oficios y servicios.",
    siteUrl: process.env.GATSBY_SITE_URL || "https://camellando.netlify.app"
  },
  adapter: adapter(),
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Camellando",
        short_name: "Camellando",
        start_url: "/",
        background_color: "#0d0f14",
        theme_color: "#0d0f14",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
}

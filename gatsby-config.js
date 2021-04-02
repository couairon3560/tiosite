module.exports = {
  siteMetadata: {
    title: "tiosite",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "y3n5tmwy",
        dataset: "staging",
      },
    },
    "gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "pixel id here",
    },
  },
],
};

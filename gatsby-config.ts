import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Bible`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "U2hMfkEY0eoXIQinGpR8CZMNr6i8VI5Su4lRSRsELTA",
        spaceId: "8ord7tcapwuw",
      },
    },
    "gatsby-plugin-sass",
  ],
};

export default config;

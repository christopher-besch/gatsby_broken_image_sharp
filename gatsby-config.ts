import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `broken_image_sharp`,
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-mdx", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".md", ".mdx"],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "static",
                path: `${__dirname}/static`,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/src/articles`,
            }
        },
        // image handling
        {
            resolve: "gatsby-transformer-sharp",
        },
        {
            resolve: "gatsby-plugin-sharp",
        },
        {
            resolve: "gatsby-plugin-image",
        },
    ]
};

export default config;

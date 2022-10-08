const path = require("path");

// TODO: fix types
exports.createPages = async ({ graphql, actions }: any) => {
    const { data }: any = await graphql(`
query GatsbyNode {
  allMdx(filter: {frontmatter: {type: {eq: "article"}}}) {
    nodes {
      id
      frontmatter {
        slug
      }
      internal {
        contentFilePath
      }
    }
  }
}
    `);

    const article_template = path.resolve("./src/templates/article.tsx");
    data.allMdx.nodes.forEach((node: any) => {
        actions.createPage({
            path: `articles/${node.frontmatter.slug}`,
            component: node.internal.contentFilePath,
        })
    });
};

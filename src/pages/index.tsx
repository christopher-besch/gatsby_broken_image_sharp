import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage, ImageDataLike } from "gatsby-plugin-image";

const Articles = ({ data }: any) => {
    const articles = data.allMdx.edges as any[];
    return (
        <div>
            {articles.map((article: any) =>
                <GatsbyImage key={article.id} image={getImage(article.node.frontmatter?.thumb as ImageDataLike)!} alt="thumbnail" />
            )}
        </div>
    );
};
export default Articles;

export const query = graphql`
query Articles {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
`;


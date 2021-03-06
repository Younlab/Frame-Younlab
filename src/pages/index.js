import React from "react";
import { graphql } from "gatsby";
import Post from "../components/container/post";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title} | Home</title>
      <meta name="description" content="Younlab blog, 나의 웹 개발 일기" />
      <meta name="title" content={data.site.siteMetadata.title} />
    </Helmet>
    <section>
      {data.allMarkdownRemark.edges.map(post => (
        <Post
          title={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          tags={post.node.frontmatter.tags}
          date={post.node.frontmatter.date}
          slug={post.node.fields.slug}
          key={post.node.id}
        />
      ))}
    </section>
  </div>
);

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM.DD")
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

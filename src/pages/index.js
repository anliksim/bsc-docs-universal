import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import List from 'components/list';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <List
        items={data.allMarkdownRemark.edges
          .filter(edge => edge.node.frontmatter.publish)
          .map(edge => ({
            id: edge.node.id,
            path: edge.node.frontmatter.path,
            subject: edge.node.frontmatter.subject,
            title: edge.node.frontmatter.title,
            date: edge.node.frontmatter.date,
            excerpt: edge.node.excerpt,
          }))}
      />
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        order: [ASC, DESC]
        fields: [frontmatter___subject, frontmatter___date]
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            publish
            subject
            title
            date(formatString: "DD.MM.YYYY")
            path
          }
        }
      }
    }
  }
`;

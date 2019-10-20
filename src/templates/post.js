import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Post = ({ data }) => (
  <Layout>
    <Head pageTitle={data.markdownRemark.frontmatter.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;

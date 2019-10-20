import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const About = () => (
  <Layout>
    <Head pageTitle="About" />
    <Box>
      <div>My name is Simon</div>
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

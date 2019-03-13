import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const Sitemap = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primaryDark" fontSize={['4rem', '5rem', '6rem']}>
          {'Site Map'}
        </Heading>
        <a target="blank" href="/">
          Home Page
        </a>
        <br />
        <a target="blank" href="/sitemap">
          Site Map
        </a>
        <br />
        <a target="blank" href="/privacy">
          Privacy
        </a>
        <br />
        <a target="blank" href="/contact">
          Contact
        </a>
      </Box>
    </Section.Container>
  </Layout>
);

export default Sitemap;

import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from '../components/ImageSubtitle';
import LinkAnimated from '../components/LinkAnimated';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Documentation = () => (
  <Section.Container id="docs" Background={Background}>
    <Section.Header name="Documentation" icon="📓" label="documentation" />
    <CardContainer minWidth="100%">
      <Card pb={4} minWidth="100%">
        <EllipsisHeading m={3} p={1}>
          Documentation
        </EllipsisHeading>
        <Flex alignItems="left" justifyContent="left" fontSize={24}>
          <Box px={[3, 3, 3]} pb={50}>
            Juka Documentation can be found at &nbsp;
            <LinkAnimated
              selected
              onClick={() =>
                window.open('https://juka.readthedocs.io/', '_blank')
              }
            >
              https://juka.readthedocs.io/
            </LinkAnimated>
          </Box>
        </Flex>
        <ImageSubtitle
          bg="primaryLight"
          color="white"
          x="right"
          y="bottom"
          round
        >
          ReadTheDocs
        </ImageSubtitle>
      </Card>
    </CardContainer>
  </Section.Container>
);

export default Documentation;

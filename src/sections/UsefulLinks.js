import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import markdownRenderer from '../components/MarkdownRenderer';
import SocialLink from '../components/SocialLink';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
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

const Post = ({ name, description, shortName }) => (
  <Card pb={4}>
    <EllipsisHeading m={3} p={1}>
      {name}
    </EllipsisHeading>

    <Text m={3}>
      <Fade bottom>
        <ReactMarkdown
          m={4}
          p={4}
          source={description.childMarkdownRemark.rawMarkdownBody}
          renderers={markdownRenderer}
        />
      </Fade>
    </Text>

    <ImageSubtitle bg="primaryLight" color="white" x="right" y="bottom" round>
      {shortName}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const Usefullinks = () => (
  <Section.Container id="Links" Background={Background}>
    <Section.Header name="Help & Useful Links" icon="📌" label="faqs" />
    <StaticQuery
      query={graphql`
        query LinksQuery {
          contentfulAbout {
            usefulLinks {
              name
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              shortName
            }
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="300px">
          {contentfulAbout.usefulLinks.map(p => (
            <Post key={p.name} {...p} />
          ))}

          <Card pb={4}>
            <EllipsisHeading m={3} p={1}>
              Social Media
            </EllipsisHeading>
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {contentfulAbout.socialLinks.map(({ id, ...rest }) => (
                <Box mx={2} fontSize={[7, 7, 7]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <ImageSubtitle
              bg="primaryLight"
              color="white"
              x="right"
              y="bottom"
              round
            >
              Social Media
            </ImageSubtitle>
          </Card>
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Usefullinks;

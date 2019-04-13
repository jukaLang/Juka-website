import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import CodeIntro from '../components/CodeIntro';
import ChangeLog from '../components/ChangeLog';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Tooltip } from 'react-tippy';
import LinkAnimated from '../components/LinkAnimated';
import { CardContainer, Card } from '../components/Card';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const hundred = {
  'min-height': '100vh',
};

const LandingPage = () => (
  <Section.Container id="home" Background={Background} Style={hundred}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Flex
              justifyContent={'space-between'}
              alignItems={'right'}
              fontSize={18}
              mb={[3, 4, 5]}
            >
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} />
              <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '300px', margin: 'auto' }}
              >
                <Card
                  p={1}
                  onClick={() =>
                    window.open(
                      'https://www.surveymonkey.com/r/JWQWQ7K',
                      '_blank',
                    )
                  }
                >
                  Click here to take a survey to improve our service
                </Card>
              </Box>
            </Flex>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 6, 100]}
              mb={[3, 4, 3]}
            >
              {`${name}`}
            </Heading>

            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 4]}
              textAlign="center"
            >
              <TextLoop>
                {roles.map(text => (
                  <Text width={[300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>

            <Heading textAlign="center" as="h2" color="secondary" mb={[3, 4]}>
              Juka - a language for fast, cross-platform prototyping
            </Heading>

            <Flex
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              mb={[3, 3, 3]}
            >
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Tooltip
                title="Juka Microsoft Teams"
                position="bottom"
                trigger="mouseenter"
              >
                <Text fontSize={24}>
                  <a href="https://teams.microsoft.com/l/team/19%3ac21a3c093ed1474b9f8101ee5149a834%40thread.skype/conversations?groupId=3fc54a5a-8340-408c-b96a-114c84fefc1c&tenantId=08b2fe3a-abf3-4916-a485-3beefce7acb4">
                    Join our community on Microsoft Teams
                  </a>
                </Text>
              </Tooltip>
            </Flex>

            <Flex justifyContent="center" flexWrap="wrap" px={2}>
              <CodeIntro />
              <Box m={3} />
              <ChangeLog />
              <Box m={3} />
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="jukalang"
                options={{ height: 400 }}
              />
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;

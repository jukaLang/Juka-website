import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import preview from '../preview.png';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        contentfulAbout {
          name
          description
          profile {
            favicon16: resize(width: 16) {
              src
            }
            favicon32: resize(width: 32) {
              src
            }
            bigIcon: resize(width: 192) {
              src
            }
            appleIcon: resize(width: 180) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { name, description, profile } = data.contentfulAbout;
      const title = `${name} Programming Language`;

      return (
        <ReactHelmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            name="description"
            content="Juka - An upcoming Natural Rapid Prototyping language of the Future"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href={profile.favicon32.src} />
          <link rel="icon" href={profile.favicon32.src} type="image/x-icon" />
          <meta name="theme-color" content={theme.background} />
          <meta name="image" content={preview} />
          <meta name="robots" content="index,follow" />

          <meta itemprop="name" content="Juka Programming Language" />
          <meta
            itemprop="description"
            content="Juka - An upcoming Natural Rapid Prototyping language of the Future"
          />
          <meta itemprop="image" content={preview} />

          <meta property="og:title" content="Juka Programming Language" />
          <meta
            property="og:description"
            content="Juka - An upcoming Natural Rapid Prototyping language of the Future"
          />
          <meta property="og:image:alt" content="Juka Site Preview" />
          <meta property="og:image" content={preview} />
          <meta property="og:url" content="https://jukalang.com" />
          <meta property="og:site_name" content="Juka" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:video"
            content="https://www.youtube.com/watch?v=1bslLys11q0"
          />
          <meta property="fb:admins" content="1713218178907666" />
          <meta property="fb:app_id" content="2286537544749608" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Juka Programming Language" />
          <meta
            name="twitter:description"
            content="Juka - An upcoming Natural Rapid Prototyping language of the Future"
          />
          <meta name="twitter:site" content="@jukaLang" />
          <meta name="twitter:creator" content="@jukaLang" />
          <meta name="twitter:image" content={preview} />
          <meta name="twitter:image:alt" content="Juka Site Preview" />
          <meta
            name="twitter:player"
            content="https://www.youtube.com/watch?v=1bslLys11q0"
          />

          <meta
            name="keywords"
            content="Juka, DReAM, Upcoming, Natural, Rapid Prototyping, Language, Future Programming, Coding, Rapid, Prototyping, Android, iOS, Run on Any Platform, Fast"
          />
          <meta
            name="news_keywords"
            content="Create, Program, Programming Language, Rapid"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={profile.appleIcon.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={profile.favicon32.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={profile.favicon16.src}
          />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/v4-shims.css"
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);

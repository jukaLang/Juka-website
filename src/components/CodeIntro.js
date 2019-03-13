import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from '../components/ImageSubtitle';

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const CodeIntro = () => (
  <Card mt={4} pl={30} pr={30}>
    <ImageSubtitle bg="primaryLight" color="white" x="left" y="top" round>
      Simple Hello World Program
    </ImageSubtitle>
    <Text fontSize={4} ml={3} pt={40}>
      <span style={{ color: '#ff4081' }}>function</span>{' '}
      <span style={{ color: '#ae66df' }}>main()</span>
      <span style={{ color: '#ff79b0' }}> = </span> {`{`}
    </Text>
    <Text fontSize={4} ml={5}>
      <span style={{ color: '#7c37ad' }}>printLine</span>(
      <span style={{ color: '#c60055' }}>"Hello World"</span>);
    </Text>
    <Text fontSize={4} ml={5}>
      <span style={{ color: '#ff4081' }}>int</span> xyz =
      <span style={{ color: '#ff79b0' }}> (2+3) * (1+4); </span>
    </Text>
    <Text fontSize={4} ml={5}>
      <span style={{ color: '#7c37ad' }}>printLine</span>(xyz);
    </Text>
    <Text fontSize={4} ml={3} mb={1}>
      {'}'}
    </Text>
  </Card>
);

export default CodeIntro;

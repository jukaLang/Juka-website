import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Flex, Box } from 'rebass';
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

const ChangeLog = () => (
  <Card mt={4} pl={30} pr={30}>
    <ImageSubtitle bg="primaryLight" color="white" x="left" y="top" round>
      Change Log
    </ImageSubtitle>
    <Text fontSize={4} pt={40}>
      <span style={{ color: '#ff4081' }}>Build 1:</span>{' '}
    </Text>
    <Text fontSize={4}>
      <span style={{ color: '#7c37ad' }}>Work on Cloud Platform</span>
    </Text>
  </Card>
);

export default ChangeLog;

/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Box, Flex, HStack, Text,
} from '@chakra-ui/react';
import {
  FaGithub, FaClock, FaBolt, FaChartBar,
} from 'react-icons/fa';

import info from '../assets/info.json';
import '../css/styles.css';

const FeatureCard = (data) => {
  const { content, icon } = data;
  return (
    <HStack maxW="md" margin="4" borderRadius="20" key={content} width={{ base: 'xs', md: 'md', lg: 'xl' }} className="feature-card">
      <Box
        borderRadius="25"
        marginRight="-16"
        zIndex="2"
        boxShadow="dark-lg"
        boxSize="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="icon-container"
      >
        {icon === 'FaGithub'
          ? <FaGithub className="icon" />
          : icon === 'FaClock'
            ? <FaClock className="icon" />
            : icon === 'FaBolt'
              ? <FaBolt className="icon" />
              : <FaChartBar className="icon" />}
      </Box>
      <Box
        bgColor="gray.800"
        height="150"
        width="100%"
        borderRadius="25"
        padding={{ base: '4', md: '8' }}
        paddingLeft={{ base: '16', md: '20' }}
        boxShadow="dark-lg"
      >
        <Text color="white">
          {content}
        </Text>
      </Box>
    </HStack>
  );
};

const FeaturesContainer = () => (
  <Box paddingY="16">
    <Text fontSize="3xl" textAlign="center" fontWeight="bold" marginBottom="5">Features</Text>
    <Flex align="center" flexDir="column">
      <Flex flexDir={{ base: 'column', lg: 'row' }}>
        {info.features.slice(0, 2).map((item) => FeatureCard(item))}
      </Flex>
      <Flex flexDir={{ base: 'column', lg: 'row' }}>
        {info.features.slice(2).map((item) => FeatureCard(item))}
      </Flex>
    </Flex>
  </Box>
);

export default FeaturesContainer;

import React from 'react';
import logo from '../assets/ps_logo.png';
import linkdin from '../assets/linkedin.png';
import Facebook from '../assets/facebook.png';
import tweeter from '../assets/twitter-x.png';
import { Box, HStack, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex 
      as="footer" 
      direction={{ base: 'column', md: 'row' }} 
      align="center" 
      justify="space-between" 
      padding={{ base: '1rem', md: '2rem' }}
      bg="gray.100" 
      textAlign="center" // Center text in column direction
    >
      <Box 
        mb={{ base: '1rem', md: '0' }} 
        flex="1" // Ensure it takes up available space
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }} // Center on small screens, left-aligned on larger screens
      >
        <img src={logo} alt="Logo" />
      </Box>

      <Box 
        fontWeight='500' 
        fontSize={{ base: '12px', md: '14px' }} 
        lineHeight={{ base: '16px', md: '20px' }} 
        mb={{ base: '1rem', md: '0' }} 
        flex="1"
      >
        <span>Copyright @2024</span>
      </Box>

      <Box 
        display="flex" 
        flex="1"
        justifyContent={{ base: 'center', md: 'flex-end' }} // Center on small screens, right-aligned on larger screens
        mb={{ base: '1rem', md: '0' }} // Margin bottom for small screens
      >
        <HStack spacing={{ base: '0.5rem', md: '1rem' }}>
          <Box>
            <img src={linkdin} alt="LinkedIn" />
          </Box>
          <Box>
            <img src={Facebook} alt="Facebook" />
          </Box>
          <Box>
            <img src={tweeter} alt="Twitter" />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Footer;

import React from 'react';
import { Box, HStack, Text, Button, Flex, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Shield from '../assets/Shield.png';
import Family from '../assets/familyframe.png';
import Services from './Services';
import Register from './Register';
import Why from './Why';
import Faq from './Faq';

const Content = () => {
  return (
    <>
      <Box>
        <Flex 
          p={{ base: '20px', md: '50px', xl: '70px' }} 
          direction={{ base: 'column', md: 'row' }} 
          alignItems='center'
          justifyContent='space-between'
          borderBottom='1px solid #999'
        >
          <VStack 
            align='start' 
            spacing={{ base: '10px', md: '20px', xl: '30px' }} 
            w={{ base: '100%', md: '50%' }}
          >
            <HStack
              border='1px solid #BFC9BF'
              borderRadius='15px'
              p={{ base: '6px', md: '10px', xl: '15px' }}
              spacing={{ base: '5px', md: '10px', xl: '15px' }}
              alignItems='center'
              w='fit-content'
            >
              <Text 
                color='#745B00' 
                fontWeight='400' 
                fontSize={{ base: '13px', md: '15px', lg: '16px', xl: '18px' }}
              >
                Safe and reliable financial service
              </Text>
              <Box as='img' src={Shield} alt='Shield icon' h='16px' w='16px' />
            </HStack>

            <Box lineHeight={{ base: '1.2', md: '1.3', lg: '1.4', xl: '1.5' }} m='2px'>
              <Text fontSize={{ base: '28px', md: '36px', lg: '48px', xl: '60px' }} fontWeight='500'>
                Own Your Dreams
              </Text>
              <Text fontSize={{ base: '28px', md: '36px', lg: '48px', xl: '60px' }} fontWeight='500'>
                PennyShelters Empowers
              </Text>
              <Text fontSize={{ base: '28px', md: '36px', lg: '48px', xl: '60px' }} fontWeight='500'>
                Your Financial Journey.
              </Text>
            </Box>

            <Box 
              fontWeight='400' 
              fontSize={{ base: '14px', md: '16px', lg: '18px', xl: '20px' }} 
              lineHeight={{ base: '1.5', md: '1.6', lg: '1.7', xl: '1.8' }} 
              m='2px'
            >
              <Text color='#000000'>
                Grow Your Wealth With smart savings, investments, and loans.
              </Text>
              <Text>
                We offer financial education and support every step of the way.
              </Text>
            </Box>

            <HStack spacing={{ base: '10px', md: '20px', lg: '30px', xl: '40px' }} p={{ base: '10px', md: '30px', xl: '40px' }}>
              <Button
                bg='#276749'
                color='white'
                fontWeight='bold'
                w={{ base: '120px', md: '150px', lg: '200px', xl: '250px' }}
                h={{ base: '30px', md: '40px', xl: '50px' }}
                fontSize={{ base: '14px', md: '16px', lg: '18px', xl: '20px' }}
                _hover={{ bg: '#276749' }}
                p={{ base: '10px', md: '20px', xl: '30px' }}
              >
                Register Now
                <ArrowForwardIcon ml='8px' boxSize={{ base: '1em', md: '1.5em', xl: '2em' }} fontWeight='bolder' />
              </Button>
            </HStack>
          </VStack>
          
          <Box 
            w={{ base: '0', md: '50%' }} 
            h={{ base: '0', md: 'auto' }} 
            ml={{ base: '0', md: '0' }}
            pt={{ base: '20px', md: '0' }}
            display={{ base: 'none', md: 'block' }} 
            flexShrink={0}
          >
            <img src={Family} alt='Family' style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
          </Box>
        </Flex>
      </Box>

      <Services />
      <Register />
      <Why />
      <Faq />
    </>
  );
};

export default Content;

import React from "react";
import { Box, HStack, Text, Button, Flex, VStack } from "@chakra-ui/react";
import person from '../../assets/person.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Register = () => {
  const regItems = [
    {
      title: "Create an account",
      descriptions: [
        "Sign up for an account with your name, email,",
         "and phone number."
      ]
    },
    {
      title: "Explore Services",
      descriptions: [
        "Browse through the wide range of services including loans, savings plans",
         "investment opportunities, and more."
      ]
    },
    {
      title: "Manage Your Account",
      descriptions: [
        "Access your personalized dashboard to track your savings",
         "loan status, and investments."
      ]
    }
  ];

  return (
    <Box>
      <Flex 
        p={{ base: '20px', md: '50px' }} 
        direction={{ base: 'column', md: 'row' }} 
        alignItems='center'
        justifyContent='space-between'
        borderBottom='1px solid #999'
      >
        <VStack 
          align='start' 
          spacing={{ base: '15px', md: '20px' }} 
          w={{ base: '100%', md: '50%' }}
          pb={{ base: '20px', md: '0' }} // Adjust padding for different screen sizes
        >
          <Box>
            <Text 
              as='p' 
              fontWeight='600' 
              fontSize={{ base: '28px', md: '40px' }} 
              lineHeight='40px' 
              color='#181D19'
              fontFamily='sans-serif'
            >
              Register under 5 minutes
            </Text>
          </Box>

          {regItems.map((item, index) => (
            <Box key={index} mb={{ base: '15px', md: '20px' }}>
              <HStack 
                spacing='10px'
                color='#318057' 
                fontSize='20px' 
                fontWeight='500' 
                lineHeight='24px'
              >
                <Text>{`0.${index + 1}`}</Text>
                <Text>{item.title}</Text>
              </HStack>
              <Box ml='10px'>
                {item.descriptions.map((desc, idx) => (
                  <Text
                    key={idx}
                    lineHeight='24px'
                    fontWeight='400'
                    fontSize='15px'
                    color='#767874'
                    pl='25px'
                  >
                    {desc}
                  </Text>
                ))}
              </Box>
            </Box>
          ))}

          <HStack spacing={{ base: '10px', md: '20px' }} p={{ base: '10px', md: '30px' }}>
            <Button
              bg='#276749'
              color='white'
              fontWeight='bold'
              w={{ base: '120px', md: '150px', lg: '200px' }}
              h={{ base: '40px', md: '50px' }}
              fontSize={{ base: '14px', md: '16px' }}
              _hover={{ bg: '#276749' }}
            >
              Register Now
              <ArrowForwardIcon ml='8px' boxSize={{ base: '1em', md: '1.5em' }} fontWeight='bolder' />
            </Button>
          </HStack>
        </VStack>

        <Box 
          w={{ base: '0', md: '50%' }} 
          h={{ base: '0', md: 'auto' }} 
          ml={{ base: '0', md: '0' }}
          pt={{ base: '20px', md: '0' }}
          display={{ base: 'none', md: 'block' }} // Hide on mobile devices
          flexShrink={0}
        >
          <img src={person} alt='Family' style={{ width: '80%', height: 'auto' }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Register;

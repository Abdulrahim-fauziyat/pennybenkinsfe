import { Container, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import why from "../assets/whyicon.png";
import copymark from "../assets/copy-check.png";

const Why = () => {
  const benefits = [
    {
      title: "Access to Affordable Loans",
      descriptions: [
        "Benefit from competitive interest rates on",
        "personal and business loans, designed to",
        "help you meet your financial needs without undue burden.",
      ]
    },
    {
      title: "Housing Solutions",
      descriptions: [
        "Take advantage of our innovative housing",
        "schemes like rent-to-own and group home",
        "ownership, making homeownership accessible and affordable.",
      ]
    },
    {
      title: "Flexible Savings Plans",
      descriptions: [
        "Choose from a variety of savings plans",
        "that fit your lifestyle, including daily,",
        "weekly, and monthly options, to help you",
        "achieve your financial goals.",
      ]
    },
    {
      title: "Investment Opportunities",
      descriptions: [
        "Grow your wealth with strategic",
        "investments in cooperative projects and",
        "share capital acquisition, earning",
        "dividends and supporting community",
        "growth.",
      ]
    },
    {
      title: "Enhanced Security",
      descriptions: [
        "Enjoy peace of mind with our robust",
        "security measures, ensuring that your",
        "personal and financial information is",
        "protected at all times.",
      ]
    },
    {
      title: "Food and Health Support",
      descriptions: [
        "Ensure your family's well-being with",
        "access to food loans, food sharing",
        "programs, comprehensive health",
        "insurance coverage, and community",
        "support.",
      ]
    },
  ];

  return (
    <Box 
      bg='#005A35' 
      backgroundImage={`url(../assets/PennyBank.png)`}
      backgroundSize="cover"
      backgroundPosition="center"
      filter='auto'
      height='auto'
      p='30px'
    >
      <Container mt='50px'>
        <Flex
          border="1px solid #BFC9BF"
          borderRadius="20px"
          p={{ base: "6px", md: "8px" }}
          textAlign="center"
          align="center"
          justify="center"
          w="fit-content"
          m="0 auto"
          gap="3px"
        >
          <Text
            color='#FFD34F'
            fontWeight="400"
            fontSize={{ base: "13px", md: "14px", lg: "15px" }}
          >
            Why PennyBankin
          </Text>
          <Box
            as="img"
            src={why}
            alt="Service icon"
            h="16px"
            w="16px"
            color='#FFD34F'
            fontWeight='bold'
          />
        </Flex>
      </Container>
       
          <Text color='#E0E4DE' fontWeight='500' fontSize='45px'  lineHeight='52px' align='center' mt='20px'>
          Why PennyShelters
          </Text>
        
      <Flex direction="column" mt="20px">
        {/* First row */}
        <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Box 
              key={index} 
              p="20px" 
              flex="1" 
              maxW={{ base: '100%', md: '33%' }} 
              textAlign={{ base: 'center', md: 'left',  }}
            >
              <Box mb="10px">
                <img src={copymark} alt="" />
              </Box>
              <Text fontWeight='500' fontSize='22px' color='#E0E4DE'>
                {benefit.title}
              </Text>
              {benefit.descriptions.map((line, i) => (
                <Text key={i} fontWeight='400' fontSize='16px' color='#E0E4DE' lineHeight='24px'>
                  {line}
                </Text>
              ))}
            </Box>
          ))}
        </Flex>
        {/* Second row */}
        <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap">
          {benefits.slice(3).map((benefit, index) => (
            <Box 
              key={index} 
              p="20px" 
              flex="1" 
              maxW={{ base: '100%', md: '33%' }} 
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Box mb="10px">
                <img src={copymark} alt="" />
              </Box>
              <Text fontWeight='500' fontSize='22px' color='#E0E4DE'>
                {benefit.title}
              </Text>
              {benefit.descriptions.map((line, i) => (
                <Text key={i} fontWeight='400' fontSize='16px' color='#E0E4DE' lineHeight='24px'>
                  {line}
                </Text>
              ))}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Why;

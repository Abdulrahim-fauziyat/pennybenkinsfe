import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Logo from '../../assets/ps_logo.png';
import Check from '../../assets/circlemark.png';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    title: "Access to Affordable Loans",
    descriptions: [
      "Benefit from competitive interest rates on personal and business loans,",
      "designed to help you meet your financial needs."
    ]
  },
  {
    title: "Flexible Savings Plans",
    descriptions: [
      "Choose from a variety of savings plans that fit your lifestyle, including",
      "daily, weekly, and monthly options."
    ]
  },
  {
    title: "Investment Opportunities",
    descriptions: [
      "Grow your wealth with strategic investments in cooperative",
      "projects and share capital acquisition, earning dividends and",
      "supporting community growth."
    ]
  },
  {
    title: "Food and Health Support",
    descriptions: [
      "Ensure your family's well-being with access to food loans, food sharing",
      "programs, comprehensive health insurance coverage, and community",
      "support."
    ]
  }
];

const CreateAccount = () => {
  return (
    <Box w="100%">
      <Box bg="#F7FAF4" borderRadius="md" p="30px 40px 100px 30px" w="100%">
        <Flex justifyContent={{ base: "center", md: "start" }} mb="30px">
        <ChakraLink as={Link} to="/">
          <Image src={Logo} alt="Logo" w={{ base: "100px", md: "130px", lg: "160px" }} h={{ base: "100px", md: "130px", lg: "160px" }} />
        </ChakraLink>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} align="start">
          <HStack spacing={{ base: "20px", md: "30px", lg: "40px" }} flex="1" wrap="wrap">
            {serviceItems.map((item, index) => (
              <Box key={index} mb="20px">
                <Flex alignItems="center">
                  <Image src={Check} alt="circlemark" boxSize={{ base: "20px", md: "24px", lg: "24px" }} mr="10px" />
                  <Text fontWeight="500" fontSize={{ base: "14px", md: "16px", lg: "18px" }}>
                    {item.title}
                  </Text>
                </Flex>
                <Text mt="10px" ml="34px" color="#6F7A71" fontWeight='400' lineHeight="20px">
                  {item.descriptions.join(' ')}
                </Text>
              </Box>
            ))}
          </HStack>

          <Box
            bg='#fff'
            w={{ base: "100%", md: "50%" }}
            p="30px"
            boxShadow='2xl'
            mt={{ base: "20px", md: "0" }}
            ml={{ md: "20px" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            h="auto"
          >
            <FormControl>
              <Text fontSize="28px" fontWeight="500" lineHeight="36px" pb="20px" pt="10px">
                Create your PennyShelter account
              </Text>
              <FormLabel>Email</FormLabel>
              <Input type="email" id='email' w="100%" />

              <FormLabel mt="4">Full Name</FormLabel>
              <Input type="text" id='name' w="100%" />

              <FormLabel mt="4">Password</FormLabel>
              <Input type="password" id='password' w="100%" />

              <FormLabel mt="4">Confirm Password</FormLabel>
              <Input type="password" id='confirmPassword' w="100%" />

              <Checkbox defaultChecked mt="6" fontWeight="400" fontSize="12px" lineHeight="16px">
                I agree to the terms and conditions <Link to="/privacy-policy" style={{ color: "#F2C000", textDecoration: 'none' }}>Privacy policy</Link>
              </Checkbox>

              <Button
                height="35px"
                width="100%"
                mt="25px"
                bg="#FFD34F"
                color="#513F00"
                _hover={{ bg: "#FFC107" }}
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
              >
                Create an account
              </Button>
            </FormControl>

            {/* Footer within the #fff container */}
            <Box
              bg="#F1F5EF"
              boxShadow='md'
              w="100%"
              mt="20px"
              textAlign="center"
              p="10px"
              flexShrink="0"
            >
              <Text fontSize="14px" fontWeight="400" lineHeight="20px">
                Already have an account? <Link to="/signup" style={{ color: "#F2C000", textDecoration: 'none' }}>Sign in</Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateAccount;

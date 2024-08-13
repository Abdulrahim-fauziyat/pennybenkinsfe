import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import Logo from '../../assets/ps_logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Signup = () => {
  return (
    <Box bg="#F7FAF4" borderRadius="md" p={{ base: "20px", md: "30px", lg: "40px" }} boxShadow="lg">
      <Flex justifyContent="center" mb="30px">
        <ChakraLink as={Link} to="/">
          <Image src={Logo} alt="Logo" w={{ base: "100px", md: "130px", lg: "160px" }} h={{ base: "100px", md: "130px", lg: "160px" }} />
        </ChakraLink>
      </Flex>

      <Flex direction="column" align="center">
        <Box
          bg="#fff"
          w={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
          p={{ base: "20px", md: "30px" }}
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderRadius="md"
        >
          <FormControl>
            <Text fontSize={{ base: "24px", md: "28px" }} fontWeight="500" textAlign='center' lineHeight="36px" pb="20px">
              Sign in to your account
            </Text>
            <FormLabel>Email</FormLabel>
            <Input type="email" id="email" w="100%" />

            <Flex justifyContent="space-between" alignItems="center" mt="4">
              <FormLabel>Password</FormLabel>
              <ChakraLink as={Link} to="/forgetpassword" color="#F2C000" fontSize="14px" fontWeight="500">
                Forgot password?
              </ChakraLink>
            </Flex>
            <Input type="password" id="password" w="100%" />

            <Checkbox mt="6" fontWeight="400" fontSize="12px" lineHeight="16px">
              Stay signed in for one week <ChakraLink as={Link} to="/privacy-policy" color="#F2C000">Privacy policy</ChakraLink>
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

          <Box
            bg="#F1F5EF"
            boxShadow="md"
            w="100%"
            mt="20px"
            textAlign="center"
            p="10px"
            borderRadius="md"
          >
            <Text fontSize="14px" fontWeight="400" lineHeight="20px">
              New to PennyShelter? <ChakraLink as={Link} to="/createaccount" fontWeight="500" color="#005A35">Create account</ChakraLink>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;

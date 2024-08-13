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
  Button,
} from '@chakra-ui/react';
import Logo from '../../assets/ps_logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const ForgetPassword = () => {
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
          w={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
          p={{ base: "20px", md: "30px", lg: "30px" }}
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderRadius="md"
        >
          <FormControl>
            <Text fontSize={{ base: "20px", md: "24px", lg: "28px" }} fontWeight="500" textAlign='center' lineHeight="36px" pb="5px">
              Create a new password
            </Text>
            <Text color='#3F4942' fontWeight='400' textAlign='center' fontSize='14px' lineHeight='20px' pb="10px">
              Please select a password that hasn’t been used before.
            </Text>
            <FormLabel mt="4">Set new password</FormLabel>
            <Input type="password" id="password" w="100%" p="8px" />

            <FormLabel mt="4">Confirm new password</FormLabel>
            <Input type="password" id="confirm-password" w="100%" p="8px" />

            <Button
              height="35px"
              width="100%"
              mt="25px"
              bg="#FFD34F"
              color="#513F00"
              _hover={{ bg: "#FFC107" }}
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
            >
              Continue
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

export default ForgetPassword;

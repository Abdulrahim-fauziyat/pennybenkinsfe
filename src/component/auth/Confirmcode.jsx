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
  IconButton,
} from '@chakra-ui/react';
import Logo from '../../assets/ps_logo.png';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

const ConfirmCode = () => {
  return (
    <Box bg="#F7FAF4" borderRadius="md" p={{ base: "20px", md: "30px", lg: "40px" }} boxShadow="lg">
      <Flex justifyContent="center" mb={{ base: "20px", md: "30px" }}>
        <ChakraLink as={Link} to="/">
          <Image src={Logo} alt="Logo" w={{ base: "100px", md: "130px", lg: "160px" }} h={{ base: "100px", md: "130px", lg: "160px" }} />
        </ChakraLink>
      </Flex>

      <Flex direction="column" align="center">
        <Box
          bg="#fff"
          w={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
          p={{ base: "20px", md: "30px" }}
          boxShadow="2xl"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex align="center" mb="20px">
            <IconButton
              aria-label="Go back"
              icon={<ArrowBackIcon />}
              variant="ghost"
              size="lg"
              fontSize="24px"
              mr="auto"
            />
          </Flex>

          <FormControl>
            <Text fontSize={{ base: "20px", md: "24px", lg: "28px" }} fontWeight="500" textAlign='center' lineHeight="36px" mb="10px">
              Enter Confirmation Code
            </Text>
            <Text color='#3F4942' fontWeight='400' textAlign='center' fontSize='14px' lineHeight='20px' mb="20px">
              We sent a 6-digit code to Kalstra***@gmail.com
            </Text>
            <Flex justifyContent="center" mb="20px">
              {Array(6).fill(null).map((_, index) => (
                <Input
                  key={index}
                  type="number"
                  id={`code-${index}`}
                  w={{ base: "12%", sm: "8%", md: "6%" }}
                  p="8px"
                  m="2px"
                  textAlign="center"
                />
              ))}
            </Flex>
            <Button
              height="35px"
              width="100%"
              mt="20px"
              bg="#FFD34F"
              color="#513F00"
              _hover={{ bg: "#FFC107" }}
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
            >
              Continue
            </Button>
            <Text textAlign='center' color='#3F4942' mt="20px" fontSize='14px' fontWeight='400'>
              Didn’t receive the email? <ChakraLink as={Link} to="/resend" fontWeight='500' color="#005A35">Resend</ChakraLink>
            </Text>
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

export default ConfirmCode;

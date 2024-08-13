import {
  Box,
  Button,
  Text,
  Flex,
  Spacer,
  HStack,
  IconButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import logo from "../../assets/ps_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="nav" h="80px" boxShadow="gray  1px 1px" alignItems="center">
      <Box
        as="img"
        src={logo}
        alt="Logo"
        h="200px"
        w="215px"
        p="10px  10px 10px  50px"
      />

      <Spacer />

      {!isMobile && (
        <HStack spacing="30px" color="black" fontSize="18px" fontWeight="bold">
          <Text as={Link} to="/about">
            About Us
          </Text>
          <Text as={Link} to="/services">
            Our Services
          </Text>
          <Text as={Link} to="/faqs">
            FAQs
          </Text>
        </HStack>
      )}

      <Spacer />

      {!isMobile && (
        <HStack spacing="30px" pr="100px">
          <Button
            bg="#276749"
            color="white"
            fontWeight="bold"
            w="150px"
            h="50px"
            _hover={{ bg: "#276749" }}
          >
            <Link to="/createaccount" style={{ color: 'inherit', textDecoration: 'none' }}>
              Join Us
            </Link>
            <ArrowForwardIcon ml="8px" boxSize="1.5em" fontWeight="bold" />
          </Button>
        </HStack>
      )}

      {isMobile && (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Open Menu"
          />
          <MenuList>
            <MenuItem as={Link} to="/about">About Us</MenuItem>
            <MenuItem as={Link} to="/services">Our Services</MenuItem>
            <MenuItem as={Link} to="/faqs">FAQ</MenuItem>
            <MenuItem>
              <Button
                bg="#276749"
                color="white"
                fontWeight="bold"
                w="100%"
                _hover={{ bg: "#276749" }}
              >
                <Link to="/createaccount" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Join Us
                </Link>
                <ArrowForwardIcon ml="8px" boxSize="1.5em" />
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default Navbar;

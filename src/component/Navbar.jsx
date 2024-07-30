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
  } from '@chakra-ui/react';
  import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons';
  import React from 'react';
  import logo from '../assets/ps_logo.png';
  
  const Navbar = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Flex as='nav' h='80px'  boxShadow='gray  1px 1px' alignItems='center'  >
        <Box as='img' src={logo} alt='Logo' h='200px' w='215px' p='10px  10px 10px  50px' />
        
        <Spacer />
  
        {!isMobile && (
          <HStack spacing='30px' color='black' fontSize='18px' fontWeight='bold'>
            <Text>About Us</Text>
            <Text>Our Services</Text>
            <Text>FAQs</Text>
          </HStack>
        )}
  
        <Spacer />
  
        {!isMobile && (
          <HStack spacing='30px' pr='100px'>
            <Button
              bg='#276749'
              color='white'
              fontWeight='bold'
              w='150px' h='50px'
              _hover={{ bg: '#276749' }}>
              Join Us
              <ArrowForwardIcon ml='8px' boxSize='1.5em'  fontWeight='bold'  />
            </Button>
          </HStack>
        
        )}
          
  
        {isMobile && (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant='outline'
              aria-label='Open Menu'
            />
            <MenuList>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Our Services</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>
                <Button
                  bg='#276749'
                  color='white'
                  fontWeight='bold'
                  w='100%'
                  _hover={{ bg: '#276749' }}
                >
                  Join Us
                  <ArrowForwardIcon ml='8px' boxSize='1.5em' />
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    );
  };
  
  export default Navbar;
  
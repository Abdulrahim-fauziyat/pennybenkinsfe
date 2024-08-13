import React from 'react';
import { Box, Flex, Text, Container,VStack,  Accordion, AccordionItem, AccordionButton,Button, AccordionPanel, HStack } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import Service from "../../assets/serviceicon.png";
import shakeicon from "../../assets/shakeicon.png";
import CMB from "../../assets/CMB.png";
import FederalMbank from "../../assets/FederalMbank.png";

const Faq = () => {
  return (
    <>

        {/* Faq and accordion section */}
    <Box p={{ base: '10px', md: '20px' }} bg='#F7FAF4'>
      <Container>
        <Flex
          border="1px solid #BFC9BF"
          borderRadius="20px"
          p={{ base: "6px", md: "8px" }}
          textAlign="center"
          align="center"
          justify="center"
          w="fit-content"
          mt="60px"
          mx="auto"
        >
          <Text
            color="#745B00"
            fontWeight="400"
            fontSize={{ base: "13px", md: "15px", lg: "16px" }}
            textAlign="center"
          >
            Frequently Asked Questions
          </Text>
          <Box
            as="img"
            src={Service}
            alt="Service icon"
            h="16px"
            w="16px"
            ml="8px"
          />
        </Flex>
      </Container>

      <Container textAlign="center" mt="20px" mb='20px'>
        <Text fontWeight="500" fontSize={{ base: '30px', md: '45px' }} lineHeight={{ base: '36px', md: '52px' }} color="#181D19">
          FAQS
        </Text>
      </Container>

      <Container maxW="container.xl" p={{ base: '10px', md: '20px' }}>
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#005A35" fontWeight="500" p="10px" fontSize={{ base: '18px', md: '22px' }} lineHeight={{ base: '24px', md: '28px' }}>
                      Is my personal and financial information secure with PennyShelters?
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#3F4942" fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '20px', md: '24px' }} fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#005A35" fontWeight="500" p="10px" fontSize={{ base: '18px', md: '22px' }} lineHeight={{ base: '24px', md: '28px' }}>
                      What is PennyShelters and what services do you offer?
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#3F4942" fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '20px', md: '24px' }} fontWeight="400">
                  PennyShelters is a multi-purpose cooperative society dedicated to helping members access funding, invest, save, and achieve their financial goals. Our services include loans, housing schemes, savings plans, investment opportunities, food bank services, health insurance, and more.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#005A35" fontWeight="500" p="10px" fontSize={{ base: '18px', md: '22px' }} lineHeight={{ base: '24px', md: '28px' }}>
                      What are the benefits of joining PennyShelters?
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#3F4942" fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '20px', md: '24px' }} fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#005A35" fontWeight="500" p="10px" fontSize={{ base: '18px', md: '22px' }} lineHeight={{ base: '24px', md: '28px' }}>
                      How do I start saving with PennyShelters?
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#3F4942" fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '20px', md: '24px' }} fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#005A35" fontWeight="500" p="10px" fontSize={{ base: '18px', md: '22px' }} lineHeight={{ base: '24px', md: '28px' }}>
                      How can I apply for a loan through PennyShelters?
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#3F4942" fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '20px', md: '24px' }} fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
      
      {/* Subscribe now section */}
    <Box
      borderRadius='16px'
      bg='#FFD34F'
      h={{ base: 'auto', md: '250px' }}
      p={{ base: '24px', md: '48px' }}
      m={{ base: '20px', md: '50px 30px', lg: '90px 50px 50px 90px' }}
      textAlign="center"
    >
      <Box>
        <Text
          color='#745B00'
          fontWeight='600'
          fontSize={{ base: '24px', md: '32px' }}
          lineHeight={{ base: '30px', md: '40px' }}
        >
          Join PennyShelters today for financial opportunities and
        </Text>
        <Text
          color='#745B00'
          fontWeight='600'
          fontSize={{ base: '24px', md: '32px' }}
          lineHeight={{ base: '30px', md: '40px' }}
        >
          community support.
        </Text>
      </Box>
      <Container align='center' p='30px'>
        <Button
          bg='#745B00'
          color='white'
          fontWeight='bold'
          w={{ base: '100px', md: '120px', lg: '150px' }}
          h={{ base: '30px', md: '40px' }}
          fontSize={{ base: '14px', md: '16px' }}
          _hover={{ bg: '#276749' }}
          p={{ base: '10px', md: '20px' }}
        >
          Subscribe Now
        </Button>
      </Container>
    </Box>

    <Box bg='#F9FAF6' p={{ base: '20px', md: '40px' }}>
  <Container>
    <VStack spacing={{ base: '20px', md: '30px' }} align='center'>
      <Flex
        border="1px solid #BFC9BF"
        borderRadius="20px"
        p={{ base: '6px', md: '8px' }}
        textAlign="center"
        align="center"
        justify="center"
        w="fit-content"
      >
        <Text
          color="#000000"
          fontWeight="400"
          fontSize={{ base: "10px", md: "12px", lg: "14px" }}
          textAlign="center"
          lineHeight='16px'
          fontFamily='sans-serif'
        >
          Reliable Partnership
        </Text>
        <Box
          as="img"
          src={shakeicon}
          alt="shakeicon"
          h={{ base: '16px', md: '20px' }}
          w={{ base: '16px', md: '20px' }}
          ml={{ base: '4px', md: '8px' }}
        />
      </Flex>

      <Text color='#000000' fontWeight='500' fontSize={{ base: '24px', md: '36px' }} lineHeight='44px'>
        Our Partners
      </Text>

      {/* Mobile View */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        justify='center'
        wrap='wrap'
        gap='10px'
        flexDirection='row'
      >
        {/* Mobile CMB Images */}
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />

        {/* Mobile FederalMbank Images */}
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
      </Flex>

      {/* Desktop View (md and larger screens) */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        justify='center'
        wrap='nowrap'
        gap={{ base: '10px', md: '20px' }}
        flexDirection='row'
      >
        {/* CMB Images */}
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }}  />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={CMB} alt="CMB" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />

        {/* FederalMbank Images */}
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
        <img src={FederalMbank} alt="FederalMbank" style={{ width: 'auto', height: '50px', maxWidth: '100px' }} />
      </Flex>
    </VStack>
  </Container>
</Box>




    </>
  );
};

export default Faq;

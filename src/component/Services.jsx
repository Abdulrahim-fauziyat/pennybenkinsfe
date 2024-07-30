import React, { useState } from "react";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Service from "../assets/serviceicon.png";
import calculator from '../assets/calculator.png';
import savings from '../assets/savings.png'; 
import investment from '../assets/investment.png'; 
import insurance from '../assets/insurance.png'; 
import arrow from '../assets/arrow.png';
import investmentIcon from '../assets/invest.png';
import savingsIcon from '../assets/save.png'; 
import insureIcon from '../assets/insure.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import check from '../assets/checkmark.png'

const Services = () => {
  const [activeTab, setActiveTab] = useState('Loan');

  const loanItems = [
    {
      title: "Cooperative Members Loans",
      descriptions: [
        "Access up to 10 Million on loan as a cooperative member and pay within 12 months.",
        "Interest on loan 7% monthly."
      ]
    },
    {
      title: "SME Loans",
      descriptions: [
        "Access up to 5 million loan and pay back weekly for 20 weeks.",
        "Interest 1.5% weekly."
      ]
    },
    {
      title: "Food Loans",
      descriptions: [
        "Deposit 40% of the total cost of the food items picked from our FOOD MART and spread balance payment for 6 weeks."
      ]
    },
    {
      title: "Rent Loans",
      descriptions: [
        "Access loan up to 100% of your rent if you have an active real estate investment with PENNYSHELTERS AFRICA."
      ]
    }
  ];

  const savingsItems = [
    {
      title: "Millionaire Challenge",
      descriptions: [
        "Access up to 10 Million on loan as a cooperative member and pay within 12 months. Interest on loan 7% monthly."
      ]
    },
    {
      title: "Co-operative Savings",
      descriptions: [
        "Access up to 5 million loan and pay back weekly for 20 Weeks. Interest 1.5% weekly."
      ]
    },
    {
      title: "My Pikin Savings",
      descriptions: [
        "Start saving a minimum of #5,000 monthly for your kids and enjoy School fees Loans and Scholarships opportunities directly from the cooperative or from our partners."
      ]
    },
    {
      title: "Rent Savings",
      descriptions: [
        "Save up to 100% of your rent if you have an active real estate investment with PENNYSHELTERS AFRICA."
      ]
    }
  ];

  const investmentItems = [
    {
      title: "Lending Investment",
      descriptions: [
        "For up to 4% monthly returns. Your deposit is borrowed out to verified members and customers for either 3, 6 or 12 months as either cash cash loan..."
      ]
    },
    {
      title: "Real Estate Investment Trust ( REIT)",
      descriptions: [
        "For up to 36% Return annually. Your subscription deposit is used to finance mortgage facilities, non- residential properties like malls, hotels, industries properties, Shotlet Apartment, co-working Spaces etc. 1.5% weekly."
      ]
    },
    {
      title: "Commodity Trading Investment",
      descriptions: [
        "Subscribe to our commodity trading and health insurance management services for up to 15% return every 180 Days (bi-annually 6 months)."
      ]
    },
    {
      title: "Share Capital",
      descriptions: [
        "Subscribe to OWN a portion of all the cooperative investment portfolio and enjoy annual returns yearly."
      ]
    }
  ];

  const insuranceItems = [
    {
      title: "Health Insurance",
      descriptions: [
        "Subscribe to our health insurance coverage and enjoy 24hrs health care from the closest hospital to your location. Both Family and Individual. For as low as #3,500 monthly subscription for Individual and #8,000 monthly subscription for Family of 4. Covering both primary and secondary health care services."
      ]
    }
  ];

  const tabImages = {
    'Loan': calculator,
    'Savings': savings,
    'Investment': investment,
    'Health Insurance': insurance
  };

  const tabIcons = {
    'Loan': arrow,
    'Savings': savingsIcon,
    'Investment': investmentIcon,
    'Health Insurance': insureIcon
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNextClick = () => {
    const tabs = ['Loan', 'Savings', 'Investment', 'Health Insurance'];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  return (
    <>
      <Box p={{ base: "20px", md: "100px" }}>
        <Container>
          <Flex
            border="1px solid #BFC9BF"
            borderRadius="20px"
            p={{ base: "6px", md: "8px" }}
            textAlign="center"
            align="center"
            justify="center"
            w="fit-content"
            m="0 auto"
          >
            <Text
              color="#745B00"
              fontWeight="400"
              fontSize={{ base: "13px", md: "15px", lg: "16px" }}
            >
              Our Services
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

        <Box
          lineHeight={{ base: "1.2", md: "1.3", lg: "52px" }}
          m="2px"
          textAlign="center"
          color="#181D19"
        >
          <Text
            fontSize={{ base: "28px", md: "36px", lg: "45px" }}
            fontWeight="500"
          >
            Explore our Comprehensive
          </Text>
          <Container>
            <Text
              fontSize={{ base: "28px", md: "36px", lg: "45px" }}
              fontWeight="500"
            >
              Solution & Services
            </Text>
          </Container>
        </Box>

        <Container h="50px" w="100%">
          <Flex
            bg="#DBE5DB"
            justify="space-between"
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            fontWeight="500"
            textAlign="center"
            mt="30px"
            borderRadius="40px"
            gap="0"
            w="100%"
            flexWrap="wrap"
          >
            {['Loan', 'Savings', 'Investment', 'Health Insurance'].map((tab) => (
              <Box
                key={tab}
                 fontWeight="500"
                borderRadius="30px"
                border="solid 1px #DBE5DB"
                p="8px"
                Align="center"
                color={activeTab === tab ? "black" : "#6F7A71"}
                bg={activeTab === tab ? "#ffff" : "transparent" }
                w={{ base: "25%", sm: "25%", md: "25%" }}
                cursor="pointer"
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      <Box p={{ base: "20px", md: "50px" }}>
        <Flex align="stretch" direction={{ base: "column", md: "row" }} gap="0">
          <Box display={{ base: "none", md: "block" }} flex="1" p="0" mb={{ base: "20px", md: "0" }}>
            <Box as="img" src={tabImages[activeTab]} alt={`${activeTab} image`} w="100%" h="auto" borderRadius="15px 0px 0px 15px" />
          </Box>
          <Box flex="1" boxShadow="#999" border={{ base: '0px', md: '1px solid #999', lg: '1px solid #999' }} borderRadius="4px 15px 15px 0px" p="5%" m="0" display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
              <Flex align="center" mb="10px">
                <Box as="img" src={tabIcons[activeTab]} alt={`${activeTab} icon`} mr="5px" />
                <Text fontWeight="500" ml="5px" color="#005A35" fontSize="22px" lineHeight="28px">
                  {activeTab}
                </Text>
              </Flex>
              <Text as="p" color="#767874" fontWeight="500" fontSize="25px" mb="10px">
                {activeTab === 'Loan' && 'Access Flexible Financing Options to Meet Your Personal and Business Needs.'}
                {activeTab === 'Savings' && 'Secure Your Future with Flexible and Rewarding Savings Plans.'}
                {activeTab === 'Investment' && 'Grow Your Wealth with Strategic Investment Opportunities.'}
                {activeTab === 'Health Insurance' && (
                  <>
                    <Text fontWeight="500" color="black" fontSize="22px" lineHeight='28px'>
                      Health Insurance
                    </Text>
                    Secure Your Future with Flexible and Rewarding
                    <Text>
                     Savings Plans
                    </Text>
                  </>
                )}
              </Text>
              {activeTab === 'Loan' && loanItems.map((item, index) => (
                <Box key={index} mb="20px">
                  <HStack>
                    <img src={check} alt="check" />
                    <Text fontWeight="500" color="#005A35" fontSize="20px">
                      {item.title}
                    </Text>
                  </HStack>
                  <Box pl="20px">
                    {item.descriptions.map((desc, i) => (
                      <Text key={i} color="#767874" fontSize="18px">
                        {desc}
                      </Text>
                    ))}
                  </Box>
                </Box>
              ))}
              {activeTab === 'Savings' && savingsItems.map((item, index) => (
                <Box key={index} mb="20px">
                  <HStack>
                    <img src={check} alt="check" />
                    <Text fontWeight="500" color="#005A35" fontSize="20px">
                      {item.title}
                    </Text>
                  </HStack>
                  <Box pl="20px">
                    {item.descriptions.map((desc, i) => (
                      <Text key={i} color="#767874" fontSize="18px">
                        {desc}
                      </Text>
                    ))}
                  </Box>
                </Box>
              ))}
              {activeTab === 'Investment' && investmentItems.map((item, index) => (
                <Box key={index} mb="20px">
                  <HStack>
                    <img src={check} alt="check" />
                    <Text fontWeight="500" color="#005A35" fontSize="20px">
                      {item.title}
                    </Text>
                  </HStack>
                  <Box pl="20px">
                    {item.descriptions.map((desc, i) => (
                      <Text key={i} color="#767874" fontSize="18px">
                        {desc}
                      </Text>
                    ))}
                  </Box>
                </Box>
              ))}
              {activeTab === 'Health Insurance' && insuranceItems.map((item, index) => (
                <Box key={index} mb="20px">
                  <HStack>
                    <img src={check} alt="check" />
                    <Text fontWeight="500" color="#005A35" fontSize="20px">
                      {item.title}
                    </Text>
                  </HStack>
                  <Box pl="20px">
                    {item.descriptions.map((desc, i) => (
                      <Text key={i} color="#767874" fontSize="18px">
                        {desc}
                      </Text>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Flex justify="flex-end" mt="auto" align="center" cursor="pointer" onClick={handleNextClick}>
              <Text fontWeight="500" color="black" fontSize="16px" mr="8px">Next</Text>
              <ArrowForwardIcon boxSize={{ base: '1em', md: '1.5em' }} fontWeight='bolder' />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Services;

import React from "react";
import { Box, Flex, Heading, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Text, Icon, Container } from "@chakra-ui/react";
import { FaDollarSign, FaChartLine, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={10}>Business Dashboard</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
        <StatBox icon={FaChartLine} title="Total Sales" stat="3,200" helpText="Since last month" />
        <StatBox icon={FaDollarSign} title="Revenue" stat="$25,300" helpText="Since last month" />
        <StatBox icon={FaUsers} title="New Customers" stat="124" helpText="Since last month" />
        <StatBox icon={FaShoppingCart} title="Products Sold" stat="1,400" helpText="Since last month" />
      </SimpleGrid>
    </Container>
  );
};

const StatBox = ({ icon, title, stat, helpText }) => (
  <Stat p={5} shadow="md" border="1px solid" borderColor="gray.200" borderRadius="md">
    <Flex justifyContent="space-between">
      <Box pl={3}>
        <StatLabel fontWeight="medium">{title}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="semibold">
          {stat}
        </StatNumber>
        <StatHelpText>{helpText}</StatHelpText>
      </Box>
      <Box my="auto" color="blue.500">
        <Icon as={icon} w={10} h={10} />
      </Box>
    </Flex>
  </Stat>
);

export default Index;

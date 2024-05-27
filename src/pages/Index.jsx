import { Box, Container, VStack, HStack, Text, Input, Button, Flex, Heading, SimpleGrid, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.700" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack spacing={8} justify="space-between">
            <Heading size="md">JobListing</Heading>
            <HStack spacing={4}>
              <Link href="#">Home</Link>
              <Link href="#">Jobs</Link>
              <Link href="#">Post a Job</Link>
              <Link href="#">Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.50" py={20}>
        <Container maxW="container.lg" centerContent>
          <VStack spacing={4}>
            <Heading size="2xl">Find Your Dream Job</Heading>
            <Text fontSize="lg">Search from thousands of job listings</Text>
            <HStack spacing={2} width="100%">
              <Input placeholder="Job title or keyword" size="lg" />
              <Button colorScheme="blue" size="lg">Search</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Job Listings Section */}
      <Container maxW="container.lg" py={10}>
        <Heading size="lg" mb={6}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Software Engineer</Heading>
            <Text mt={4}>Company: Tech Corp</Text>
            <Text>Location: New York, NY</Text>
            <Text mt={4}>Brief description of the job listing goes here...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Product Manager</Heading>
            <Text mt={4}>Company: Innovate Ltd</Text>
            <Text>Location: San Francisco, CA</Text>
            <Text mt={4}>Brief description of the job listing goes here...</Text>
          </Box>
          {/* Add more job listings as needed */}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.700" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 JobListing. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
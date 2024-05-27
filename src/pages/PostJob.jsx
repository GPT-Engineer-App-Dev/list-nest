import { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, Flex, Heading, Textarea, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = ({ addJob }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!jobTitle) newErrors.jobTitle = "Job title is required";
    if (!companyName) newErrors.companyName = "Company name is required";
    if (!location) newErrors.location = "Location is required";
    if (!jobDescription) newErrors.jobDescription = "Job description is required";
    if (!contactEmail) newErrors.contactEmail = "Contact email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newJob = {
      jobTitle,
      companyName,
      location,
      jobDescription,
      contactEmail,
    };

    addJob(newJob);
    navigate("/");
  };

  return (
    <Box>
      <Box as="nav" bg="blue.700" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack spacing={8} justify="space-between">
            <Heading size="md">JobListing</Heading>
            <HStack spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/jobs">Jobs</Link>
              <Link href="/post-job">Post a Job</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={10}>
        <Heading size="lg" mb={6}>Post a Job</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.jobTitle}>
              <FormLabel>Job Title</FormLabel>
              <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
              {errors.jobTitle && <FormErrorMessage>{errors.jobTitle}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.companyName}>
              <FormLabel>Company Name</FormLabel>
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              {errors.companyName && <FormErrorMessage>{errors.companyName}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.location}>
              <FormLabel>Location</FormLabel>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} />
              {errors.location && <FormErrorMessage>{errors.location}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.jobDescription}>
              <FormLabel>Job Description</FormLabel>
              <Textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
              {errors.jobDescription && <FormErrorMessage>{errors.jobDescription}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.contactEmail}>
              <FormLabel>Contact Email</FormLabel>
              <Input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
              {errors.contactEmail && <FormErrorMessage>{errors.contactEmail}</FormErrorMessage>}
            </FormControl>
            <Button type="submit" colorScheme="blue">Post Job</Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default PostJob;
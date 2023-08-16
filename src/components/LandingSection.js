
import React from "react";
import { Avatar, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Reese!";
const bio1 = "I'm a passionate software engineer with a fascination for a variety of tech stacks both frontend and backend. I thrive on transforming innovative ideas into robust digital solutions. Proficient in Java, SQL, JavaScript, and C#, I have utilized these skills in professional environments to deliver meaningful and impactful solutions to hundres of employees across several companies. I also have a passion for blockchain and decentralization technology where I am constantly studying the latest trends and improving my skills. I'm dedicated to creating efficient, user-centric software solutions.";

const imageSrc = {
  getImageSrc: () => require("../images/headshot.jpg")
}

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Flex alignItems="center" justifyContent="center">
      <VStack spacing={5}>
        <Avatar src={imageSrc.getImageSrc()} size='2xl' />
        <Heading as="h6" size="lg" paddingTop='20px'>
          {greeting}
        </Heading>
        <Text fontSize='lg' font>{bio1}</Text>
      </VStack>
    </Flex>
  </FullScreenSection>
);

export default LandingSection;
import { Heading, HStack, Image, Text, Textarea, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, liveLink, sourceLink }) => {
  return (
    <VStack
      color="white"
      backgroundColor="#2A4365"
      cursor="pointer"
      borderRadius="3xl"
    >
      <Image borderRadius="2xl" border='2px solid #2A4365' src={imageSrc} alt={title} height='350px' width='100%'/>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justify="space-between" alignItems="center">
          <Heading as="h3" size="md" color='white'>
            {title}
          </Heading>
        </HStack>
        <Text color="white" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
            <a href ={liveLink} target='_blank' >Live Version</a>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="white"/>
            <a href ={sourceLink} target='_blank' >Source Code</a>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="white"/>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;

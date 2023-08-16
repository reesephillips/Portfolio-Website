import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Ether Wager Hub",
    description:
      "Decentralized betting platform built on the Ethereum blockchain that uses smart contracts to place bets and select winners",
    getImageSrc: () => require("../images/bets.JPG"),
    liveLink: 'https://etherwagerhub.com',
    sourceLink: 'https://github.com/reesephillips/Ether-Wager-App',
  },
  {
    title: "Little Lemon Website",
    description:
      "Website for a fictional restaurant that allows user to view the menu and make reservations",
    getImageSrc: () => require("../images/littlelemon.JPG"),
    liveLink: "https://main.d1unmp802uoqzi.amplifyapp.com/",
    sourceLink: 'https://github.com/reesephillips/Little-Lemon_Reservation',
  },
  {
    title: "On-Chain SVGs",
    description:
      "Generate a fully on-chain SVG on the Ethreum Blockchain that contain a random word or phrase",
    getImageSrc: () => require("../images/funnynft.JPG"),
    liveLink: "https://funny-name-nft.vercel.app/",
    sourceLink: 'https://github.com/reesephillips/nft-name-generator',
  },
  {
    title: "Student Management System",
    description:
      "Create, read, update, and delete app that tracks student information and stores it in a MySQL database using Java Spring Boot",
    getImageSrc: () => require("../images/ems.JPG"),
    liveLink: "",
    sourceLink: 'https://github.com/reesephillips/Employee-Management-System',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

import React from "react";
import {
  Flex,
  Box,
  Text,
  HStack,
  Button,
  Show,
  Hide
} from "@chakra-ui/react";
import "./Navbar.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as Rlink } from "react-scroll";
import SideDrawer from "./Drawer";
import resume from "../assets/Bhavik_Dholu-Resume.pdf";


const link = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "skill", title: "Skills" },
  { id: "project", title: "Project" },
  { id: "git", title: "Git Status" },
  { id: "contact", title: "Contact" },
];

const navbar = () => {

  function openInNewTab() {
    window.open("https://drive.google.com/file/d/1QC3ExHca-NkwwC0UKDLebGJFlo8du0Sr/view?usp=sharing", '_blank').focus();
  }

  return (
    <div className="navbar">
      <Box width="100%" color="white" p={2} pl={10} pr={10}>
        <Flex justifyContent="space-between">
          <Box textAlign="center">
            <Text fontFamily="Brush Script Mt,cursive" fontSize="4xl">
              Bhavik
            </Text>
          </Box>
          <Show above="md">
            <HStack className="link-stack" fontSize={'16px'}>
              {link.map((e) => (
                <Rlink
                  key={e.id}
                  activeClass="active"
                  to={e.id}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-92}
                  style={{ cursor: 'pointer' }}
                >
                  {e.title}
                </Rlink>
              ))}
              <a
                href={resume}
                onClick={openInNewTab}
              >
                <Button bg="white" color="black">
                  Resume <ExternalLinkIcon />
                </Button>
              </a>
            </HStack>
          </Show>
          <Hide above="md">
            <SideDrawer />
          </Hide>
        </Flex>
      </Box>
    </div>
  );
};

export default navbar;

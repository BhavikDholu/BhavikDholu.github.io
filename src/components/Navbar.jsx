import React from 'react';
import {Flex,Box,Text,HStack,Button,Show, Menu,
  MenuButton,
  MenuList,
  MenuItem,Portal} from "@chakra-ui/react";
import './Navbar.css';
import {HamburgerIcon} from "@chakra-ui/icons";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Resume from "../assets/Bhavik_Dholu_Resume.pdf";
import {Link} from "react-scroll";

const link = [
  { id : "home",
    title: "Home"
  },
  { id : "about",
    title: "About Me"
  },
  { id : "skill",
    title: "Skills"
  },
  { id : "project",
    title: "Project"
  },
  { id : "contact",
    title: "Contact"
  }
];

const navbar = () => {

  return (
    <div className="navbar">
      <Box width="100%" color="white" p={2} pl={10} pr={10}>
      <Flex justifyContent="space-between">
    <Box  textAlign="center" >
      <Text fontFamily="Brush Script Mt,cursive" fontSize="4xl" >
        Bhavik
      </Text>
    </Box> 
    <Show above='md'>
    <HStack className='link-stack'>
    {link.map((e) => (
        <Link key={e.id} activeClass="active" to={e.id} spy={true} smooth={true} duration={1500}>{e.title}</Link>
      ))}
      <Button bg="white" color="black"><a href={Resume} download={true}>Resume <ExternalLinkIcon/></a></Button>
    </HStack>
    </Show>
    <Show below='md'>
    <Menu>
  <MenuButton><HamburgerIcon boxSize="2em"/></MenuButton>
  <Portal>
    <MenuList>
    {link.map((e) => (
      <MenuItem key={e.id}>
      <Link activeClass="active" to={e.id} spy={true} smooth={true} duration={1500}>{e.title}</Link>
      </MenuItem>
      ))}
      <MenuItem><a href={Resume} download={true}>Resume <ExternalLinkIcon/></a></MenuItem>
    </MenuList>
  </Portal>
</Menu>
    </Show>
  </Flex>
      </Box>
      
    </div>
  
  )
}

export default navbar
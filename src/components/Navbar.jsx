import React from 'react';
import { NavLink } from "react-router-dom";
import {Flex,Box,Text,HStack,Button,Show, Menu,
  MenuButton,
  MenuList,
  MenuItem,Portal} from "@chakra-ui/react";
import './Navbar.css';
import {HamburgerIcon} from "@chakra-ui/icons";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const link = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About Me"
  },
  {
    to: "/skills",
    title: "Skills"
  },
  {
    to: "/project",
    title: "Project"
  },
  {
    to: "/contect",
    title: "Contect"
  }
];

const navbar = () => {

  const activeStyle = {
    textDecoration: "none",
    color: "red"
  };
  const normelStyle = {
    textDecoration: "none",
    color: "white"
  };

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
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : normelStyle)}
          key={e.to}
          to={e.to}
        >
          {e.title}
        </NavLink>
      ))}
      <Button bg="white" color="black"><a href='https://drive.google.com/file/d/1NXdejID4ESWnBTpnrxQgJP6-9c17_777/view?usp=share_link' download={true}>Resume <ExternalLinkIcon/></a></Button>
    </HStack>
    </Show>
    <Show below='md'>
    <Menu>
  <MenuButton><HamburgerIcon boxSize="2em"/></MenuButton>
  <Portal>
    <MenuList>
      <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
      <MenuItem><NavLink to="/about">About Me</NavLink></MenuItem>
      <MenuItem>Skills</MenuItem>
      <MenuItem>Project</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem><a href='https://drive.google.com/file/d/1NXdejID4ESWnBTpnrxQgJP6-9c17_777/view?usp=share_link' download={true}>Resume <ExternalLinkIcon/></a></MenuItem>
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
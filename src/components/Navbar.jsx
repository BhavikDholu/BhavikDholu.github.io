import React from 'react';
import {Flex,Box,Text,HStack,Button,Show, Menu,
  MenuButton,
  MenuList,
  MenuItem,Portal,Link} from "@chakra-ui/react";
import './Navbar.css';
import {HamburgerIcon} from "@chakra-ui/icons";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Link as Rlink}  from "react-scroll";
import {useNavigate} from "react-router-dom"

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

  //  const onClick = ()=>{
  //   window.location.href = "https://drive.google.com/uc?export=download&id=1NXdejID4ESWnBTpnrxQgJP6-9c17_777"
  //  }

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
        <Rlink key={e.id} activeClass="active" to={e.id} spy={true} smooth={true} duration={1500}>{e.title}</Rlink>
      ))}
      <Button bg="white" color="black"><Link href="https://drive.google.com/file/d/1NXdejID4ESWnBTpnrxQgJP6-9c17_777/view?usp=sharing" isExternal>Resume <ExternalLinkIcon/></Link></Button>
    </HStack>
    </Show>
    <Show below='md'>
    <Menu>
  <MenuButton><HamburgerIcon boxSize="2em"/></MenuButton>
  <Portal>
    <MenuList>
    {link.map((e) => (
      <MenuItem key={e.id}>
      <Rlink activeClass="active" to={e.id} spy={true} smooth={true} duration={1500}>{e.title}</Rlink>
      </MenuItem>
      ))}
      <MenuItem><Link href="https://drive.google.com/file/d/1NXdejID4ESWnBTpnrxQgJP6-9c17_777/view?usp=sharing" isExternal>Resume <ExternalLinkIcon/></Link></MenuItem>
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
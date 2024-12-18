import React from 'react'
import { Box, Heading, Image, SimpleGrid, Button, Link, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  function openInNewTab() {
    window.open("https://drive.google.com/file/d/1QC3ExHca-NkwwC0UKDLebGJFlo8du0Sr/view?usp=sharing", '_blank').focus();
  }
  return (
    <Box h={{ base: "auto", md: "auto", lg: "auto" }} id="home" mt='10px'>
      <SimpleGrid columns={{ sm: 1, md: 2 }} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[4, 8, 14, 20]} m='auto' textAlign={{ base: "center", md: "left" }} spacing={10}>
          <Heading sixe="xl" mt={2}>Hello, World!</Heading>
          <Heading size="xl" mt={2}>I am Bhavik Dholu</Heading>
          <Heading size='md' mt={2}>MERN STACK DEVELOPER</Heading>
          <Button bg="white" mt={2} color="black" onClick={openInNewTab}>
            Resume <ExternalLinkIcon />
          </Button>
          <Box>
            <Flex mt={3} gap={5}>
              <Link href='https://github.com/BhavikDholu' isExternal>
                <BsGithub fontSize="2em" />
              </Link>
              <Link href='https://www.linkedin.com/in/bhavik-dholu98/' isExternal>
                <BsLinkedin fontSize="2em" />
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box align="center" p={10}>
          <Image src="https://avatars.githubusercontent.com/u/107461511?s=400&u=86a24403fefeb98a3780a20a093f7ba656721dba&v=4" borderRadius='full' boxSize={{ base: "250px", md: "350px" }} />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Home
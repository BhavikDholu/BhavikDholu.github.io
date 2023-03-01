import { Box, Heading ,SimpleGrid ,Text ,Image} from '@chakra-ui/react';
import React from 'react';
import coding_gif  from "../assets/coding_gif.gif";

const AboutMe = () => {
  return (
    <Box id="about" h={{base:"auto",md:"100vh",lg:'85vh'}}>
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              About Me
            </Text>
       </Heading>
      <Box h={{base:"auto",md:"60vh"}}>
      <SimpleGrid columns={{sm: 1, md: 2}} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[4, 8, 14, 20]} textAlign="justify">
          <Text fontSize='xl'>Hello, World! I am Bhavik Dholu A MERN stack developer, with 1200+ hours of coding experience, prectice 300+ hours of Data structure and algorithms.</Text>
          <Text fontSize='xl' mt={6}>A self-motivated, hard-working, focused, and quick-learning full-stack web developer capable of writing production-ready code using MERN, JavaScript, HTML and CSS technologies, high adaptability to learn new technologies, problem-solving mindset, and the ability to work in a team.</Text>
        </Box>
        <Box align="center" p={10}>
           <Image src={coding_gif}  boxSize={{base:"250px" , md:"350px"}}/>
        </Box>
      </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AboutMe
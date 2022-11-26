import { Box, Heading ,SimpleGrid ,Text ,Image} from '@chakra-ui/react'
import React from 'react'

const AboutMe = () => {
  return (
    <Box>
      <Heading>About Me</Heading>
      <Box h={{base:"auto",md:"70vh"}}>
      <SimpleGrid columns={{sm: 1, md: 2}} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[4, 8, 14, 20]} textAlign="justify">
          <Text fontSize='xl'>Hello, World! I am Bhavik Dholu A MERN stack developer, with 1200+ hours of coding experience, prectice 300+ hours of Data structure and algorithms.</Text>
          <Text fontSize='xl'>A self-motivated, hard-working, focused, and quick-learning full-stack web developer capable of writing production-ready code using MERN, JavaScript, HTML and CSS technologies, high adaptability to learn new technologies, problem-solving mindset, and the ability to work in a team.</Text>
        </Box>
        <Box align="center" p={10}>
           <Image src="https://raw.githubusercontent.com/0xAbdulKhalid/0xAbdulKhalid/main/assets/mdImages/Right_Side.gif"  boxSize={{base:"250px" , md:"350px"}}/>
        </Box>
      </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AboutMe
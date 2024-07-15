import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react';
import coding_gif from "../assets/coding_gif.gif";

const AboutMe = () => {
  return (
    <Box id="about" mt={20}>
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
      <Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} justifyContent="space-around" mt={[0, 4, 6, 8]}>
          <Box p={[4, 8, 14, 20]} textAlign="justify">
            <Text fontSize='xl'>Hello! I'm Bhavik Dholu, a passionate MERN stack developer with 2 years of experience in building robust web applications. With extensive practice in mastering data structures and algorithms, I have honed my skills to deliver high-quality, production-ready code.</Text>
            <Text fontSize='xl' mt={6}>As a self-motivated and hard-working developer, I thrive in fast-paced environments where my quick-learning abilities and problem-solving mindset can shine. I am proficient in MERN (MongoDB, Express.js, React.js, Node.js), JavaScript, HTML, and CSS, and I am always eager to learn and adapt to new technologies.</Text>
            <Text fontSize='xl' mt={6}>
              Collaboration is key to my approach, and I enjoy working in teams to create innovative solutions. My focus on continuous improvement and my commitment to excellence drive me to deliver outstanding results in every project I undertake.
            </Text>
            <Text fontSize='xl' mt={6}>
              Let's build something amazing together!
            </Text>
          </Box>
          <Box align="center" p={10}>
            <Image src={coding_gif} boxSize={{ base: "250px", md: "350px" }} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AboutMe
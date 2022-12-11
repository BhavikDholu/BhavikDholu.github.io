import React from 'react'
import {Heading,Text,Image,Box,SimpleGrid } from "@chakra-ui/react";

const Skills_data=[
   {
    id : 1,
    logo : "https://cdn.sanity.io/images/897el8p6/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png",
    title : "React"
  },
  {
    id : 2,
    logo : "https://cdn.sanity.io/images/897el8p6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png",
    title : "Redux"
  },
  {
    id : 3,
    logo : "https://cdn.sanity.io/images/897el8p6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
    title : "Javascript"
  },
  {
    id : 4,
    logo : "https://cdn.sanity.io/images/897el8p6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
    title : "HTML"
  },
  {
    id : 5,
    logo : "https://cdn.sanity.io/images/897el8p6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
    title : "CSS"
  },
  {
    id : 6,
    logo : "https://cdn.sanity.io/images/897el8p6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png",
    title : "Typescript"
  },
  {
    id : 7,
    logo : "https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png",
    title : "Next-js"
  },
  {
    id : 8,
    logo : "https://www.coffeeclass.io/logos/chakra-ui.png",
    title : "Chakra-Ui"
  },
  {
    id : 9,
    logo : "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1",
    title : "Cypress"
  },
  {
  id : 12,
  logo : "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
  title : "Jest"
},
  {
    id : 10,
    logo : "https://cdn.sanity.io/images/897el8p6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
    title : "Git"
  },
{
    id : 11,
    logo : "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
    title : "VS Code"
  },
]



const Skills = () => {
  return (
    <Box h={{base:"auto",md:"80vh"}} id="skill">
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              Technical Skills
            </Text>
       </Heading>
       <Box width={'70%'} margin="auto" mt="30px" pl="7%">
       <SimpleGrid columns={{base:2, sm: 2, md: 4}} spacing={{base:12, sm: 8, md: 10}}>
        {
           Skills_data.map((skill)=><Box key={skill.id} mt={{base:"10px"}} width={{base:"80px",sm:"80px",lg:"100px"}} p={1} h={{base:"80px",sm:"80px",lg:"100px"}} align="center">
           <Image src={skill.logo} objectFit='cover' alt="logo" />
           <Text mt="5px" color="gray.400">{skill.title}</Text> 
         </Box>)
      
        }
       </SimpleGrid>
       </Box>
        
    </Box>
  )
}

export default Skills
import React from 'react'
import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
// import github from "../assets/github.png";


const Github = () => {

    // const selectLastHalfYear = contributions => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 1;
      
    //     return contributions.filter(day => {
    //       const date = new Date(day.date);
    //       const monthOfDay = date.getMonth();
      
    //       return (
    //         date.getFullYear() === currentYear &&
    //         monthOfDay > currentMonth - shownMonths &&
    //         monthOfDay <= currentMonth
    //       );
    //     });
    //   };

  return (
    <Box mt="100px" id="git">
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              Github Status
            </Text>
       </Heading>
       <Box pt={10} pb={10}>
       <Flex direction={'column'} gap="30px" margin="auto">
           <Box border="1px solid gray" w={{base:'90%',md:"60%",lg:'40%'}} align="center" margin="auto" p={5} borderRadius='10px'>
           <GitHubCalendar
            username="BhavikDholu" 
            color="#4db5ff"
            width="90%"
            />
           </Box>
           {/* <Box w={{base:'90%',md:"60%",lg:'40%'}} align="center" margin="auto" borderRadius={10} border="1px solid gray">
            <Image src={github} alt="git" borderRadius={10}/>
           </Box> */}
           <Box w={{base:'90%',md:"60%",lg:'40%'}} align="center" margin="auto">
            <Image src="https://github-readme-streak-stats.herokuapp.com/?user=bhavikdholu&theme=dark&border_radius=15" alt="git"/>
           </Box>
           <Box w={{base:'90%',md:"60%",lg:'40%'}} align="center" margin="auto">
            <Image src="https://github-readme-stats.vercel.app/api?username=bhavikdholu&show_icons=true&locale=en&theme=dark&border_radius=15" alt="git"/>
           </Box>
       </Flex>
       </Box>
    </Box>
  )
}

export default Github
import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  ListItem,
  List,
  ListIcon,
  Link  
} from '@chakra-ui/react';
import {SettingsIcon,ExternalLinkIcon} from "@chakra-ui/icons";
import optimizly_img from "../assets/optimizly.png";
import indiegogo_img from "../assets/Indiegogo.png";
import monday_img from "../assets/monday_img.png";
import foryou_img from "../assets/ForYou.com.png";
import yourshop_img from "../assets/yourshop.com.png";

const project_data = [
  {  id:5,
    project_name : "YourShop.com",
    detail : "YourShop is a E-commerce website for men, women and kids, that too all under one roof. This platform not only keep all your favourite products but also you'll be able to buy all your favourite fashion products online at your convenience with best of the prices.",
    creater : "A individual project Developed within 25 days.",
    image : yourshop_img,
    github : "https://github.com/BhavikDholu/YourShop.com",
    deploy : "https://yourshop-hazel.vercel.app/",
    TechStack : "reactjs, redux, redux-thunk, nodejs, css, mongodb,  mongoose, expressjs, cyclic, chakra-ui, vercel"
  },
  {  id:1,
    project_name : "Optimizely-Clone",
    detail : "Optimizely is an American company that provides digital experience platform software as a service.",
    creater : "A collaborative project Developed within 5 days, with a team of 5.",
    image : optimizly_img,
    github : "https://github.com/BhavikDholu/optimizely.com-clone",
    deploy : "https://funny-kataifi-02e4e4.netlify.app/index.html",
    TechStack : "Javascript, HTML, CSS, Bootstrap"
 },
 {  id:2,
  project_name : "Indiegogo-Clone",
  detail : "Indiegogo is a crowdfunding platform empowering people around the world to fund project that matter to them",
  creater : "A individual project Developed within 5 days.",
  image : indiegogo_img,
  github : "https://github.com/BhavikDholu/indiegogo.com-clone",
  deploy : "https://brilliant-shortbread-d82a11.netlify.app/",
  TechStack : "Javascript, HTML, CSS, Bootstrap"
},
{  id:3,
  project_name : "Monday.com-Clone",
  detail : "Monday.com is a cloud-based platform that allows users to create their own applications and project management software.",
  creater : "A individual project Developed within 3 days.",
  image : monday_img,
  github : "https://github.com/BhavikDholu/monday.com-clone/tree/main/rct_project",
  deploy : "https://astonishing-zabaione-3084ac.netlify.app/",
  TechStack : "React, CSS, Chakra-Ui"
},
{  id:4,
  project_name : "ForYou.com-Clone",
  detail : "ForYou.com is clone of Reliance Digital E-commerce website, Reliance Digital is India’s fastest growing online retail store for electronic products. This project was completed in 5 days during the Unit Week at Masai School",
  creater : "A collaborative project Developed within 4 days, with a team of 3.",
  image : foryou_img,
  github : "https://github.com/PoojaBijwal/luxuriant-square-3578",
  deploy : "https://comforting-concha-d43513.netlify.app/",
  TechStack : "React, CSS, Chakra-Ui"
}
];

const Project = () => {
  return (
    <Box mt={'60px'} id="project">
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              Projects
            </Text>
       </Heading>
      <Flex direction={'column'} gap={'30px'} mt='40px'>
      {
        project_data.map((project)=><Container key={project.id} maxW={'5xl'} border={'1px solid'} borderRadius="20px" borderColor={"gray.500"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 18 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'auto'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                objectFit='cover'
                src={project.image}
              />
            </Box>
          </Flex>  
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
              <Text
                as={'span'}
                textDecoration={'underline'}
                >
                {project.project_name}
              </Text>
            </Heading>
            <List spacing={3} color='gray.400'>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  {
                    project.detail
                  }
                </ListItem>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  {project.creater}
                </ListItem>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  TechStack:- {project.TechStack}
                </ListItem>
            </List>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'row', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.600'}
                _hover={{ bg: 'blue.500' }}>
                <Link href={project.deploy} isExternal>Deploy <ExternalLinkIcon/></Link>
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.600'}
                _hover={{ bg: 'blue.500' }}>
                <Link href={project.github} isExternal>Github <ExternalLinkIcon/></Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>)
      }
      </Flex>
    </Box>
  )
}

export default Project

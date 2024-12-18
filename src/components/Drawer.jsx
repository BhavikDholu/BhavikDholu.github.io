import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link as Rlink } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const link = [
    { id: "home", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "skill", title: "Skills" },
    { id: "project", title: "Project" },
    { id: "git", title: "Git Status" },
    { id: "contact", title: "Contact" },
  ];
  function openInNewTab() {
    onClose();
    window.open("https://drive.google.com/file/d/1QC3ExHca-NkwwC0UKDLebGJFlo8du0Sr/view?usp=sharing", '_blank').focus();
  }
  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <HamburgerIcon boxSize="2em" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex direction={"column"}>
              {link.map((e) => (

                <Rlink
                  key={e.id}
                  activeClass="active"
                  to={e.id}
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-92}
                >
                  <Button mt={5} w='100%' onClick={onClose} bg='gray.400'>
                    {e.title}
                  </Button>
                </Rlink>

              ))}
              <Button mt={5} w='100%' bg='gray.400' onClick={openInNewTab}>
                Resume <ExternalLinkIcon />
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;

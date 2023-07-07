import React from "react";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Center,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
// import logo from './assets/logo.png';,
import pp from "./assets/profile.png";
import logo from "./assets/Group.png";
// import { Center, Divider } from '@chakra-ui/react/dist';
const Navbar = () => {
  return (
    <>
    <Flex alignItems="center" padding="0.6rem">
      <Box>
        <Stack direction="row" h="50px" p={4}>
          <Image src={logo} h="40px" />
          <Divider orientation="vertical" h="40px" ml="50px"  />
          
          <Stack direction="column">
          <Text fontSize='xs' position="absolute" mt="0" > --- ITSM </Text>
          <Text fontSize='lg' position="absolute" mt="10px" color="#1296B0"  style={{ cursor: "pointer" }} >Dashboard </Text>
          </Stack>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <Image src={pp} alt="Profile" boxSize="40px" borderRadius="full" />
      </Box>
    </Flex>
    <Divider />
    </>
  );
};

export default Navbar;

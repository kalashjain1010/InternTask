import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import logo from "./assets/Group.png";
import logo1 from "./assets/Group1.png";
import rec from "./assets/Rectangle.png";
import pep from "./assets/people.png";
// import { Text } from '@chakra-ui/react/dist';

const LoginPage = () => {
  return (

      <Flex height="100vh">
        <Box width="40%" bg="#1296b0" bgSize="cover" bgPos="center">
          <Image src={rec} mt="120px" ml="90px" />
        </Box>
        <Image position="absolute" src={pep} mt="60px" ml="30px" />
        <Flex flex="1" align="center" justify="center" flexDirection="column">
          <Box marginBottom="2rem">
            <Image
              src={logo}
              alt="Logo"
              boxSize="100px"
              width="200px"
              height="50px"
            />
          </Box>
          <Box>
            <Text color="#1296b0" height="30px">
              Login
            </Text>
            <Input
              type="text"
              placeholder="Email Id/Username"
              width="250px"
              marginBottom="1rem"
            />
          </Box>
          <Box>
            <Input
              type="password"
              placeholder="Password"
              width="250px"
              marginBottom="1rem"
            />
            <Text
              color="#1296b0"
              mb="10px"
              p="0px"
              fontSize="xs"
              ml="150px"
              style={{ cursor: "pointer" }}
            >
              Forget password
            </Text>
          </Box>
          <Box>
            <Button colorScheme="blue" width="250px" bg="#1296b0">
              Login to People
            </Button>
          </Box>
          <Image src={logo1} position="absolute" height="80px" mt="500px" />
        </Flex>
      </Flex>
   
  );
};

export default LoginPage;

import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Text,
  HStack,
  MenuList,
  Menu,
  MenuButton,
  MenuItem,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";
import pei from "./assets/pie.png";
import pie2 from "./assets/pie2.png";
import pie3 from "./assets/pie3.png";
import gg2 from "./assets/gg2.png";
import gg1 from "./assets/gg1.png";
import gg3 from "./assets/gg3.png";
import gg4 from "./assets/gg4.png";
import gg5 from "./assets/gg5.png";
import g3 from "./assets/g3.png";
import rate from "./assets/rate.png";

function Main() {
  const DateButton = () => {
    const [selectedDate, setSelectedDate] = React.useState("2023");

    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  };
  return (
    <>
      <Box
        width={"100px"}
        textAlign={"center "}
        pos={"absolute"}
        mt={"-700px"}
        ml={"750px"}
        color={"#1296b0"}
        paddingBottom={"5px"}
        borderBottomWidth={"2.2px"}
        borderBottomColor={"#1296b0"}
      >
        IT Desk{" "}
      </Box>
      <Box
        // border={"10px solid"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
        position={"absolute"}
        mt={"150px"}
        ml="250px"
      >
        <Text ml="20px">
          Top Requestes - 20/05/23 and 20/06/23
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="blue"
              variant="outline"
              position={"relative"}
              ml="680px"
            >
              {" "}
              select date{" "}
            </MenuButton>
            <MenuList>
              <MenuItem>2023</MenuItem>
              <MenuItem>2024</MenuItem>
              <MenuItem>2025</MenuItem>
              {/* Add more date options as needed */}
            </MenuList>
          </Menu>
        </Text>
        <Divider />
        <Box pos={"relative"} ml={"40px"}>
          <HStack>
            <Box m="20px">
              <Text
                borderBottom={"2px"}
                borderBottomColor={"#f6f6f6"}
                paddingBottom={"5px"}
              >
                Top 5 Request Categories
              </Text>
              <Card
                variant={"filled"}
                bgColor={"#fafafa"}
                borderRadius={"20px"}
                h="270px"
                position={"relative"}
                mt="10px"
              >
                <CardHeader display={"flex"} flexDir={"row"}>
                  <Image objectFit={"none"} src={pei}></Image>
                  <Box mb={"10px"}>
                    <Image mt={"15px"} src={gg1}></Image>
                    <Image mt={"15px"} src={gg2}></Image>
                    <Image mt={"15px"} src={gg3}></Image>
                    <Image mt={"15px"} src={gg4}></Image>
                    <Image mt={"15px"} src={gg5}></Image>
                  </Box>
                </CardHeader>
              </Card>
            </Box>
            <Box m="20px">
              <Text
                borderBottom={"2px"}
                borderBottomColor={"#f6f6f6"}
                paddingBottom={"5px"}
              >
                Top 5 Service Categories
              </Text>

              <Image position={"relative"} mt="10px" src={pie2} />
            </Box>
            <Box m="20px">
              <Text
                borderBottom={"2px"}
                borderBottomColor={"#f6f6f6"}
                paddingBottom={"5px"}
              >
                Top 5 Request Categories
              </Text>
              <Card
                variant={"filled"}
                bgColor={"#fafafa"}
                borderRadius={"20px"}
                h="270px"
                position={"relative"}
                mt="10px"
              >
                <CardHeader display={"flex"} flexDir={"row"}>
                  <Image objectFit={"none"} src={pie3}></Image>
                  <Box mb={"10px"}>
                    <Image src={g3} />
                  </Box>
                </CardHeader>
              </Card>
            </Box>
          </HStack>
          <HStack></HStack>
        </Box>

        <Box pos={"relative"} ml={"40px"}>
          <HStack>
            <Box m="20px">
              <Text
                borderBottom={"2px"}
                borderBottomColor={"#f6f6f6"}
                paddingBottom={"5px"}
              >
                Top 5 Request Categories
              </Text>
              <Card
                variant={"filled"}
                bgColor={"#fafafa"}
                borderRadius={"20px"}
                h="270px"
                position={"relative"}
                mt="10px"
              >
                <CardHeader display={"flex"} flexDir={"row"}>
                  <Image objectFit={"none"} src={pei}></Image>
                  <Box mb={"10px"}>
                    <Image mt={"15px"} src={gg1}></Image>
                    <Image mt={"15px"} src={gg2}></Image>
                    <Image mt={"15px"} src={gg3}></Image>
                    <Image mt={"15px"} src={gg4}></Image>
                    <Image mt={"15px"} src={gg5}></Image>
                  </Box>
                </CardHeader>
              </Card>
            </Box>
            <Box ml="20px" mt={"-120px"}>
              <Text
                borderBottom={"2px"}
                borderBottomColor={"#f6f6f6"}
                paddingBottom={"5px"}
              >
                Overall Rating
              </Text>

              <Card
                variant={"filled"}
                bgColor={"#fafafa"}
                borderRadius={"20px"}
                // h="270px"
                position={"relative"}
                mt="10px"
              >
                <Box display={"flex"} flexDir={"row"}>
                  <Text ml={"10px"} fontSize={"smaller"}>
                    Final OPs Rating
                  </Text>
                  <Text ml={"60px"} fontSize={"smaller"}>
                    Overall Rating:27
                  </Text>
                  <Text ml={"80px"} fontSize={"smaller"}>
                    ITSM Rating
                  </Text>
                  <Text ml={"80px"} mr={"10px"} fontSize={"smaller"}>
                    Overall Rating:20
                  </Text>
                </Box>
                <Box display={"flex"} mt={"10px"} flexDir={"row"}>
                  <Image ml={"10px"} objectFit={"none"} src={rate} />
                  <Image ml={"80px"} objectFit={"none"} src={rate} />
                </Box>
              </Card>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Main;

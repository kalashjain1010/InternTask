import React from "react";
import Navbar from "./Navbar";
import { Box, HStack, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import TableCRUDExample from "./tableCrud";
// import CustomTable from "./CustomTable";?

function Dashboard2() {
  return (
    <Box alignItems={"none"}>
      <Stack>
        <Navbar />
        <HStack>
        <Sidebar />
        {/* <Main /> */}
        <TableCRUDExample />
        </HStack>
      </Stack>
    </Box>
  );
}

export default Dashboard2;

import React from "react";
import Navbar from "./Navbar";
import { Box, HStack, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import CustomTable from "./CustomTable";

function Dashboard() {
  return (
    <Box alignItems={"none"}>
      <Stack>
        <Navbar />
        <HStack>
        <Sidebar />
        <CustomTable />
        </HStack>
      </Stack>
    </Box>
  );
}

export default Dashboard;

import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
      <Box height="100vh" width="200px">
        <VStack p="0" pt={4}>
          <Button colorScheme="teal " variant='outline' bgColor={"-moz-initial"} >---- IT dashboaed</Button>
          <Button colorScheme="teal " variant='outline' bgColor={"-moz-initial"} width={"80%"} >---- IT Ticket</Button>
        </VStack>
      </Box>
   
  );
};

export default Sidebar;
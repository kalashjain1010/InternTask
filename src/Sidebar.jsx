import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DASHBOARD, TABLE } from './routes';

const Sidebar = () => {
  return (
      <Box height="100vh" width="200px">
        <VStack p="0" pt={4}>
          <Link to={DASHBOARD}>
          <Button colorScheme="teal " variant='outline' bgColor={"-moz-initial"} > IT dashboard</Button>
          </Link>
          <Link to={TABLE}>
          <Button colorScheme="teal " textAlign={"center"} variant='outline' bgColor={"-moz-initial"}   >---- IT Ticket</Button>
          </Link>
        </VStack>
      </Box>
   
  );
};

export default Sidebar;
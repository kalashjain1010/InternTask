import React, { useMemo, useState } from 'react';
import { Box, ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, Input, FormLabel } from '@chakra-ui/react';
import { useTable, usePagination } from 'react-table';


const data = [
  {
    id: 1,
    requestNo: 'REQ001',
    status: 'Open',
    serviceType: 'Repair',
    category: 'Electrical',
    description: 'Repair electrical wiring',
    location: 'New York',
    createdOn: '2023-07-05',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  {
    id: 2,
    requestNo: 'REQ002',
    status: 'Pending',
    serviceType: 'Installation',
    category: 'Plumbing',
    description: 'Install new bathroom fixtures',
    location: 'Los Angeles',
    createdOn: '2023-07-06',
  },
  
  
  // Add more data as needed
];

const columns = [
  { Header: 'Actions', accessor: 'actions' },
  { Header: 'Request No.', accessor: 'requestNo' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Service Type', accessor: 'serviceType' },
  { Header: 'Category', accessor: 'category' },
  { Header: 'Description', accessor: 'description' },
  { Header: 'Location', accessor: 'location' },
  { Header: 'Created On', accessor: 'createdOn' },
];

const TableCRUDExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedRow, setSelectedRow] = useState({});
    const [formData, setFormData] = useState({});
    const [tableData, setTableData] = useState(data);
  
    const handleAddRow = () => {
      onOpen();
    };
  
    const handleEditRow = (row) => {
      setSelectedRow(row);
      setFormData(row.original);
      onOpen();
    };
  
    const handleDeleteRow = (row) => {
      const newData = tableData.filter((data) => data.id !== row.original.id);
      setTableData(newData);
    };
  
    const handleSaveChanges = () => {
      if (formData.id) {
        const updatedData = tableData.map((data) => (data.id === formData.id ? formData : data));
        setTableData(updatedData);
      } else {
        const newId = tableData.length > 0 ? tableData[tableData.length - 1].id + 1 : 1;
        const newRow = { ...formData, id: newId };
        setTableData([...tableData, newRow]);
      }
      onClose();
    };
  
    const columnsMemo = useMemo(() => columns, []);
    const dataMemo = useMemo(() => tableData, [tableData]);
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      state: { pageIndex, pageSize },
      gotoPage,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      pageCount,
    } = useTable(
      {
        columns: columnsMemo,
        data: dataMemo,
        initialState: { pageIndex: 0 },
      },
      usePagination
    );
  
    return (
      <ChakraProvider>
        <Box p={4}>
          <Button colorScheme="blue" bgColor={"#128fa7"} mb={4} onClick={handleAddRow}>
          Raise It desk Ticket
          </Button>
          <Table {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                  ))}
                  <Th></Th>
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    ))}
                    <Td>
                      <Button colorScheme="blue" size="sm" onClick={() => handleEditRow(row)}>
                        Edit
                      </Button>
                      <Button colorScheme="red" size="sm" ml={2} onClick={() => handleDeleteRow(row)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Box mt={4}>
            <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </Button>
            <Button onClick={previousPage} disabled={!canPreviousPage} ml={2}>
              {'<'}
            </Button>
            <Button onClick={nextPage} disabled={!canNextPage} ml={2}>
              {'>'}
            </Button>
            <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} ml={2}>
              {'>>'}
            </Button>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
          </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedRow.id ? 'Edit Row' : 'Add Row'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Request No.</FormLabel>
              <Input
                type="text"
                value={formData.requestNo || ''}
                onChange={(e) => setFormData({ ...formData, requestNo: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Input
                type="text"
                value={formData.status || ''}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Service Type</FormLabel>
              <Input
                type="text"
                value={formData.serviceType || ''}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Created On</FormLabel>
              <Input
                type="text"
                value={formData.createdOn || ''}
                onChange={(e) => setFormData({ ...formData, createdOn: e.target.value })}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSaveChanges}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    );
  };

  
  export default TableCRUDExample;
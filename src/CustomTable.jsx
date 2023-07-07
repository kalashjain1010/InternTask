import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { data, heading } from "@/data";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import ReactPaginate from "react-paginate";
  
  const CustomTable = () => {
    const [isLoading, setIsLoading] = useState(false)
  
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
  
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handleClick = (e: any) => {
      const newOffset = (e.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
    return (
      <Table className="">
        <TableHeader>
          <TableRow>
            {heading.map((item, index) => (
              <TableHead key={index}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {currentItems.map((item) => (
            <>
              <TableRow>
                {item.map((dataItem, idx) => (
                  <TableCell key={idx}>{dataItem}</TableCell>
                ))}
              </TableRow>
            </>
          ))}
        </TableBody>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handleClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </Table>
    );
  };
  export default CustomTable;
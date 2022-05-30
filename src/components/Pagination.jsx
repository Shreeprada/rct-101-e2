import React from "react";
import {Button,ButtonGroup,Select} from '@chakra-ui/react';
const Pagination = ({page,limit,total,setLimit,setPage}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const limitchange=(e)=>{
    setLimit(Number(e.target.value))};
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={limitchange}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage((Math.floor(total/3)))}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;

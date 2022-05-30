import {React,useEffect,useState} from "react";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import {Flex,Grid} from '@chakra-ui/react';
import axios from "axios";
const Products = () => {
  const [dataList,setDataList]=useState([]);
  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(3);
  const [total,setTotal]=useState("");
  useEffect(()=>{
    const getdata=()=>{
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((d)=>{
        console.log(d.data);
        setTotal(d.headers["x-total-count"]);
        setDataList(d.data);
        console.log("datalist",dataList);
      });
    };
    getdata();
  },[page,limit]);

  
  // TODO: Remove below const and instead import them from chakra
 // const Flex = () => <div />;
 // const Grid = () => <div />;

  return (
    <Flex alignItems='center' gap='2' direction='column'>
      {/*  AddProduct */}
      <AddProduct dataList={dataList} setDataList={setDataList}/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{/* List of Products */}
      {dataList.map((item)=>
       <Product item={item}/>)}
      </Grid>
      {/* Pagination */}
      <Pagination page={page} limit={limit} total={total} setLimit={setLimit} setPage={setPage}/>
    </Flex>
  );
};

export default Products;

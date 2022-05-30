import {React,useState} from "react";
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import axios from "axios";

const AddProduct = ({dataList,setDataList}) => {
  const [title,setTitle]=useState("");
  const [category,setcategory]=useState("");
  const [gender,setGender]=useState("");
  const [price,setPrice]=useState("");
  const changetitle=(e)=>{setTitle(e.target.value)};
  const changecategory=(e)=>{
    setcategory(e.target.value)
  };
  const changegender=(e)=>{console.log(e.target);
    setGender(e.target.value)
  };
  const changeprice=(e)=>{setPrice(e.target.value)};
  const saveInfo=()=>{
    axios.get(`http://localhost:8080/products`,{
      method:"POST",
      headers:{"content-type":"application/json",},
      body:JSON.stringify({
        "title":title,
        "category":category,
        "gender":gender,
        "price":price,
      }),
    })
    .then((d)=>{
      setDataList([...dataList,d]);
    });
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6} >
          <Input data-cy="add-product-title" placeholder="add Title" onChange={changetitle}/>
          <Select data-cy="add-product-category" onChange={changecategory}>
            <option data-cy="add-product-category-shirt" value="shirt">shirt</option>
            <option data-cy="add-product-category-pant" value="pant">pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" >
            <Radio data-cy="add-product-gender-male" value="male" onChange={changegender}>male</Radio>
            <Radio data-cy="add-product-gender-female" value="female" onChange={changegender}>female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex" onChange={changegender}>unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="add price" onChange={changeprice}/>
          <Button data-cy="add-product-submit-button" variant='ghost' onClick={saveInfo}>submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;

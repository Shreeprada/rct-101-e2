import React from "react";
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
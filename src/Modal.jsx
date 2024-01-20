import{Modal as ChakraModal}from'@chakra-ui/react'
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const Modal = ({renderTodoForm ,  onClose ,isOpen}) => {
    return (
        <ChakraModal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {renderTodoForm}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    )
}
export default Modal
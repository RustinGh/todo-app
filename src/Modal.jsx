import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import TodoForm from "./TodoForm";

const Modal = ({ isOpen, onClose, onTodosChange }) => {
  return (
    <ChakraModal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Todo Modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TodoForm onTodosChange={onTodosChange} onModalClose={onClose} />
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
export default Modal;

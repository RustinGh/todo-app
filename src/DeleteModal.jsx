import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button
} from "@chakra-ui/react"
const DeleteModal = ({ onDeleteTodo, todo, isOpen, onClose }) => {
    return (
        <>

            <Modal 
            blockScrollOnMount={false} 
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
          <Text color='red'>
                            delete todo
                        </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Are you sure about delete {todo?.title} Todo?
          </ModalBody>
          <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant='ghost' onClick={() => {
                    onDeleteTodo(todo?.id)
                    onClose()
                    }}>
                        Yes i'm sure
                </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
export default DeleteModal
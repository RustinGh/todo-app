import { Center, Flex, Text, Button } from "@chakra-ui/react"
import Modal from "./Modal"
import TodoForm from "./TodoForm"
import {useState } from "react"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <>
      <Center>
        <Flex justify='space-around' w='100vw' h='15vh' align='center'>
          <Text fontSize='3xl' color='skyblue'>Todo App</Text>
          <Button size='md' px='40px' color='white' colorScheme='blue' onClick={openModal}>create todo</Button>
        </Flex>
      </Center>
      {modalIsOpen === true? <Modal onClose={closeModal} isOpen={openModal} renderTodoForm={<TodoForm CloseModal={closeModal}/>}/>: null}
    </>
  )
}

export default App

import { Text, Button, HStack } from "@chakra-ui/react"
import Modal from "./Modal"
import { useState } from "react"

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [todos, setTodos] = useState([])

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
  const updateTodos = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
        <HStack justifyContent='space-around'>
          <Text fontSize='3xl' color='skyblue'>Todo App</Text>
          <Button size='md' px='40px' color='white' colorScheme='blue' onClick={openModal}>Create</Button>
        </HStack>
      <Modal isOpen={isOpenModal} onClose={closeModal} onTodosChange={updateTodos}/>
    </>
  )
}

export default App

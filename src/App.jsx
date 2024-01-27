import { Text, Button, HStack } from "@chakra-ui/react"
import Modal from "./Modal"
import TodosList from "./TodosList"
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
  const deleteTodo = (deleted) => {
    setTodos(deleted)
  }

  return (
    <>
        <HStack justifyContent='space-around'>
          <Text fontSize='3xl' color='teal'>Todo App</Text>
          <Button size='lg' colorScheme='teal' onClick={openModal}>Create</Button>
        </HStack>
        <TodosList todos={todos} deleteTodo={deleteTodo}/>
      <Modal isOpen={isOpenModal} onClose={closeModal} onTodosChange={updateTodos}/>
    </>
  )
}

export default App

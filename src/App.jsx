import { Center, Flex, Text, Button, Box } from "@chakra-ui/react"
import Modal from "./Modal"
import { Fragment, useState } from "react"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => {
    setModalIsOpen(true)
  }
  const modalClose = (close) => {
    setModalIsOpen(close)
  }
  return (
    <>
      <Center>
        <Flex justify='space-around' w='100vw' h='15vh' align='center'>
          <Text fontSize='3xl' color='skyblue'>Todo App</Text>
          <Button size='md' px='40px' color='white' colorScheme='blue' onClick={openModal}>create todo</Button>
        </Flex>
      </Center>
      {modalIsOpen === true? <Modal close={modalClose}/>: null}
    </>
  )
}

export default App

import { Text, Button, HStack, useDisclosure } from "@chakra-ui/react";
import Modal from "./Modal";
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  const onDeleteTodo = (deleted) => {
    setTodos(deleted);
  };

  return (
    <>
      <HStack justifyContent="space-around">
        <Text fontSize="3xl" color="teal">
          Todo App
        </Text>
        <Button size="lg" colorScheme="teal" onClick={onOpen}>
          Create
        </Button>
      </HStack>
      <TodosList todos={todos} onDeleteTodo={onDeleteTodo} />
      <Modal
        title="Create Todo"
        isOpen={isOpen}
        onClose={onClose}
        body={<TodoForm onTodosChange={updateTodos} onModalClose={onClose} />}
      />
    </>
  );
}

export default App;

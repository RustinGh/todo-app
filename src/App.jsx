import { Text, Button, HStack, useDisclosure } from "@chakra-ui/react";
import Modal from "./Modal";
import TodosList from "./TodosList";
import Form from "./TodoForm";
import useLocalSrorage from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalSrorage("todos", []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addTodo = (todo) => {
    const nextTodosValue = [...todos, todo];
    setTodos(nextTodosValue);
  };
  const deleteTodo = (todoId) => {
    const nextTodosValue = todos.filter((todo) => todo.id !== todoId);
    setTodos(nextTodosValue);
  };
  const editTodo = (editedTodo) => {
    const { id, title, description } = editedTodo;
    const nextTodosValues = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.description = description;
      }
      return todo;
    });
    setTodos(nextTodosValues);
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
      <TodosList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
      <Modal
        title="Create Todo"
        isOpen={isOpen}
        onClose={onClose}
        body={<Form onSubmit={addTodo} onModalClose={onClose} />}
      />
    </>
  );
}

export default App;

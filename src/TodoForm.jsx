import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialTodo = {
  title: "",
  description: "",
  id: uuidv4(),
};

const TodoForm = ({ selectedTodo, onSubmit, onModalClose }) => {
  const [todo, setTodo] = useState(selectedTodo ? selectedTodo : initialTodo);
  const isValidTodo =
    todo.title.trim() !== "" && todo.description.trim() !== "";
  const handleTodoChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const submitTodo = (e) => {
    e.preventDefault();
    if (!isValidTodo) {
      alert("Please fill out the fields!");
      return;
    }
    const trimmedTodo = {
      ...todo,
      title: todo.title.trim(),
      description: todo.description.trim(),
    };
    onSubmit(trimmedTodo);
    onModalClose();
  };

  return (
    <form onSubmit={submitTodo}>
      <VStack>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleTodoChange}
          value={todo.title}
        />
        <Textarea
          height="100px"
          placeholder="Description"
          name="description"
          onChange={handleTodoChange}
          value={todo.description}
        />
        <Button color="white" colorScheme="teal" w="100%" type="submit">
          {selectedTodo ? "Edit" : "Add"}
        </Button>
      </VStack>
    </form>
  );
};
export default TodoForm;

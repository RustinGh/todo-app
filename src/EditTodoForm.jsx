import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const EditTodoForm = ({ todo, onEditTodo, onModalClose }) => {
  const [editedTodo, setEditedTodo] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
  });
  const isValidTodo =
    editedTodo.title.trim() !== "" && editedTodo.description.trim() !== "";
  const handleTodoChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };
  const submitEditTodo = (e) => {
    e.preventDefault();
    if (!isValidTodo) {
      alert("Please fill out the fields!");
      return;
    }
    const trimmedTodo = {
      ...editedTodo,
      title: editedTodo.title.trim(),
      description: editedTodo.description.trim(),
    };
    onEditTodo(trimmedTodo);
    onModalClose();
  };
  return (
    <form onSubmit={submitEditTodo}>
      <VStack>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleTodoChange}
          value={editedTodo.title}
        />
        <Textarea
          height="100px"
          placeholder="Description"
          name="description"
          onChange={handleTodoChange}
          value={editedTodo.description}
        />
        <Button color="white" colorScheme="teal" w="100%" type="submit">
          Edit
        </Button>
      </VStack>
    </form>
  );
};
export default EditTodoForm;

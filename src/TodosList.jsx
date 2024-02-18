import { Center, List, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Modal from "./Modal";
import DeleteActions from "./DeleteActions";
import EditTodoForm from "./EditTodoForm";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, onDeleteTodo, onEditTodo }) => {
  const {
    isOpen: showDeleteModal,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();
  const {
    isOpen: showEditModal,
    onOpen: openEditModal,
    onClose: closeEditModal,
  } = useDisclosure();
  const [todo, setTodo] = useState(null);

  const triggerDeleteModal = (todo) => {
    openDeleteModal();
    setTodo(todo);
  };
  const triggerEditModal = (todo) => {
    openEditModal();
    setTodo(todo);
  };
  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
    closeDeleteModal();
  };
  return (
    <>
      <Center mt="2rem">
        {todos.length === 0 ? (
          <Text>No todos</Text>
        ) : (
          <List width="50%">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                triggerDeleteModal={triggerDeleteModal}
                triggerEditModal={triggerEditModal}
              />
            ))}
          </List>
        )}
      </Center>
      <Modal
        isOpen={showDeleteModal}
        onClose={closeDeleteModal}
        title="Delete Todo"
        body={`Are you sure about delete ${todo?.title} Todo?`}
        footer={
          <DeleteActions
            onCancel={closeDeleteModal}
            onDeleteTodo={handleDeleteTodo}
          />
        }
      />
      <Modal
        isOpen={showEditModal}
        onClose={closeEditModal}
        title="Edit Todo"
        body={
          <EditTodoForm
            todo={todo}
            onEditTodo={onEditTodo}
            onModalClose={closeEditModal}
          />
        }
      />
    </>
  );
};

export default TodosList;

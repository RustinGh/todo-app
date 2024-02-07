import {
  Center,
  List,
  ListItem,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Modal from "./Modal";

const TodosList = ({ todos, onDeleteTodo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState(null);

  const deleteTodoById = (id) => {
    onDeleteTodo(todos.filter((todo) => todo.id !== id));
  };
  const openDeleteModal = (todo) => {
    onOpen();
    setTodo(todo);
  };
  const handleDeleteTodo = () => {
    deleteTodoById(todo?.id);
    onClose();
  };
  return (
    <Center mt="2rem">
      {todos.length === 0 ? (
        <Text>No todos</Text>
      ) : (
        <List width="50%">
          {todos.map((todo) => (
            <ListItem key={todo.id} boxShadow="xl" mb="1rem">
              <Card direction="row" alignItems="center">
                <CardBody>
                  <Text>
                    {todo.title.length > 20
                      ? todo.title.slice(0, 20) + "..."
                      : todo.title}
                  </Text>
                  <Text>
                    {todo.description.length > 40
                      ? todo.description.slice(0, 40) + "..."
                      : todo.description}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={() => openDeleteModal(todo)}>Delete</Button>
                </CardFooter>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Todo"
        body={<>Are you sure about delete {todo?.title} Todo?</>}
        footer={
          <>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" onClick={handleDeleteTodo}>
              Yes
            </Button>
          </>
        }
      />
    </Center>
  );
};

export default TodosList;

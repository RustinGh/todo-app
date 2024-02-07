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
import DeleteActions from "./DeleteActions";

const TodosList = ({ todos, onDeleteTodo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState(null);

  const openDeleteModal = (todo) => {
    onOpen();
    setTodo(todo);
  };
  const handleDeleteTodo = () => {
    const nextTodosValue = todos.filter((t) => t.id !== todo?.id);
    onDeleteTodo(nextTodosValue);
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
        body={`Are you sure about delete ${todo?.title} Todo?`}
        footer={
          <DeleteActions onCancel={onClose} onDeleteTodo={handleDeleteTodo} />
        }
      />
    </Center>
  );
};

export default TodosList;

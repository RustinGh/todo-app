import {
  ListItem,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
const TodoItem = ({ todo, triggerDeleteModal, triggerEditModal }) => {
  return (
    <ListItem boxShadow="xl" mb="1rem">
      <Card direction="row" alignItems="center">
        <CardBody>
          <Text w="60px" isTruncated>
            {todo.title}
          </Text>
          <Text w="200px" isTruncated>
            {todo.description}
          </Text>
        </CardBody>
        <CardFooter>
          <Button onClick={() => triggerDeleteModal(todo)}>Delete</Button>
          <Button onClick={() => triggerEditModal(todo)}>Edit</Button>
        </CardFooter>
      </Card>
    </ListItem>
  );
};

export default TodoItem;

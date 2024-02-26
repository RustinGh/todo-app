import {
  ListItem,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
const TodoItem = ({ todo, onDeleteModalOpen, onEditModalOpen }) => {
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
        <CardFooter gap={2}>
          <Button onClick={() => onDeleteModalOpen(todo)}>Delete</Button>
          <Button onClick={() => onEditModalOpen(todo)}>Edit</Button>
        </CardFooter>
      </Card>
    </ListItem>
  );
};

export default TodoItem;

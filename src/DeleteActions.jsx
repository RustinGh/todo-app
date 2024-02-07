import { Button } from "@chakra-ui/react";
const DeleteActions = ({ onCancel, onDeleteTodo }) => {
  return (
    <>
      <Button mr={3} onClick={onCancel} w="100px">
        Cancel
      </Button>
      <Button colorScheme="teal" onClick={onDeleteTodo} w="100px">
        Yes
      </Button>
    </>
  );
};

export default DeleteActions;

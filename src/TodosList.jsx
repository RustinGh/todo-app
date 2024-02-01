import { 
    Center,
    List,
    ListItem,
    Text,
    Button,
    Card,
    CardBody,
    CardFooter,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure 
} from "@chakra-ui/react"
import { useState } from "react"
import DeleteModal from "./DeleteModal"

const TodosList = ({ todos, onDeleteTodo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [todo, setTodo] = useState(null)

    const deleteTodoById = (id) => {
       onDeleteTodo(todos.filter(todo => todo.id !== id))
    }
    return(
        <Center mt='2rem'>
        {todos.length === 0 ? <Text>No todos</Text>
        :
        <List width='50%' >
        {todos.map((todo) => 
        <ListItem key={todo.id} boxShadow='xl' mb='1rem'> 
            <Card direction='row' alignItems='center'>
                <CardBody>
                <Text>{todo.title}</Text>
                <Text>{todo.description}</Text>
                </CardBody>
                <CardFooter>
                <Button onClick={() =>{
                    onOpen()
                    setTodo(todo)
                }}>Delete</Button>
                </CardFooter>
            </Card>
        </ListItem>
        )}
        </List>
        }
        <DeleteModal onDeleteTodo={deleteTodoById} todo={todo} isOpen={isOpen} onClose={onClose}/>
        </Center>
    )
}

export default TodosList
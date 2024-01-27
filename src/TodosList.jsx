import { 
    Center,
    List,
    ListItem,
    Text,
    Button,
    Card,
    CardBody,
    CardFooter 
} from "@chakra-ui/react"

const TodosList = ({ todos, deleteTodo }) => {
    const deleteTodos = (id) => {
        deleteTodo(todos.filter(todo => todo.id !== id))
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
                <Button onClick={() => deleteTodos(todo.id)}>Delete</Button>
                </CardFooter>
            </Card>
        </ListItem>
        )}
        </List>
        }
        </Center>
    )
}

export default TodosList
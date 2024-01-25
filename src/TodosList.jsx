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

const TodosList = ({ todos }) => {
    return(
        <Center mt='2rem'>
        {todos.length === 0 ? <Text>No todos</Text>
        :
        <List width='50%' >
        {todos.map((todo, index) => 
        <ListItem key={index} boxShadow='xl' mb='1rem'> 
            <Card direction='row' alignItems='center'>
                <CardBody>
                <Text>{todo.title}</Text>
                <Text>{todo.description}</Text>
                </CardBody>
                <CardFooter>
                <Button>Delete</Button>
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
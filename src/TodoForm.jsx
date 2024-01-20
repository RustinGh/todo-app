import { Button,  Input, Textarea ,VStack} from "@chakra-ui/react"
import { useState } from "react"
const TodoForm = () => {
    const [todo, setTodo] = useState({
        title:'',
        description: ''
    })
    const handleFieldsChange = (e) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value})
    }
    return (
        <form>
            <VStack>
                <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleFieldsChange}
                    value={todo.title}
                />
                <Textarea
                    height='100px'
                    placeholder="Description"
                    name="description"
                    onChange={handleFieldsChange}
                    value={todo.description}
                />
                <Button color='white' colorScheme='blue' w='100%'>Add</Button>
            </VStack>
        </form>
    )
}
export default TodoForm

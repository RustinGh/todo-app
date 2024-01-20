import { Button,  Input, Textarea ,VStack} from "@chakra-ui/react"
import { useState } from "react"
const TodoForm = () => {
    const [todoForm,setTodoForm] =useState({
        title:'',
        description: ''
    })
    const handleFieldsChange = (e) => {
        setTodoForm(preve => {
            return{
                ...preve,
                [e.target.name]:e.target.value
            }
        })
    }
    return (
        <form>
                <VStack>
                    <Input
                        type="text"
                        placeholder="Title"
                        w='25vw'
                        name="title"
                        onChange={handleFieldsChange}
                        value={todoForm.title}
                    />
                    <Textarea
                        height='100px'
                        placeholder="Description"
                        w='25vw'
                        name="description"
                        onChange={handleFieldsChange}
                        value={todoForm.description}
                    />
                    <Button color='white' colorScheme='blue' w='25vw'>Add</Button>
                </VStack>
        </form>
    )
}
export default TodoForm

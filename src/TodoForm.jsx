import { Button, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"

const TodoForm = ({ onTodosChange, onModalClose }) => {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })
    const isValidTodo = todo.title && todo.description
    const handleFieldsChange = (e) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value})
    }
    const submitTodo = (e) => {
        e.preventDefault()
        if(!isValidTodo) {
            alert('Please fill out the fields!')
           return
        }
        onTodosChange(todo)
        onModalClose()
    }

    return (
        <form onSubmit={submitTodo}>
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
                <Button color='white' colorScheme='teal' w='100%' type="submit">Add</Button>
            </VStack>
        </form>
    )
}
export default TodoForm

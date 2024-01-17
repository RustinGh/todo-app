import { Box, Button, Center, Flex, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
const TodoForm = ({ close }) => {
    const [todoForm,setTodoForm] =useState({
        title:'',
        description: ''
    })
    const handleChange = (e) => {
        setTodoForm(preve => {
            return{
                ...preve,
                [e.target.name]:e.target.value
            }
        })
    }
    return (
        <>
            <Button position='absolute' right='0' onClick={() => close(false)}>X</Button>
            <Box color={"black"}>
                <Flex direction='column' gap={5} >
                    <Input
                        type="text"
                        placeholder="Title"
                        w='25vw'
                        name="title"
                        onChange={handleChange}
                        value={todoForm.title}
                    />
                    <Textarea
                        height='100px'
                        placeholder="Description"
                        w='25vw'
                        name="description"
                        onChange={handleChange}
                        value={todoForm.description}
                    />
                    <Button color='white' colorScheme='blue' w='25vw'>Add</Button>
                </Flex>
            </Box>
        </>
    )
}
export default TodoForm

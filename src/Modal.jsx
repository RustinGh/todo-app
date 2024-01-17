import { Box} from "@chakra-ui/react"
import TodoForm from "./TodoForm"

const Modal = ({close}) => {
    return (
        <Box w='30vw' h='40vh' m='0 auto' position='relative'>
            <TodoForm close={close}/>
        </Box>
    )
}
export default Modal
'use client'
import { Card, CardBody, Flex, Text } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

// Context 
import { useThemeContext } from '../../context/theme'
const Todo = ({ todo, deleteTodo }) => {
  
  const { background, setBackground } = useThemeContext();

  return (
    <Card mb='1rem' key={todo.id} bg={background}>
        <CardBody>
            <Flex>
            <Text flexGrow="1">{todo.text}</Text>
            <CloseIcon onClick={() => deleteTodo(todo.id)} />
            </Flex>
        </CardBody>
    </Card>
  )
}

export default Todo
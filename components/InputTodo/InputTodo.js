import { Flex, Input, Button } from "@chakra-ui/react"

import { AddIcon } from "@chakra-ui/icons"

const InputTodo = ({ todo, setTodo, addToTodoList }) => {
  return (
    <Flex p="2rem">
        <Input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Basic usage' />
        <Button colorScheme='blue' onClick={addToTodoList}><AddIcon /></Button>
    </Flex>
  )
}

export default InputTodo
'use client'
import { Flex, Input, Button, Text, Heading } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import { useState, useEffect } from "react"

import Link from "next/link"
import Todo from "@/components/Todo/Todo"
import InputTodo from "@/components/InputTodo/InputTodo"

// Context 
import { useThemeContext } from '../../context/theme'

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const { background, setBackground } = useThemeContext()

  // Quand quelque chose change
  useEffect(() => {
    console.log("quelque chose a changé")
  })

  // Quand le composant est monté (quand la page est chargée)
  useEffect(() => {
    console.log('Le composant est monté');
  }, [])

  // Quand le state todos change
  useEffect(() => {
    console.log('Le state des Todos a changé')
  }, [todos])

  // Quand le composant est démonté
  useEffect(() => {
    return() => {
      console.log('Le composant est démonté')
    }
  })

  const addToTodoList = () => {
    if(todo !== '') {
      // {id: 1, text: 'faire les courses'}
      // {id: 2, text: 'faire le ménage'}
      let uuid = crypto.randomUUID()
      setTodos([...todos, {id: uuid, text: todo}])
      setTodo('')
    }
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredTodos)
  }

  return (
    <>
      <Link href="/">Accueil</Link>
      <Flex p='2rem'>
        <Button onClick={() => setBackground('#000000')}>Change the background of the todos</Button>
      </Flex>
      <InputTodo todo={todo} setTodo={setTodo} addToTodoList={addToTodoList} />
      <Heading as='h2' p='2rem'>Todos</Heading>
      <Flex direction="column" p="2rem">
        {todos.length > 0 ? (
          // Afficher les todos
          todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          })
        ) : (
          <Text>Pas de Todos pour le moment</Text>
        )}
      </Flex>
    </>
  )
}

export default TodoList
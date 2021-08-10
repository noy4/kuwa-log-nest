import { Box, chakra, Container, Flex, Grid, Heading, Input, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { DefaultApi, Todo } from '../openapi'

const initialTodo = { title: '', done: false, tags: [] }

export default function Home() {
  const [newTodo, setNewTodo] = useState<Todo>(initialTodo)
  const queryClient = useQueryClient()

  const api = new DefaultApi({
    basePath: 'http://localhost:3000',
  })

  const { data: todos = [] } = useQuery('todos', async () => {
    const { data } = await api.todosControllerFindAll()
    return data
  })

  const stillTodos = todos.filter((todo) => !todo.done)
  const doneTodos = todos.filter((todo) => todo.done)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    api.todosControllerCreate(newTodo).then(() => {
      setNewTodo(initialTodo)
      queryClient.setQueryData<Todo[]>('todos', (old) => [newTodo, ...(old || [])])
    })
  }

  return (
    <Box bg='gray.50' minH='100vh'>
      <Head>
        <title>くわログ</title>
        <meta name='description' content='くわの行動履歴をあなたにお届け' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container maxW='4xl'>
          <Heading size='4xl' pt='8' mb='8'>
            くわTodo
          </Heading>
          <Flex justify='center' mb={8}>
            <chakra.form mx='auto' maxW='xl' w='full' onSubmit={onSubmit}>
              <Input
                placeholder='Todoを追加'
                value={newTodo?.title}
                py={8}
                size='lg'
                shadow='base'
                required
                _focus={{ outline: 0, shadow: 'md' }}
                onChange={(e) => setNewTodo((old) => ({ ...old, title: e.target.value }))}
              />
              <button type='submit' hidden />
            </chakra.form>
          </Flex>
          <Grid gridTemplateColumns={{ sm: 'repeat(2, 1fr)' }} gap='8'>
            <VStack bg='teal.100' h={96} shadow='base' rounded='sm' align='stretch' px='4' py='4'>
              {stillTodos.map((todo, index) => (
                <Box key={index} bg='white' rounded='sm' display='flex' alignItems='center' px='2' py='3'>
                  <Box mr='2'>□</Box>
                  <Box>{todo.title}</Box>
                </Box>
              ))}
            </VStack>
            <VStack bg='teal.100' h={96} shadow='base' rounded='sm' align='stretch' px='4' py='4'>
              {doneTodos.map((todo, index) => (
                <Box key={index} bg='white' rounded='sm' display='flex' alignItems='center' px='2' py='3'>
                  <Box mr='2'>□</Box>
                  <Box>{todo.title}</Box>
                </Box>
              ))}
            </VStack>
          </Grid>
        </Container>

        {/* <div className='max-w-4xl w-full mx-auto px-4'>
          <h1 className='pt-8 text-6xl font-bold'>Kuwa Todo</h1>
          <div className='max-w-xs w-full bg-white rounded-sm shadow'>
            <input type='text' />
          </div>
          <div className='grid sm:grid-cols-2 gap-8 mt-8'>
            <div className='bg-white rounded-sm shadow px-4 py-2 h-96'>
              {stillTodos.map((todo, index: number) => (
                <div className='bg-purple-100 rounded-sm flex items-center my-2 px-2 py-3' key={index}>
                  <div className='mr-2'>□</div>
                  <div>{todo.title}</div>
                </div>
              ))}
            </div>
            <div className='bg-white rounded-sm shadow px-4 py-2 h-96'>
              {doneTodos.map((todo, index: number) => (
                <div className='bg-green-100 rounded-sm flex items-center my-2 px-2 py-3' key={index}>
                  <div className='mr-2'>☑︎</div>
                  <div>{todo.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </main>
    </Box>
  )
}

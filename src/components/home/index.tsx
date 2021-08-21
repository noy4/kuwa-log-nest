import { useTodos } from '@/common/hooks'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, chakra, Checkbox, Container, Flex, Grid, Heading, Input, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useHome } from './home.hooks'

export function Home() {
  const { newTodo, onSubmit, onChangeTodoInput, onCheck, onClickDelete } = useHome()
  const { stillTodos, doneTodos } = useTodos()

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
                onChange={onChangeTodoInput}
              />
              <button type='submit' hidden />
            </chakra.form>
          </Flex>

          <Grid gridTemplateColumns={{ sm: 'repeat(2, 1fr)' }} gap='8'>
            <VStack bg='teal.100' h={96} shadow='base' rounded='sm' align='stretch' px='4' py='4'>
              {stillTodos.map((todo, index) => (
                <Box key={index} role='group' bg='white' rounded='sm' display='flex' alignItems='center' px='2' py='3'>
                  <Checkbox isChecked={todo.done} mr={2} onChange={() => onCheck(todo)} />
                  <Box>{todo.title}</Box>
                  <CloseIcon
                    ml='auto'
                    w={6}
                    h={6}
                    p={1}
                    rounded='full'
                    color='gray.300'
                    cursor='pointer'
                    display='none'
                    _hover={{ bg: 'gray.50' }}
                    _groupHover={{ display: 'block' }}
                    onClick={() => onClickDelete(todo.id)}
                  />
                </Box>
              ))}
            </VStack>

            <VStack bg='teal.100' h={96} shadow='base' rounded='sm' align='stretch' px='4' py='4'>
              {doneTodos.map((todo, index) => (
                <Box key={index} bg='white' rounded='sm' display='flex' alignItems='center' px='2' py='3'>
                  <Checkbox isChecked={todo.done} mr={2} onChange={() => onCheck(todo)} />
                  <Box>{todo.title}</Box>
                </Box>
              ))}
            </VStack>
          </Grid>
        </Container>
      </main>
    </Box>
  )
}

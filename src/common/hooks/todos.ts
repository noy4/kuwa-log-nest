import { CreateTodoDto, Todo } from '@/openapi'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createApi } from '../api'

export function useTodos() {
  const api = createApi()
  const queryClient = useQueryClient()

  // Fetch
  const { data: todos = [] } = useQuery('todos', async () => {
    const { data } = await api.todosControllerFindAll()
    console.log('Fetched: Todo', data)
    return data
  })

  const stillTodos = todos.filter((todo) => !todo.done)
  const doneTodos = todos.filter((todo) => todo.done)

  // Create
  const { mutateAsync: createTodo, ...createProps } = useMutation(async (newTodo: CreateTodoDto) => {
    const { data: createdTodo } = await api.todosControllerCreate(newTodo)
    console.log('Created: Todo', createdTodo)
    queryClient.setQueryData<Todo[]>('todos', (old) => [createdTodo, ...(old ?? [])])
  })
  const todoCreate = { createTodo, ...createProps }

  // Delete
  const { mutateAsync: deleteTodo, ...deleteProps } = useMutation(async (id: string) => {
    const { data } = await api.todosControllerDelete(id)
    console.log('Deleted: Todo', data)

    const filterdTodos = todos.filter((todo) => todo.id !== id)
    queryClient.setQueryData('todos', filterdTodos)
  })
  const todoDelete = { deleteTodo, ...deleteProps }

  // Update
  const { mutateAsync: updateTodo, ...updateProps } = useMutation(async (updateTodoDto: Todo) => {
    const { data } = await api.todosControllerUpdate(updateTodoDto)
    console.log('Updated: Todo', data)

    const foundIndex = todos.findIndex((todo) => todo.id === updateTodoDto.id)
    const updatedTodos = [...todos]
    updatedTodos[foundIndex] = updateTodoDto
    queryClient.setQueryData('todos', updatedTodos)
  })
  const todoUpdate = { updateTodo, ...updateProps }

  return { todos, stillTodos, doneTodos, todoCreate, todoDelete, todoUpdate }
}

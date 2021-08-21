import { useTodos } from '@/common/hooks'
import { CreateTodoDto, Todo } from '@/openapi'
import { ChangeEvent, FormEvent, useState } from 'react'

const initialTodo = { title: '', done: false, tags: [] }

export function useHome() {
  const [newTodo, setNewTodo] = useState<CreateTodoDto>(initialTodo)
  const {
    todoCreate: { createTodo },
    todoDelete: { deleteTodo },
    todoUpdate: { updateTodo },
  } = useTodos()

  function onChangeTodoInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo((old) => ({ ...old, title: event.target.value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createTodo(newTodo).then(() => setNewTodo(initialTodo))
  }

  function onCheck(updateTodoDto: Todo) {
    updateTodo({ ...updateTodoDto, done: !updateTodoDto.done })
  }

  function onClickDelete(id: string) {
    deleteTodo(id)
  }

  return { newTodo, onChangeTodoInput, onSubmit, onCheck, onClickDelete }
}

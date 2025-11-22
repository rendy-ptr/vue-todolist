import type { Todo } from '@/types/todo'
import { ref } from 'vue'

const STORAGE_KEY = 'todos'

export const useTodos = () => {
  const todos = ref<Todo[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
  }

  const addTodo = (title: Todo['title'], status: Todo['status']) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      status,
    }
    todos.value.push(newTodo)
    saveToLocalStorage()
  }

  const deleteTodo = (id: Todo['id']) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    saveToLocalStorage()
  }

  const updateTodo = (id: Todo['id'], updated: Partial<Todo>) => {
    const index = todos.value.findIndex((todo) => todo.id === id)

    if (index !== -1) {
      todos.value[index] = {
        ...todos.value[index],
        ...updated,
      } as Todo
      saveToLocalStorage()
    }
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
  }
}

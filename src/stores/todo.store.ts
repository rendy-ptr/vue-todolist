import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

const STORAGE_KEY = 'todos'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref<Todo[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

  const addTodo = (title: Todo['title'], status: Todo['status']) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      status,
    }
    todos.value.push(newTodo)
  }

  const deleteTodo = (id: Todo['id']) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const updateTodo = (id: Todo['id'], updated: Partial<Todo>) => {
    const index = todos.value.findIndex((todo) => todo.id === id)

    if (index !== -1) {
      todos.value[index] = {
        ...todos.value[index],
        ...updated,
      } as Todo
    }
  }

  watch(todos, (val) => localStorage.setItem(STORAGE_KEY, JSON.stringify(val)), { deep: true })

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
  }
})

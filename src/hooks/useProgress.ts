import { computed } from 'vue'
import { useTodoStore } from '@/stores/todo.store'

export const useProgress = () => {
  const store = useTodoStore()

  const completedCount = computed(() => store.todos.filter((t) => t.status === 'completed').length)

  const progressPercent = computed(() => {
    if (store.todos.length === 0) return 0
    return Math.round((completedCount.value / store.todos.length) * 100)
  })

  return {
    completedCount,
    progressPercent,
  }
}

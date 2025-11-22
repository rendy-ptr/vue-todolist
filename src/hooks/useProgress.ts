import { computed } from 'vue'
import { useTodos } from '@/hooks/useTodos'

const { todos } = useTodos()

export const useProgress = () => {
  const completedCount = computed(() => todos.value.filter((t) => t.status === 'completed').length)

  const progressPercent = computed(() => {
    if (todos.value.length === 0) return 0
    return Math.round((completedCount.value / todos.value.length) * 100)
  })

  return {
    completedCount,
    progressPercent,
  }
}

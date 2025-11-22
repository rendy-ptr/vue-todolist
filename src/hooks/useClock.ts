import { ref, onMounted } from 'vue'

export const useClock = () => {
  const time = ref('')
  const date = ref('')

  const updateClock = () => {
    const now = new Date()

    time.value = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    })

    date.value = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  onMounted(() => {
    updateClock()
    setInterval(updateClock, 1000)
  })

  return {
    time,
    date,
  }
}

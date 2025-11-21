<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MainCard from '../organisms/MainCard.vue'

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
</script>

<template>
  <MainCard class="p-6">
    <div class="text-center">
      <div class="text-5xl font-bold mb-2">
        {{ time }}
      </div>

      <p class="text-sm opacity-70">
        {{ date }}
      </p>
    </div>
  </MainCard>
</template>

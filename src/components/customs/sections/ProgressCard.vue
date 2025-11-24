<script setup lang="ts">
import MainCard from '../organisms/MainCard.vue'
import { useProgress } from '@/hooks/useProgress'
import { useTodoStore } from '@/stores/todo.store'
const todoStore = useTodoStore()
const { completedCount, progressPercent } = useProgress()
</script>

<template>
  <MainCard class="p-6">
    <h3 class="font-semibold mb-4 text-lg">Today's Progress</h3>

    <p class="text-sm text-muted-foreground mb-2">
      {{ completedCount }} / {{ todoStore.todos.length }} completed
    </p>

    <div class="w-full h-3 bg-gray-200 rounded-md overflow-hidden">
      <div
        class="h-full bg-green-500 transition-all"
        :style="{ width: progressPercent + '%' }"
      ></div>
    </div>

    <p class="font-medium">{{ progressPercent }}%</p>
  </MainCard>
</template>

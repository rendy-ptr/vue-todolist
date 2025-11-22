<script setup lang="ts">
import MainCard from '../organisms/MainCard.vue'
import { useClock } from '@/hooks/useClock'

const { time, date } = useClock()
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

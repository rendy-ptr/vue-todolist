<script setup lang="ts">
import TodoListCard from '@/components/customs/sections/TodoListCard.vue'
import ClockCard from '@/components/customs/sections/ClockCard.vue'
import ProgressCard from '@/components/customs/sections/ProgressCard.vue'
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2">
        <TodoListCard />
      </div>
      <div class="flex flex-col gap-6">
        <ClockCard />
        <ProgressCard />
      </div>
    </div>
  </div>
</template>

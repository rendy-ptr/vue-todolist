<script setup lang="ts">
import MainCard from '../organisms/MainCard.vue'
import { Button } from '@/components/ui/button'
import { mockTodos } from '@/mocks/todo'
</script>

<template>
  <MainCard class="h-full p-6">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Todo List App</h3>
        <p>Total {{ mockTodos.length }} Todo</p>
      </div>
      <Button>Add New Task</Button>
    </div>
  </MainCard>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
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
      <Button class="cursor-pointer">Add New Task</Button>
    </div>
    <div class="mt-6 space-y-4">
      <Card
        v-for="todo in mockTodos"
        :key="todo.id"
        class="p-4 border rounded-md hover:bg-accent hover:cursor-pointer"
      >
        <h4 class="font-medium">{{ todo.title }}</h4>
        <p class="text-sm text-muted-foreground">Status: {{ todo.status }}</p>
      </Card>
    </div>
  </MainCard>
</template>

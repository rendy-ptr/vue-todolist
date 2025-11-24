<script setup lang="ts">
import { Card } from '@/components/ui/card'
import MainCard from '../organisms/MainCard.vue'
import { useTodoStore } from '@/stores/todo.store'

import CreateTodoModal from './CreateTodoModal.vue'
import UpdateTodoModal from './UpdateTodoModal.vue'
import { Button } from '@/components/ui/button'
import DeleteTodoModal from './DeleteTodoModal.vue'

const todoStore = useTodoStore()
</script>

<template>
  <MainCard class="h-full p-6">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Todo List App</h3>
        <p>Total {{ todoStore.todos.length }} Todo</p>
      </div>
      <CreateTodoModal />
    </div>
    <div class="mt-6 space-y-4">
      <Card
        v-for="todo in todoStore.todos"
        :key="todo.id"
        class="p-4 border rounded-md hover:bg-accent transition"
      >
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-medium">{{ todo.title }}</h4>
            <p class="text-sm text-muted-foreground">
              Status: <span class="font-medium">{{ todo.status }}</span>
            </p>
          </div>

          <div class="flex gap-2">
            <UpdateTodoModal :todo="todo" />

            <DeleteTodoModal :todo="todo" />
          </div>
        </div>
      </Card>
    </div>
  </MainCard>
</template>

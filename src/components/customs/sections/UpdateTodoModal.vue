<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import type { Todo } from '@/types/todo'
import { useTodos } from '../../../hooks/useTodos'
import { toast } from 'vue-sonner'

const { todo } = defineProps<{ todo: Todo }>()

const { updateTodo } = useTodos()

const title = ref(todo.title)
const status = ref<Todo['status']>(todo.status)

const handleSubmit = () => {
  updateTodo(todo.id, {
    title: title.value,
    status: status.value,
  })
  toast.success('Task updated successfully!')
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="cursor-pointer" variant="secondary" size="sm"> Update </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Task</DialogTitle>
        <DialogDescription>Masukkan data task baru.</DialogDescription>
      </DialogHeader>

      <div class="flex flex-col gap-3">
        <input v-model="title" class="border p-2 rounded" placeholder="Judul task" />

        <select v-model="status" class="border p-2 rounded">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <Button @click="handleSubmit">Simpan</Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

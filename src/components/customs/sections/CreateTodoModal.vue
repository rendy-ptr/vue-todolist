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
import { useTodoStore } from '@/stores/todo.store'
import { toast } from 'vue-sonner'

const { addTodo } = useTodoStore()

const title = ref('')
const status = ref<Todo['status']>('pending')

const handleSubmit = () => {
  addTodo(title.value, status.value)
  title.value = ''
  status.value = 'pending'
  toast.success('Task created successfully!')
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="cursor-pointer"> Add New Task </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Tambah Task</DialogTitle>
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

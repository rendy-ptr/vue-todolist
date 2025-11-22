<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useTodos } from '@/hooks/useTodos'
import { toast } from 'vue-sonner'
import type { Todo } from '@/types/todo'

const { todo } = defineProps<{ todo: Todo }>()

const { deleteTodo } = useTodos()

const handleDelete = () => {
  deleteTodo(todo.id)
  toast.success('Task deleted successfully!')
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button size="sm" variant="destructive"> Delete </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Yakin Ingin Menghapus ini?</AlertDialogTitle>
        <AlertDialogDescription>
          Data yang sudah dihapus tidak dapat dikembalikan lagi.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="handleDelete">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

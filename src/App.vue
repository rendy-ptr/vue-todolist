<script setup lang="ts">
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <main class="p-6">
      <RouterView />
    </main>
    <Toaster />
  </div>
</template>

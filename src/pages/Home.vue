<script setup lang="ts">
import MainCard from '@/components/customs/organisms/MainCard.vue'
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2">
        <MainCard class="h-full">
          <h1>Card Besar</h1>
        </MainCard>
      </div>

      <div class="flex flex-col gap-6">
        <MainCard>
          <h1>Card Kecil 1</h1>
        </MainCard>

        <MainCard>
          <h1>Card Kecil 2</h1>
        </MainCard>
      </div>
    </div>
  </div>
</template>

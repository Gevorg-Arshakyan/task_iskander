<template>
  <div class="min-h-screen w-screen flex flex-col">
    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <slot name="footer">
      <DefaultFooter />
    </slot>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import DefaultFooter from '@/components/footer/DefaultFooter.vue'
</script>

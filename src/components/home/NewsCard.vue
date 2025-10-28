<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
  >
    <!-- News Card Content -->
    <div
      class="relative h-48 p-6 flex flex-col justify-between"
      :style="{ backgroundImage: news.backgroundImage }"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"
        >
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div
          class="absolute bottom-4 left-4 w-12 h-8 bg-white rounded flex items-center justify-center"
        >
          <span class="text-xs font-bold text-gray-600">$50</span>
        </div>
      </div>

      <!-- Discount Badge -->
      <div class="relative z-10">
        <div class="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {{ news.discount }}
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col justify-end h-full">
        <h3 class="text-white font-semibold text-lg mb-4">
          {{ news.title }}
        </h3>

        <button
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-fit"
        >
          {{ news.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Additional styles if needed */
</style>

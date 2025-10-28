<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
  >
    <!-- Store Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-blue-600 text-xs font-bold">i</span>
        </div>
        <h3 class="text-blue-600 font-semibold">{{ store.name }}</h3>
      </div>

      <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">открыть в карте</button>
    </div>

    <!-- Store Details -->
    <div class="space-y-3">
      <!-- Address -->
      <div class="flex items-start space-x-3">
        <svg
          class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p class="text-sm text-gray-700">{{ store.address }}</p>
      </div>

      <!-- Hours -->
      <div class="flex items-center space-x-3">
        <svg
          class="w-5 h-5 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-sm text-gray-700">{{ store.hours }}</p>
      </div>

      <!-- Phone -->
      <div class="flex items-center space-x-3">
        <svg
          class="w-5 h-5 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <p class="text-sm text-gray-700">{{ store.phone }}</p>
      </div>
    </div>

    <!-- Arrow Icon -->
    <div class="flex justify-end mt-4">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Additional styles if needed */
</style>

<template>
  <section class="bg-gray-100 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-8 overflow-x-auto">
        <!-- Скидки -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span class="text-[#4A8FB9] text-xs font-bold">%</span>
          </div>
          <span class="text-sm text-gray-700">Скидки</span>
        </div>

        <!-- Акции -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span class="text-[#4A8FB9] text-xs font-bold">!</span>
          </div>
          <span class="text-sm text-gray-700">Акции</span>
        </div>

        <!-- Распродажа -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span class="text-[#4A8FB9] text-xs font-bold">S</span>
          </div>
          <span class="text-sm text-gray-700">Распродажа</span>
        </div>

        <!-- Подарки -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span class="text-[#4A8FB9] text-xs font-bold">G</span>
          </div>
          <span class="text-sm text-gray-700">Подарки</span>
        </div>

        <!-- Подарки (duplicate) -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span class="text-[#4A8FB9] text-xs font-bold">G</span>
          </div>
          <span class="text-sm text-gray-700">Подарки</span>
        </div>

        <!-- Empty circles for spacing -->
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic if needed
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

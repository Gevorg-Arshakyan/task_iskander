<template>
  <section class="bg-gray-100 py-4">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-6 overflow-x-auto">
        <!-- Скидки -->
        <div
          class="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img src="/cat1.png" alt="Скидки" class="w-full h-full" />
          </div>
          <span class="text-xs text-gray-700 font-medium">Скидки</span>
        </div>

        <!-- Акции -->
        <div
          class="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img src="/cat1.png" alt="Скидки" class="w-full h-full" />
          </div>
          <span class="text-xs text-gray-700 font-medium">Акции</span>
        </div>

        <!-- Распродажа -->
        <div
          class="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img src="/cat1.png" alt="Скидки" class="w-full h-full" />
          </div>
          <span class="text-xs text-gray-700 font-medium">Распродажа</span>
        </div>

        <!-- Подарки -->
        <div
          class="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img src="/cat1.png" alt="Скидки" class="w-full h-full" />
          </div>
          <span class="text-xs text-gray-700 font-medium">Подарки</span>
        </div>

        <!-- Подарки (duplicate) -->
        <div
          class="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img src="/cat1.png" alt="Скидки" class="w-full h-full" />
          </div>
          <span class="text-xs text-gray-700 font-medium">Подарки</span>
        </div>

        <!-- Empty circles for spacing -->
        <div class="flex flex-col items-center space-y-2 flex-shrink-0">
          <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
          <span class="text-xs text-gray-400">...</span>
        </div>
        <div class="flex flex-col items-center space-y-2 flex-shrink-0">
          <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
          <span class="text-xs text-gray-400">...</span>
        </div>
        <div class="flex flex-col items-center space-y-2 flex-shrink-0">
          <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
          <span class="text-xs text-gray-400">...</span>
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

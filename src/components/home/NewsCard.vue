<template>
  <div
    class="bg-white rounded-lg  overflow-hidden hover:shadow-md transition-shadow"
  >
    <!-- News Card Content -->
    <div
      class="relative h-48 p-6 pt-8 flex flex-col justify-between"
      :style="{ backgroundImage: `url('/off.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >

      <!-- Discount Badge -->
      <div class="relative z-10">
        <div class="inline-block  text-black px-3 py-1 rounded-full font-bold text-[24px] leading-[100%]">
          {{ news.discount }}
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col h-full">
        <h3 class="text-lack  text-lg mt-1 font-normal text-[15px] leading-[100%]">
          {{ news.title }}
        </h3>

        <button
          class="bg-[#0063A9] text-white mt-5 hover:bg-blue-700 transition-colors text-sm font-medium w-fit rounded-[11.07px] gap-[8.03px] px-[24px] py-[8px]
"
        >
          {{ news.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  news: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Additional styles if needed */
</style>

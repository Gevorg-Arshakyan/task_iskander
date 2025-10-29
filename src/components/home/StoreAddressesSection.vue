<template>
  <section class=" relative pb-8">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl text-black font-semibold text-[25px] leading-[100%]">Адреса магазинов</h2>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
<!--        &lt;!&ndash; Navigation Arrows &ndash;&gt;-->
<!--        <button-->
<!--          @click="previousSlide"-->
<!--          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow"-->
<!--        >-->
<!--          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--            <path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M15 19l-7-7 7-7"-->
<!--            />-->
<!--          </svg>-->
<!--        </button>-->

<!--        <button-->
<!--          @click="nextSlide"-->
<!--          class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow"-->
<!--        >-->
<!--          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--            <path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M9 5l7 7-7 7"-->
<!--            />-->
<!--          </svg>-->
<!--        </button>-->

        <!-- Store Cards Carousel -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StoreCard v-for="store in stores.slice(0, 3)" :key="store.id" :store="store" />
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StoreCard v-for="store in stores.slice(3, 6)" :key="store.id" :store="store" />
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8">
          <div class="flex space-x-1">
            <button
              v-for="(slide, index) in totalSlides"
              :key="index"
              @click="goToSlide(index)"
              class="h-1 transition-all duration-300 rounded-full cursor-pointer"
              :class="index === currentSlide ? 'w-8 bg-[#0063A9]' : 'w-2 bg-gray-300'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import StoreCard from './StoreCard.vue'

// Sample stores data
const stores = ref([
  {
    id: 1,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
  {
    id: 2,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
  {
    id: 3,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
  {
    id: 4,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
  {
    id: 5,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
  {
    id: 6,
    name: 'Iskender home',
    address: 'Кыргызстан, г. Бишкек ул. Турусбекова А167',
    hours: '08:00 - 22:00',
    phone: '+996 500 345 345',
  },
])

const currentSlide = ref(0)
const totalSlides = computed(() => Math.ceil(stores.value.length / 3))

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

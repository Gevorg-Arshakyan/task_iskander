<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Новости</h2>
        <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"> все </a>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- News Carousel -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NewsCard v-for="news in newsItems.slice(0, 3)" :key="news.id" :news="news" />
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NewsCard v-for="news in newsItems.slice(3, 6)" :key="news.id" :news="news" />
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import NewsCard from './NewsCard.vue'

// Sample news data
const newsItems = ref([
  {
    id: 1,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 6,
    title: 'На кухонную мебель',
    discount: '-50%',
    buttonText: 'Подробнее',
    backgroundImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
])

const currentSlide = ref(0)
const totalSlides = computed(() => Math.ceil(newsItems.value.length / 3))

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

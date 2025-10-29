<template>
  <section class=" relative">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl text-black font-semibold text-[25px] leading-[100%]">Аукционные товары</h2>
        <a href="#" class="text-[#3186C3] hover:text-blue-800 font-semibold text-[16px] leading-[100%]"> перейти в каталог </a>
      </div>

      <!-- Carousel Container -->
      <div class="">
        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          class="absolute left-9 top-1/2 -translate-y-1/2 -ml-4 z-10 cursor-pointer rounded-full  p-3 hover:shadow-xl transition-shadow"
        >
          <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62183 20.55L1.47183 12.4C0.509326 11.4375 0.509326 9.8625 1.47183 8.9L9.62183 0.75" stroke="#171717" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>

        <button
          @click="nextSlide"
          class="absolute right-9 top-1/2 -translate-y-1/2 -mr-4 z-10 cursor-pointer p-3 hover:shadow-xl transition-shadow"
        >
          <svg class="rotate-180" width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62183 20.55L1.47183 12.4C0.509326 11.4375 0.509326 9.8625 1.47183 8.9L9.62183 0.75" stroke="#171717" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>

        <!-- Products Carousel -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-6 gap-2.5">
                <ProductCard
                  v-for="product in auctionProducts.slice(0, 6)"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-6 gap-2.5">
                <ProductCard
                  v-for="product in auctionProducts.slice(6, 11)"
                  :key="product.id"
                  :product="product"
                />
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
              class="h-1 transition-all duration-300 rounded-full"
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
import ProductCard from './ProductCard.vue'

// Sample auction products data
const auctionProducts = ref([
  {
    id: 1,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 999,
  },
  {
    id: 2,
    name: 'Держатель для лейки BOOU PG605',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Держатель для лейки BOOU PG605',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Держатель для лейки BOOU PG605',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Держатель для лейки BOOU PG605',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Держатель для лейки BOOU PG605',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 1,
  },
  {
    id: 11,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/11.jpg',
    quantity: 999,
  },

])

const currentSlide = ref(0)
const totalSlides = computed(() => Math.ceil(auctionProducts.value.length / 4))

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

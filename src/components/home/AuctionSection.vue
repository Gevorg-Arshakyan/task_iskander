<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Аукционные товары</h2>
        <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"> перейти в каталог </a>
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

        <!-- Products Carousel -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AuctionProductCard
                  v-for="product in auctionProducts.slice(0, 4)"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AuctionProductCard
                  v-for="product in auctionProducts.slice(4, 8)"
                  :key="product.id"
                  :product="product"
                />
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
import AuctionProductCard from './AuctionProductCard.vue'

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
    image: '/api/placeholder/200/200',
    quantity: 999,
  },
  {
    id: 2,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '999999',
    originalPrice: '999999',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 2,
  },
  {
    id: 4,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 3,
  },
  {
    id: 5,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 2,
  },
  {
    id: 7,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 4,
  },
  {
    id: 8,
    name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
    price: '1294',
    originalPrice: '1294',
    currency: 'c',
    inStock: true,
    features: ['Комплект'],
    image: '/api/placeholder/200/200',
    quantity: 1,
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

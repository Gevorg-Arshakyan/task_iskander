<template>
  <section class=" ">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-[18px]">
        <h2 class="text-3xl text-black font-semibold text-[25px] leading-[100%]">Категории</h2>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2">
        <div
          v-for="category in categories"
          :key="category.id"
          @click="handleCategoryClick(category)"
          class="bg-white rounded-[10px]  pt-2.5  hover:shadow-md h-[170px] w-full transition-all duration-300 cursor-pointer group overflow-hidden"
        >
          <!-- Category Info (Top) -->
          <div class="text-start pl-2.5">
            <h3 class=" text-black mb-1 text-sm font-medium text-[14px] leading-[100%]">
              {{ category.name }}
            </h3>
            <p class="text-xs text-gray-500 font-normal text-[12px] leading-[100%]">{{ category.productCount }} товаров</p>
          </div>

          <!-- Category Image Container (Bottom) -->
          <div
            class="aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
          >
            <img :src="category.image" :alt="category.name" class="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Fake data for categories
const categories = ref([
  {
    id: 1,
    name: 'Ванны',
    productCount: 1247,
    image: '/cat2.png',
  },
  {
    id: 2,
    name: 'Смесители',
    productCount: 2156,
    image: '/cat2.png',
  },
  {
    id: 3,
    name: 'Вытяжки для кухни',
    productCount: 892,
    image: '/cat2.png',
  },
  {
    id: 4,
    name: 'Кухонные мойки',
    productCount: 1563,
    image: '/cat2.png',
  },
  {
    id: 5,
    name: 'Другие',
    productCount: 3421,
    image: '/cat2.png',
  },
  {
    id: 6,
    name: 'Унитазы',
    productCount: 1876,
    image: '/cat2.png',
  },
  {
    id: 7,
    name: 'Умывальники',
    productCount: 2103,
    image: '/cat2.png',
  },
  {
    id: 8,
    name: 'Полотенцесушители',
    productCount: 654,
    image: '/cat2.png',
  },
  {
    id: 9,
    name: 'Водонагреватели',
    productCount: 432,
    image: '/cat2.png',
  },
  {
    id: 10,
    name: 'Душевые',
    productCount: 987,
    image: '/cat2.png',
  },
  {
    id: 11,
    name: 'Ванны',
    productCount: 1247,
    image: '/cat2.png',
  },
  {
    id: 12,
    name: 'Смесители',
    productCount: 2156,
    image: '/cat2.png',
  },
  {
    id: 13,
    name: 'Вытяжки для кухни',
    productCount: 892,
    image: '/cat2.png',
  },
  {
    id: 14,
    name: 'Кухонные мойки',
    productCount: 1563,
    image: '/cat2.png',
  },
])

// Define category type
interface Category {
  id: number
  name: string
  productCount: number
  image: string
}

// Handle category click
const handleCategoryClick = (category: Category) => {
  console.log('Category clicked:', category.name)
  // Add navigation logic here
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

<template>
  <section class="py-12 bg-white">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Категории</h2>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4">
        <div
          v-for="category in categories"
          :key="category.id"
          @click="handleCategoryClick(category)"
          class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 cursor-pointer group"
        >
          <!-- Category Info (Top) -->
          <div class="text-center mb-4">
            <h3 class="font-semibold text-gray-900 mb-1 text-sm leading-tight">
              {{ category.name }}
            </h3>
            <p class="text-xs text-gray-500">{{ category.productCount }} товаров</p>
          </div>

          <!-- Category Image Container (Bottom) -->
          <div
            class="aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 border border-gray-200"
          >
            <img :src="category.image" :alt="category.name" class="w-16 h-16 object-contain" />
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
    image: '/cat1.png',
  },
  {
    id: 2,
    name: 'Смесители',
    productCount: 2156,
    image: '/cat1.png',
  },
  {
    id: 3,
    name: 'Вытяжки для кухни',
    productCount: 892,
    image: '/cat1.png',
  },
  {
    id: 4,
    name: 'Кухонные мойки',
    productCount: 1563,
    image: '/cat1.png',
  },
  {
    id: 5,
    name: 'Другие',
    productCount: 3421,
    image: '/cat1.png',
  },
  {
    id: 6,
    name: 'Унитазы',
    productCount: 1876,
    image: '/cat1.png',
  },
  {
    id: 7,
    name: 'Умывальники',
    productCount: 2103,
    image: '/cat1.png',
  },
  {
    id: 8,
    name: 'Полотенцесушители',
    productCount: 654,
    image: '/cat1.png',
  },
  {
    id: 9,
    name: 'Водонагреватели',
    productCount: 432,
    image: '/cat1.png',
  },
  {
    id: 10,
    name: 'Душевые',
    productCount: 987,
    image: '/cat1.png',
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

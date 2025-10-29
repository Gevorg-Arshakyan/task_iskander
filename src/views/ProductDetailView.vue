<template>
  <MainLayout>
    <!-- Breadcrumbs -->
    <div class="bg-gray-50 py-4">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-sm">
          <span class="text-gray-500">Главная</span>
          <span class="mx-2 text-gray-400">/</span>
          <span class="text-gray-900">Детали товара</span>
        </nav>
      </div>
    </div>

    <!-- Main Product Section -->
    <section class="py-12 bg-white">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Product Image Gallery -->
          <div class="lg:col-span-1">
            <ProductImageGallery :images="product.images" />
          </div>

          <!-- Product Description -->
          <div class="lg:col-span-1">
            <div class="mb-6">
              <h1 class="text-2xl font-bold text-gray-900 mb-4">
                {{ product.name }}
              </h1>

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Описание:</h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Product Info & Price -->
          <div class="lg:col-span-1">
            <ProductInfo :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products Sections -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedProductsSection title="Комплекты" :products="relatedProducts.kits" type="kits" />
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedProductsSection
          title="Вам могут понравится"
          :products="relatedProducts.suggestions"
          type="suggestions"
        />
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import ProductImageGallery from '@/components/product/ProductImageGallery.vue'
import ProductInfo from '@/components/product/ProductInfo.vue'
import RelatedProductsSection from '@/components/product/RelatedProductsSection.vue'

const route = useRoute()

// Sample product data
const product = ref({
  id: 1,
  name: 'Зеркало Анталия (3 полки) (Дуб Крафт Бел) 500*700 (Four) Стандарт Анталия (3 полки) (Дуб Крафт Бел)',
  description:
    'У нас есть совершенно новые модели мебельных гарнитуров и журнальных столиков, чтобы сделать вашу гостиную еще более комфортной и элегантной. Мы предлагаем разнообразие стилей и цветовых решений, чтобы подчеркнуть ваш уникальный вкус. У нас есть совершенно новые модели мебельных гарнитуров и журнальных столиков, чтобы сделать вашу гостиную еще более комфортной и элегантной.',
  price: '4530',
  currency: 'c',
  inStock: true,
  quantity: 10,
  images: ['/11.jpg', '/11.jpg', '/11.jpg', '/11.jpg', '/11.jpg', '/11.jpg'],
})

// Related products data
const relatedProducts = ref({
  kits: [
    {
      id: 1,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 999,
      selected: true,
    },
    {
      id: 2,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 0,
      selected: false,
    },
    {
      id: 3,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      selected: false,
    },
    {
      id: 4,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      selected: true,
    },
    {
      id: 5,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      selected: false,
    },
  ],
  suggestions: [
    {
      id: 6,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 0,
      liked: false,
    },
    {
      id: 7,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      liked: false,
    },
    {
      id: 8,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      liked: false,
    },
    {
      id: 9,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      liked: false,
    },
    {
      id: 10,
      name: 'Держатель для лейки BOOU PG605',
      price: '1294',
      currency: 'c',
      inStock: true,
      features: ['Комплект'],
      image: '/11.jpg',
      quantity: 1,
      liked: false,
    },
  ],
})

onMounted(() => {
  // Load product data based on route params
  const productId = route.params.id
  console.log('Loading product:', productId)
})
</script>

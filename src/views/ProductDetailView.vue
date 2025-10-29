<template>
  <MainLayout>
    <!-- Breadcrumbs -->
    <div class="bg-[#F8FAFF]">
      <div class="bg-[#F8FAFF]  py-4">
        <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="text-sm">
            <span class="text-gray-500">Главная</span>
            <span class="mx-2 text-gray-400">/</span>
            <span class="text-[#0063A9]">Детали товара</span>
          </nav>
        </div>
      </div>

      <!-- Main Product Section -->
      <section class="py-12 bg-[#F8FAFF] ">
        <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-2xl font-bold text-black mb-4">
            {{ product.name }}
          </h1>
          <div class="grid grid-cols-1 lg:grid-cols-7 gap-12">
            <!-- Product Image Gallery -->
            <div class="lg:col-span-2">
              <ProductImageGallery :images="product.images" />
            </div>

            <!-- Product Description -->
            <div class="lg:col-span-3">
              <div class="mb-6">


                <div class="mb-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">Описание:</h3>
                  <p class="text-gray-700 leading-relaxed">
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Product Info & Price -->
            <div class="lg:col-span-2">
              <ProductInfo :product="product" />
            </div>
          </div>
        </div>
      </section>

      <!-- Related Products Sections -->
      <AuctionSection />

      <div class="mb-4">
        <BestSellersSection />

      </div>
    </div>


    <template #footer>
      <ProductFooter />
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import ProductImageGallery from '@/components/product/ProductImageGallery.vue'
import ProductInfo from '@/components/product/ProductInfo.vue'
import AuctionSection from '@/components/home/AuctionSection.vue'
import BestSellersSection from '@/components/home/BestSellersSection.vue'
import ProductFooter from '@/components/footer/ProductFooter.vue'

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
  images: ['/11.jpg', '/cat1.png', '/11.jpg', '/11.jpg', '/11.jpg', '/11.jpg', '/11.jpg'],
})


onMounted(() => {
  // Load product data based on route params
  const productId = route.params.id
  console.log('Loading product:', productId)
})
</script>

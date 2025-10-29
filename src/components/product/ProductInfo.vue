<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <!-- Stock Status -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">В наличии</h2>

      <!-- Price -->
      <div class="mb-6">
        <span class="text-3xl font-bold text-gray-900"
          >{{ product.price }} {{ product.currency }}</span
        >
      </div>

      <!-- Quantity Selector -->
      <div class="mb-6">
        <div class="flex items-center border border-gray-300 rounded-lg w-fit">
          <button
            @click="decreaseQuantity"
            class="px-4 py-3 text-gray-600 hover:text-white hover:bg-gray-600 rounded-l-lg transition-colors"
            :disabled="quantity <= 0"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>

          <span
            class="px-4 py-3 text-lg font-medium min-w-[4rem] text-center border-x border-gray-300"
          >
            {{ quantity }}
          </span>

          <button
            @click="increaseQuantity"
            class="px-4 py-3 text-gray-600 hover:text-white hover:bg-gray-600 rounded-r-lg transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Add to Cart Button -->
      <button
        @click="addToCart"
        class="w-full bg-[#4A8FB9] text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const quantity = ref(props.product.quantity || 1)

const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}

const addToCart = () => {
  console.log('Adding to cart:', {
    productId: props.product.id,
    quantity: quantity.value,
  })
  // Add to cart logic here
}
</script>

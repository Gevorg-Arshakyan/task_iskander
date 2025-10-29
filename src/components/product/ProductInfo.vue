<template>
  <div class="bg-white max-w-[289px] py-4 px-[30px] rounded-lg shadow-sm ">
    <!-- Stock Status -->
    <div class="mb-6">
      <!-- Availability -->
      <p
        class=" text-[#73CB5E] mb-0.5 font-medium text-[16px] leading-[100%]"
      >
        В наличии
      </p>
      <!-- Price -->
      <div class="mb-6">
        <span class="text-3xl font-bold text-gray-900"
          >{{ product.price }} {{ product.currency }}</span
        >
      </div>

      <!-- Quantity Selector -->
      <div class="flex items-center mb-5">
        <!-- Minus -->
        <button
          @click="decreaseQuantity"
          class="w-11 h-11 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#3286C3] text-black hover:text-white transition-colors"
          :class="product.quantity <= 0 ? 'opacity-50 cursor-not-allowed' : ''"
          :disabled="product.quantity <= 0"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>

        <!-- Qty -->
        <span class="px-3 py-2 text-base font-semibold min-w-[3rem] text-center text-gray-900">
          {{ product.quantity }}
        </span>

        <!-- Plus -->
        <button
          @click="increaseQuantity"
          class="w-11 h-11 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#3286C3] text-black hover:text-white transition-colors"
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
      <!-- Add to Cart Button -->
      <button
        @click="addToCart"
        class="w-full bg-[#2C7EB8] text-white  py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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

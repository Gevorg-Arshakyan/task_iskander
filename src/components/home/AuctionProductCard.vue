<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
  >
    <!-- Product Image -->
    <div class="aspect-square bg-[#7EC4E8] relative">
      <div class="w-full h-full bg-[#7EC4E8] flex items-center justify-center">
        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>

      <!-- Heart Icon -->
      <button class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
        <svg
          class="w-5 h-5 text-gray-400 hover:text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <!-- Product Name -->
      <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
        {{ product.name }}
      </h3>

      <!-- Price with strikethrough -->
      <div class="mb-2">
        <p class="text-lg font-bold text-gray-900">{{ product.price }} {{ product.currency }}</p>
        <p class="text-sm text-gray-500 line-through">
          {{ product.originalPrice }} {{ product.currency }}
        </p>
      </div>

      <!-- Availability -->
      <p class="text-sm text-green-600 mb-2" v-if="product.inStock">В наличии</p>

      <!-- Features -->
      <div class="mb-4">
        <span v-for="feature in product.features" :key="feature" class="text-sm text-gray-600">
          • {{ feature }}
        </span>
      </div>

      <!-- Quantity Selector -->
      <div class="flex items-center justify-between">
        <div class="flex items-center border border-gray-300 rounded-lg">
          <button
            @click="decreaseQuantity"
            class="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-l-lg"
            :disabled="product.quantity <= 0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>

          <span class="px-3 py-2 text-sm font-medium min-w-[3rem] text-center text-gray-900">
            {{ product.quantity }}
          </span>

          <button
            @click="increaseQuantity"
            class="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-r-lg"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['quantity-change'])

const decreaseQuantity = () => {
  if (props.product.quantity > 0) {
    emit('quantity-change', props.product.id, props.product.quantity - 1)
  }
}

const increaseQuantity = () => {
  emit('quantity-change', props.product.id, props.product.quantity + 1)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

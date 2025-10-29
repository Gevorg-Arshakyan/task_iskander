<template>
  <div
    @click="navigateToProduct"
    class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
  >
    <!-- Product Image -->
    <div class="aspect-square bg-[#7EC4E8] relative">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />

      <!-- Heart Icon -->
      <button
        @click="toggleLike"
        class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
      >
        <svg
          class="w-5 h-5 transition-colors"
          :class="isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'"
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

      <!-- Price -->
      <p class="text-lg font-bold text-gray-900 mb-2">{{ product.price }} {{ product.currency }}</p>

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
            class="px-3 py-2 text-gray-600 hover:text-white hover:bg-gray-600 rounded-l-lg transition-colors"
            :disabled="product.quantity <= 0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>

          <span
            class="px-3 py-2 text-sm font-medium min-w-[3rem] text-center"
            :class="
              product.quantity === 0 ? 'bg-[#4A8FB9] text-white rounded-full' : 'text-gray-900'
            "
          >
            {{ product.quantity }}
          </span>

          <button
            @click="increaseQuantity"
            class="px-3 py-2 text-gray-600 hover:text-white hover:bg-gray-600 rounded-r-lg transition-colors"
            :class="
              product.quantity === 0 ? 'bg-[#4A8FB9] text-white hover:bg-blue-700 rounded-full' : ''
            "
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['quantity-change'])
const router = useRouter()

const isLiked = ref(false)

const navigateToProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const toggleLike = (event: Event) => {
  event.stopPropagation() // Prevent navigation when clicking heart
  isLiked.value = !isLiked.value
}

const decreaseQuantity = (event: Event) => {
  event.stopPropagation() // Prevent navigation when clicking quantity buttons
  if (props.product.quantity > 0) {
    emit('quantity-change', props.product.id, props.product.quantity - 1)
  }
}

const increaseQuantity = (event: Event) => {
  event.stopPropagation() // Prevent navigation when clicking quantity buttons
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

<template>
  <div
    @click="navigateToProduct"
    class="bg-white rounded-md  border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] cursor-pointer p-3"
  >
    <!-- Product Image -->
    <div class="aspect-square relative">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover rounded-lg" />

      <!-- Heart Icon -->
      <button
        @click="toggleLike"
        class="absolute top-2.5 right-2.5 p-2 bg-[#FFFFFF80] rounded-sm shadow-sm hover:bg-gray-50 transition-colors"
      >
        <svg
          class="w-5 h-5 transition-colors"
          :class="isLiked ? 'text-[#174261] fill-[#174261]' : 'text-gray-400 hover:text-red-500'"
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
    <div class="pt-4">
      <!-- Product Name -->
      <h3
        class="text-[#1A1919] mb-0.5 line-clamp-2 font-medium text-[14px] leading-[100%] tracking-[2%]"
      >
        {{ product.name }}
      </h3>

      <!-- Price -->
      <div class="mb-0.5 flex items-baseline gap-2">
        <span class=""
              :class="product.originalPrice ? 'text-[#FF0000] font-bold text-[19px] ' : 'text-lg font-bold text-black'"

        >{{ product.price }} {{ product.currency }}</span>
        <span v-if="product.originalPrice" class="text-[#808080]  font-bold text-[14px] leading-[100%] line-through">
          {{ product.originalPrice }} {{ product.currency }}
        </span>
      </div>

      <!-- Availability -->
      <p
        class="text-sm text-[#73CB5E] mb-0.5 font-medium text-[12px] leading-[100%]"
        v-if="product.inStock"
      >
        В наличии
      </p>

      <!-- Features -->
      <div class="mb-4">
        <span
          v-for="feature in product.features"
          :key="feature"
          class="text-[#3286C2] font-normal text-[12px] leading-[100%]"
        >
          • {{ feature }}
        </span>
      </div>

      <!-- Quantity Selector -->
      <div class="flex items-center justify-between">
        <!-- Minus -->
        <button
          @click="decreaseQuantity"
          class="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#3286C3] text-black hover:text-white transition-colors"
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
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#3286C3] text-black hover:text-white transition-colors"
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

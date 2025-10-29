<template>
  <div class="flex gap-4">
    <!-- Thumbnails -->
    <div class="flex flex-col gap-2">
      <button
        @click="scrollUp"
        class="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        :disabled="currentThumbnailIndex === 0"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div class="flex flex-col gap-2 max-h-80 overflow-hidden">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="selectImage(index)"
          class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors"
          :class="
            index === currentImageIndex
              ? 'border-[#4A8FB9]'
              : 'border-gray-200 hover:border-gray-300'
          "
        >
          <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>

      <button
        @click="scrollDown"
        class="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        :disabled="currentThumbnailIndex >= images.length - 4"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>

    <!-- Main Image -->
    <div class="flex-1 relative">
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          :src="images[currentImageIndex]"
          :alt="`Product image ${currentImageIndex + 1}`"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Heart Icon -->
      <button
        @click="toggleLike"
        class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
})

const currentImageIndex = ref(0)
const currentThumbnailIndex = ref(0)
const isLiked = ref(false)

const selectImage = (index: number) => {
  currentImageIndex.value = index
}

const scrollUp = () => {
  if (currentThumbnailIndex.value > 0) {
    currentThumbnailIndex.value--
  }
}

const scrollDown = () => {
  if (currentThumbnailIndex.value < props.images.length - 4) {
    currentThumbnailIndex.value++
  }
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

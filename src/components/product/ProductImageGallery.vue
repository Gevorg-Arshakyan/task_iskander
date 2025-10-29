<template>
  <div class="flex gap-4">
    <!-- Thumbnails -->
    <div class="flex flex-col gap-2">
      <button
        @click="scrollUp"
        class="p-2  self-center transition-colors cursor-pointer disabled:opacity-40"
        :disabled="isAtTop"
        aria-label="Scroll thumbnails up"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div class="flex flex-col gap-2 max-h-96 overflow-hidden" @wheel.prevent="onWheel">
        <button
          v-for="(image, i) in visibleThumbnails"
          :key="currentThumbnailIndex + i"
          @click="selectImage(currentThumbnailIndex + i)"
          class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors"
          :class="
            (currentThumbnailIndex + i) === currentImageIndex
              ? 'border-[#4A8FB9]'
              : 'border-gray-200 hover:border-gray-300'
          "
        >
          <img :src="image" :alt="`Thumbnail ${currentThumbnailIndex + i + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>

      <button
        @click="scrollDown"
        class="p-2 self-center cursor-pointer transition-colors disabled:opacity-40"
        :disabled="isAtBottom"
        aria-label="Scroll thumbnails down"
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
import { ref, computed } from 'vue'

const VISIBLE_COUNT = 4

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
})

const currentImageIndex = ref(0)
const currentThumbnailIndex = ref(0)
const isLiked = ref(false)

const total = computed(() => props.images?.length ?? 0)
const maxStart = computed(() => Math.max(total.value - VISIBLE_COUNT, 0))

const visibleThumbnails = computed(() => {
  const start = Math.min(currentThumbnailIndex.value, maxStart.value)
  const end = start + VISIBLE_COUNT
  return props.images.slice(start, end)
})

const isAtTop = computed(() => currentThumbnailIndex.value <= 0)
const isAtBottom = computed(() => currentThumbnailIndex.value >= maxStart.value)

const selectImage = (index: number) => {
  currentImageIndex.value = index
  // If selected image goes out of current window, adjust window to include it
  if (index < currentThumbnailIndex.value) {
    currentThumbnailIndex.value = index
  } else if (index > currentThumbnailIndex.value + VISIBLE_COUNT - 1) {
    currentThumbnailIndex.value = Math.min(index - (VISIBLE_COUNT - 1), maxStart.value)
  }
}

const scrollUp = () => {
  if (!isAtTop.value) {
    currentThumbnailIndex.value--
  }
}

const scrollDown = () => {
  if (!isAtBottom.value) {
    currentThumbnailIndex.value++
  }
}

const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    scrollDown()
  } else if (e.deltaY < 0) {
    scrollUp()
  }
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <section class=" py-4">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-6 overflow-x-auto">
        <!-- Categories (data-driven) -->
        <div
          v-for="(item, i) in items"
          :key="i"
          class="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          @click="select(i)"
        >
          <!-- Real category with image -->
          <template v-if="item.type === 'real'">
            <div
              class="w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm border-[1.5px]"
              :class="item.selected ? 'border-[#5C5C5C]' : 'border-[#D7EEFE]'"
            >
              <img :src="item.img" :alt="item.title" class="w-full h-full" />
            </div>
            <span class="text-xs text-black hover:text-gray-700 font-normal text-[12px] leading-[100%] text-center">{{ item.title }}</span>
          </template>

          <!-- Placeholder (empty circle + bar) -->
          <template v-else>
            <div class="w-[60px] h-[60px] rounded-full bg-gray-200 border border-gray-200"></div>
            <div class="h-3 w-12 bg-gray-200 "></div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type RealItem = { type: 'real'; title: string; img: string; selected: boolean }
type PlaceholderItem = { type: 'placeholder' }
type Item = RealItem | PlaceholderItem

const items = ref<Item[]>([
  { type: 'real', title: 'Скидки', img: '/cat1.png', selected: true },
  { type: 'real', title: 'Акции', img: '/cat1.png', selected: true },
  { type: 'real', title: 'Распродажа', img: '/cat1.png', selected: false },
  { type: 'real', title: 'Подарки', img: '/cat1.png', selected: false },
  { type: 'real', title: 'Подарки', img: '/cat1.png', selected: false },
  // placeholders to fill the line like in design
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
])

const select = (i: number) => {
  const item = items.value[i]
  if (!item || item.type !== 'real') return
  item.selected = !item.selected
}
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

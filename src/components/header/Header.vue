<template>
  <header class="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 md:px-32">
      <div class="flex items-center justify-between h-16 gap-4">
        <!-- Logo & Menu -->
        <div class="flex items-center gap-4">
          <!-- Menu Button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="flex items-center gap-2 hover:bg-blue-700 px-4 py-2 rounded transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span class="font-medium">Каталог</span>
          </button>

          <!-- Logo -->
          <div class="flex items-center gap-2">
            <!-- Եթե ունես logo assets-ում -->
            <img src="@/assets/logo.svg" alt="Iskender" class="h-8" />
          </div>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск"
              class="w-full pl-12 pr-24 py-2.5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              @keyup.enter="handleSearch"
            />
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium"
            >
              42903
            </span>
          </div>
        </div>

        <!-- Right Side - Auth & Cart -->
        <div class="flex items-center gap-3">
          <!-- Auth Button -->
          <button
            @click="handleAuthClick"
            class="flex items-center gap-2 hover:bg-blue-700 px-4 py-2 rounded-full transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div class="text-left hidden lg:block">
              <div class="text-xs text-blue-200">Добро пожаловать</div>
              <div class="text-sm font-medium">Вход / Регистрация</div>
            </div>
          </button>

          <!-- Cart -->
          <button
            @click="handleCartClick"
            class="relative hover:bg-blue-700 p-3 rounded-full transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </button>
        </div>
      </div>

      <!-- Dropdown Menu -->
      <transition name="slide-fade">
        <div
          v-if="isMenuOpen"
          class="absolute left-0 right-0 top-16 bg-white text-gray-800 shadow-xl z-50 border-t"
        >
          <div class="max-w-7xl mx-auto px-4 py-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 class="font-bold mb-3 text-blue-600">Ванные</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:text-blue-600 block">Акриловые ванны</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Чугунные ванны</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Стальные ванны</a></li>
                </ul>
              </div>
              <div>
                <h3 class="font-bold mb-3 text-blue-600">Смесители</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:text-blue-600 block">Для ванны</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Для кухни</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Для раковины</a></li>
                </ul>
              </div>
              <div>
                <h3 class="font-bold mb-3 text-blue-600">Душевые кабины</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:text-blue-600 block">С поддоном</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Без поддона</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Угловые</a></li>
                </ul>
              </div>
              <div>
                <h3 class="font-bold mb-3 text-blue-600">Бойлеры</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:text-blue-600 block">Электрические</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Газовые</a></li>
                  <li><a href="#" class="hover:text-blue-600 block">Двухконтурные</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// State
const searchQuery = ref('')
const cartCount = ref(0)
const isMenuOpen = ref(false)

// Methods
const handleSearch = () => {
  console.log('Search:', searchQuery.value)
  // Implement search logic
}

const handleAuthClick = () => {
  console.log('Auth clicked')
  // Redirect to login/register
}

const handleCartClick = () => {
  console.log('Cart clicked')
  // Open cart sidebar or redirect to cart page
}
</script>

<style scoped>
/* Transition animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

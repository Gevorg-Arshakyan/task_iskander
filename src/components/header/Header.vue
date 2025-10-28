<template>
  <header class="bg-[#2D82BE] text-white">
    <!-- Main Header -->
    <div class="bg-[#2D82BE]">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Left: Logo -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <img src="@/assets/logo.svg" alt="Iskender Logo" class=" h-[30px]" />
            </div>
            <!-- Catalog Button -->
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="flex items-center space-x-2 bg-[#0000001A] text-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                <rect y="4" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                <rect y="8" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
              </svg>
              <span class="font-medium">Каталог</span>
            </button>
          </div>

          <!-- Center: Search -->
          <div class="flex-1 max-w-md mx-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Поиск"
                class="w-full pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                @keyup.enter="handleSearch"
              />
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
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
            </div>
          </div>

          <!-- Right: Auth & Cart -->
          <div class="flex items-center space-x-4">
            <!-- Auth -->
            <div class="text-right">
              <p class="text-sm text-gray-200">Добро пожаловать</p>
              <button @click="handleAuthClick" class="text-sm text-white hover:text-gray-200">
                Вход/Регистрация
              </button>
            </div>
            <!-- User Profile -->
            <button class="p-2 text-white hover:text-gray-200">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="#C1C1C1"/>
                <circle cx="15.2016" cy="11.1552" r="3.38444" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83326 19.2468C9.83235 19.0089 9.88556 18.7739 9.98887 18.5596C10.313 17.9112 11.2272 17.5676 11.9858 17.412C12.5329 17.2952 13.0876 17.2172 13.6456 17.1785C14.6788 17.0878 15.718 17.0878 16.7513 17.1785C17.3093 17.2177 17.8639 17.2956 18.4111 17.412C19.1696 17.5676 20.0838 17.8788 20.408 18.5596C20.6158 18.9964 20.6158 19.5037 20.408 19.9406C20.0838 20.6213 19.1696 20.9325 18.4111 21.0817C17.8646 21.2033 17.3098 21.2834 16.7513 21.3216C15.9103 21.3929 15.0654 21.4059 14.2227 21.3605C14.0282 21.3605 13.8401 21.3605 13.6456 21.3216C13.0892 21.2839 12.5365 21.2037 11.9923 21.0817C11.2272 20.9325 10.3195 20.6213 9.98887 19.9406C9.88609 19.7237 9.83293 19.4868 9.83326 19.2468Z" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <!-- Cart -->
            <button @click="handleCartClick" class="relative p-2 text-white hover:text-gray-200">
              <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.60132" width="30" height="30" rx="15" fill="white"/>
                <path d="M6.70654 14.0143L7.59111 14.1913C8.20009 14.3131 8.65815 14.8182 8.71995 15.4362L8.84508 16.6875M8.84508 16.6875L9.61224 23.0805C9.69746 23.7907 10.2999 24.3251 11.0151 24.3251H18.1418C19.2764 24.3251 20.2655 23.5529 20.5406 22.4522L21.4771 18.7065C21.7334 17.681 20.9578 16.6875 19.9007 16.6875H8.84508Z" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round"/>
                <path d="M15.368 19.5468H11.7019" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="11.6708" cy="26.9981" r="1.14564" fill="#0063A9"/>
                <circle cx="18.5443" cy="26.9981" r="1.14564" fill="#0063A9"/>
                <circle cx="24.5" cy="5.5" r="5.5" fill="#DC3434"/>
                <path d="M24.008 5.438H24.62C25.016 5.438 25.35 5.556 25.622 5.792C25.898 6.028 26.036 6.35 26.036 6.758C26.036 7.17 25.896 7.492 25.616 7.724C25.332 7.96 24.992 8.078 24.596 8.078C24.268 8.078 23.978 8 23.726 7.844C23.478 7.684 23.306 7.462 23.21 7.178L23.684 6.908C23.74 7.108 23.848 7.262 24.008 7.37C24.168 7.478 24.364 7.532 24.596 7.532C24.864 7.532 25.078 7.464 25.238 7.328C25.402 7.188 25.484 6.998 25.484 6.758C25.484 6.518 25.402 6.328 25.238 6.188C25.078 6.048 24.868 5.978 24.608 5.978H23.42L23.576 3.8H25.874V4.322H24.08L24.008 5.438Z" fill="white"/>
              </svg>

            </button>


          </div>
        </div>
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
  </header>
</template>

<script setup lang="ts" name="AppHeader">
import { ref } from 'vue'

// State
const searchQuery = ref('')
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

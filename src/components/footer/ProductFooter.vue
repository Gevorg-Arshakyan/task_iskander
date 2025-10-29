<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="text-white bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${footerBg})` }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_1fr] gap-8">
        <!-- Left Column - Logo & Description -->
        <div class="space-y-4">
          <div class="flex ">
            <img src="@/assets/logo.svg" alt="Iskender logo" class="h-8 w-auto" />
          </div>

          <p class="text-white font-normal text-[14px] leading-[150%] max-w-56">
            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
          </p>
        </div>

        <!-- Second Column - Helpful -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Полезное</h4>
          <ul class="text-sm text-gray-300 space-y-3 pt-2">
            <li><a href="#" class="hover:text-blue-200 transition-colors text-[#E0E0E0]">Как стать поставщиком</a></li>
            <li><a href="#" class="hover:text-blue-200 transition-colors text-[#E0E0E0]">Условие продаж</a></li>
            <li><a href="#" class="hover:text-blue-200 transition-colors text-[#E0E0E0]">Как заказать</a></li>
            <li><a href="#" class="hover:text-blue-200 transition-colors text-[#E0E0E0]">Доставка</a></li>
            <li><a href="#" class="hover:text-blue-200 transition-colors text-[#E0E0E0]">Самовывоз</a></li>
          </ul>
        </div>

        <!-- Third Column - Company -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Компания</h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li><a href="#" class="hover:text-blue-400 transition-colors text-[#E0E0E0] font-normal text-[15px] leading-[100%]">Каталог</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors text-[#E0E0E0] font-normal text-[15px] leading-[100%]">Избранное</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors text-[#E0E0E0] font-normal text-[15px] leading-[100%]">Личный кабинет</a></li>
          </ul>
        </div>

        <!-- Fourth Column - Contacts -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Контакты</h4>
          <div class="text-sm text-gray-300 space-y-4 pt-2">
            <div>
              <p class="text-white/70">Email:</p>
              <p class="text-white">iskender.kg@gmail.com</p>
            </div>
            <div>
              <p class="text-white/70">Телефон:</p>
              <p class="text-white">+996 (550) 12 53 29</p>
            </div>
          </div>
        </div>

        <!-- Fifth Column - Social -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Соц. сети</h4>
          <div class="flex items-center gap-4 pt-2">
            <!-- Instagram -->
            <a href="#" aria-label="Instagram" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
            </a>
            <!-- Facebook -->
            <a href="#" aria-label="Facebook" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-[#FFFFFF1F]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <p class="text-sm text-gray-400">© 2023 Iskender.kg - Отечественный бренд сантехники</p>

          <!-- Social Media Icons -->
          <div class="flex space-x-4 mt-4 md:mt-0">
            <img
              src="@/assets/inlink.png"
              alt="Instagram"
              class="h-5 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/* eslint-disable vue/multi-word-component-names */
import footerBg from '@/assets/footer.png'
</script>

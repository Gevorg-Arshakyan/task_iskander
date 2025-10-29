<template>
  <footer class="bg-gradient-to-r from-[#3186C3] to-[#004F86] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr] gap-8">
        <!-- Left Column - Logo & Description -->
        <div class="space-y-4">
          <div class="flex">
            <img src="@/assets/logo.svg" alt="Iskender logo" class="h-8 w-auto" />
          </div>

          <p class="text-white font-normal text-[14px] leading-[150%] max-w-56">
            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
          </p>

          <!-- App Store Buttons -->
          <div class="flex space-x-3 pt-2">
            <img
              src="@/assets/appStore.png"
              alt="Download on the App Store"
              class=" cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="@/assets/gplay.png"
              alt="Get it on Google Play"
              class=" cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        <!-- Second Column - Addresses -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Адреса</h4>
          <div class="flex flex-col space-y-5 pt-2">
            <div>
              <p class="text-[#E0E0E0] font-normal text-[15px] leading-[100%]">ЭлитСтрой</p>
              <p class="text-white font-medium text-[15px] leading-[160%]">ул. Ден-Сяопина 18/1</p>
            </div>
            <div>
              <p class="text-[#E0E0E0] font-normal text-[15px] leading-[100%]">Баткен</p>
              <p class="text-white font-medium text-[15px] leading-[160%]">ул. Льва Толстого 19</p>
            </div>
            <div>
              <p class="text-[#E0E0E0] font-normal text-[15px] leading-[100%]">ТааТан</p>
              <p class="text-white font-medium text-[15px] leading-[160%]">ул. Лермонтова 6</p>
            </div>
          </div>

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

          <div class="text-sm text-gray-300 space-y-3">
            <div>
              <p class="text-gray-400">Email:</p>
              <p>iskender.kg@gmail.com</p>
            </div>

            <div>
              <p class="text-gray-400">Телефон:</p>
              <p>+996 (500) 000-104</p>
              <p>+996 (997) 000-104</p>
              <p>+996 (222) 000-104</p>
            </div>
          </div>

          <!-- WhatsApp Button -->
          <button
            class="text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <img src="@/assets/whatsapp.svg" alt="WhatsApp" class="h-6" />
          </button>
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
</script>

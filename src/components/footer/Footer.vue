<template>
  <footer class="bg-[#4A8FB9] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Left Column - Logo & Description -->
        <div class="space-y-4">
          <div class="flex flex-col">
            <h3 class="text-2xl font-bold text-blue-400">Iskender</h3>
            <p class="text-xs text-gray-400">Sanitary ware</p>
          </div>

          <p class="text-sm text-gray-300 leading-relaxed">
            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
          </p>

          <!-- App Store Buttons -->
          <div class="flex space-x-3 pt-2">
            <img
              src="@/assets/appStore.png"
              alt="Download on the App Store"
              class="h-10 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="@/assets/gplay.png"
              alt="Get it on Google Play"
              class="h-10 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        <!-- Second Column - Addresses -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Адреса</h4>
          <div class="text-sm text-gray-300 space-y-2">
            <p>ЭлитСтрой<br />ул. Ден-Сяопина 18/1</p>
            <p>Баткен<br />ул. Льва Толстого 19</p>
            <p>ТааТан<br />ул. Лермонтова 6</p>
          </div>
        </div>

        <!-- Third Column - Company -->
        <div class="space-y-4">
          <h4 class="font-semibold text-lg text-white">Компания</h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Каталог</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Избранное</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Личный кабинет</a></li>
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
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <img src="@/assets/whatsap.png" alt="WhatsApp" class="h-5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
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
            <svg
              class="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

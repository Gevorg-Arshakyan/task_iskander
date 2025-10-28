<template>
  <footer class="bg-gradient-to-b from-[#2E6FA7] to-[#225F95] text-white pt-12 pb-6">
    <div class="container mx-auto grid gap-10 md:grid-cols-4">

      <!-- Logo and description -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-3xl font-semibold">iskender</span>
          <span class="text-xs">Sanitary ware</span>
        </div>

        <p class="text-sm opacity-80 leading-relaxed">
          Первый отечественный бренд<br>
          Iskender на рынке сантехники от<br>
          компании ОсОО «Стройдом.кг»
        </p>

        <!-- Store buttons -->
        <div class="flex gap-3 pt-3">
          <img src="/appstore.png" alt="App Store" class="h-10">
          <img src="/googleplay.png" alt="Google Play" class="h-10">
        </div>
      </div>

      <!-- Addresses -->
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Адреса</h4>
        <div class="text-sm space-y-2 opacity-90">
          <p>ЭлитСтрой<br>ул. Ден-Соялина 18/1</p>
          <p>Баткен<br>ул. Льва-Толстого 19</p>
          <p>ТааТан<br>ул. Лермонтова 6</p>
        </div>
      </div>

      <!-- Company links -->
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Компания</h4>
        <ul class="text-sm space-y-2 opacity-90">
          <li><a href="#" class="hover:underline">Каталог</a></li>
          <li><a href="#" class="hover:underline">Избранное</a></li>
          <li><a href="#" class="hover:underline">Личный кабинет</a></li>
        </ul>
      </div>

      <!-- Contacts -->
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Контакты</h4>

        <div class="text-sm opacity-90 space-y-2">
          <p>Email:<br>iskender.kg@gmail.com</p>

          <p>
            Телефон:<br>
            +996 (500) 000-104<br>
            +996 (997) 000-104<br>
            +996 (222) 000-104
          </p>
        </div>

        <button class="bg-white text-green-600 px-4 py-2 rounded-full font-medium shadow hover:shadow-md flex items-center gap-2">
          <img src="/whatsapp.svg" alt="WhatsApp" class="h-5" />
          WhatsApp
        </button>
      </div>

    </div>

    <div class="container mx-auto">
      <hr class="border-white/20 my-6">

      <div class="flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
        <p>© 2023 Iskender.kg — Отечественный бренд сантехники</p>

        <!-- Social icons -->
        <div class="flex gap-4 mt-4 md:mt-0">
          <img src="/instagram.svg" class="h-5 cursor-pointer opacity-80 hover:opacity-100">
          <img src="/facebook.svg" class="h-5 cursor-pointer opacity-80 hover:opacity-100">
        </div>
      </div>
    </div>
  </footer>
</template>

<template>
  <MainLayout>
    <!-- Top Categories Bar -->
    <TopCategoriesBar />

    <!-- Categories Section -->
    <CategoriesSection />

    <!-- Best Sellers Section -->
    <BestSellersSection />

    <!-- News Section -->
    <NewsSection />

    <!-- Auction Items Section -->
    <AuctionSection />

    <!-- Store Addresses Section -->
    <StoreAddressesSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import TopCategoriesBar from '@/components/home/TopCategoriesBar.vue'
import CategoriesSection from '@/components/home/CategoriesSection.vue'
import BestSellersSection from '@/components/home/BestSellersSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import AuctionSection from '@/components/home/AuctionSection.vue'
import StoreAddressesSection from '@/components/home/StoreAddressesSection.vue'
</script>

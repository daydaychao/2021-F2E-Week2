<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from '@/components/TheHeader.vue'
import GPS from '@/components/GPS.vue'
</script>

<template>
  <Header />
  <router-view />
  <footer class="root-block footer">Copyright © UG BICY TRAVEL. All rights reserved. powered by 十萬塊的星之碎片 Ver0.1</footer>
  <GPS />
</template>

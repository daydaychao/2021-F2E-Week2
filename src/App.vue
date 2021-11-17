<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from '@/components/TheHeader.vue'
</script>

<template>
  <Header></Header>
  <router-view />
</template>

<style>
#app {
  height: 100vh;
  border: red 2px solid;
}
</style>

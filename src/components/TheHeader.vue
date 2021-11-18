<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goto(pathName: string) {
  console.log('goto')
  router.push({ name: pathName })
}
</script>

<template>
  <header class="header">
    <div class="second-block pointer" @click="goto('home')">
      <img class="logo_pc" src="@/assets/images/logo.png" />
      <img class="logo_m" src="@/assets/images/logo_m.png" />
    </div>
    <nav class="second-block">
      <button class="btn-orange header_btn" @click="goto('home')">站點地圖</button>
      <button class="disable btn-blue header_btn" @click="goto('cyclingShape')">自行車道</button>
    </nav>
  </header>
</template>

<style scoped></style>

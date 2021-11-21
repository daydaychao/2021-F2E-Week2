<script setup lang="ts">
import {ref,unref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const nowPath = ref(true);

function goto(pathName: string) {
  if(pathName ==='home'){
    nowPath.value = true
    router.push({ name: pathName })
    return
  }
  nowPath.value = false
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
      <button class="btn-orange header_btn" :class="{'disable':!nowPath}" @click="goto('home')">站點地圖</button>
      <button class="btn-blue header_btn" :class="{'disable':nowPath}" @click="goto('cyclingShape')">自行車道</button>
    </nav>
  </header>
</template>

<style scoped></style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goto(pathName: string) {
  console.log('goto')
  router.push({ name: pathName })
}
</script>

<template>
  <header class="root-block header">
    <div class="second-block">
      <img src="@/assets/images/logo.png" />
    </div>
    <nav class="second-block">
      <button @click="goto('home')">站點地圖</button>
      <button @click="goto('cyclingShape')">自行車道</button>
    </nav>
  </header>
</template>

<style scoped></style>

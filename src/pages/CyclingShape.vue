<script setup lang="ts">
import '@/assets/styles/root.css'
defineProps<{ msg: string }>()
</script>

<template>
  <main class="cycling-shape">
    <section class="menu">
      <OhNo />
    </section>
    <section class="cycling-shape__map">地圖</section>
  </main>
</template>

<style scoped>
.cycling-shape {
  position: relative;
}
.menu {
  position: absolute;
  color: #fff;
  background: var(--blue85);
  width: 360px;
  height: 100vh;
}

.cycling-shape__map {
  background: #dedede;
  height: calc(100vh - 95px - 60px);
}
</style>

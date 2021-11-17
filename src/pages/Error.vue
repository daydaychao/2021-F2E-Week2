<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <img src="@/assets/images/error.png" />

  <div>哎呀 ! 我們似乎不知道您在哪裡呢 您該不會是沒開Gps權限吧，還是您現在不在地球地球呢 (´･ω･`)</div>
</template>

<style scoped></style>

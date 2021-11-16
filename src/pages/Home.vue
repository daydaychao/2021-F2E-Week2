<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <span>
      <!-- 放大鏡 -->
      <div style="width: 10px; height: 10px">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>

      <select value="輸入想查詢的地點或者區域"></select>
    </span>
  </div>
  <div>
    <button>借車</button>
    <button>還車</button>
     藉由借 / 還車的按鈕 來看站點所剩的數量喔
  </div>
</template>

<style scoped></style>

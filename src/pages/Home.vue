<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { StationAndAvailabilityCityNameZhTW } from '@/types'
import { getEnumValues } from '@/tools/'

const bikeStore = useBikeStore()
const count = ref(0)
const state = reactive({
  citiesName: getEnumValues(StationAndAvailabilityCityNameZhTW)
})
defineProps<{ msg: string }>()
</script>

<template>
  <main class="root-block">
    <h1>{{ msg }}</h1>
    <article class="second-block">
      <!-- 放大鏡 -->
      <div class="text-orange">srgjlgdfk</div>
      <i class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </i>

      <select value="輸入想查詢的地點或者區域">
        <div v-for="(city, index) in state.citiesName" :key="index">
          <option>{{ city }}</option>
        </div>
      </select>
    </article>

    <article class="second-block">
      <button>借車</button>
      <button>還車</button>
       藉由借 / 還車的按鈕 來看站點所剩的數量喔
    </article>

    <article class="second-block">
      <img src="@/assets/images/error.png" />
      趕快開始騎上UBike四處旅遊吧 ! 邊騎腳踏車邊用手機是很危險的喔 (´･ω･`)
    </article>
  </main>
</template>

<style scoped>
.icon {
  display: inline-block;
  width: 14px;
  height: 14px;
}
</style>

<script setup lang="ts">
import '@/assets/styles/root.css'
import { ref, unref, reactive, watch, computed, SelectHTMLAttributes } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { getEnumValues, changeName } from '@/tools/'
import { StationAndAvailabilityCityNameZhTW, StationAndAvailabilityCityName, CyclingShapeCityName, CyclingShapeCityNameZhTW } from '@/types'
import Map from '@/components/mapCyclingShape.vue'
import { filter } from 'ramda'
import { TypeCyclingShape } from '@/types'

const bikeStore = useBikeStore()

const cityList = getEnumValues(CyclingShapeCityName)
const cityListZhTW = getEnumValues(CyclingShapeCityNameZhTW)
const selectCity = ref<keyof typeof CyclingShapeCityNameZhTW>() //select
const selectTown = ref('') //select

const townList = computed(() => {
  return bikeStore.getCyclingShapeTown
})

let CyclingShapeFilteredList = bikeStore.getCyclingShape

let geometry = [] //FIXME who are you?

// api抓取data
function getCyclingShapeData() {
  if (selectCity.value) bikeStore.getCyclingShapeData(selectCity.value)
}

// 選都市
async function handleSelect() {
  await getCyclingShapeData()
}

// 過濾地區
 //FIXME 初次定位不見了
async function handleTown(e: any) {
  let filterData = []
  let selectedTown = e.target.value
  if (selectedTown === '全部') {
    bikeStore.setBikeCyclingShapeFiltered(bikeStore.bikeCyclingShape)
    return
  }
  if (selectedTown != '全部') {
    filterData = bikeStore.getCyclingShape.filter((item: TypeCyclingShape) => {
      if (item.Town) return item.Town == selectedTown
    })
    bikeStore.setBikeCyclingShapeFiltered(filterData)
  }
}

function selectedCyclingShape(bikeShape: any) {
  bikeStore.setSelectedCyclingShape(bikeShape)
}
</script>

<template>
  <main class="cycling-shape">
    <section class="menu">
      <p>
        選擇縣市
        <select v-model="selectCity" @change="handleSelect">
          <option v-for="(city, index) in cityList" :key="index" :value="city">
            {{ cityListZhTW[index] }}
          </option>
        </select>
      </p>
      <p>
        請選擇區域或鄉鎮
        <select v-model="selectTown" @change="handleTown">
          <option v-for="(town, index) in townList" :key="index" :value="town">
            {{ town }}
          </option>
        </select>
      </p>

      <template v-for="(bikeShape, index) in bikeStore.bikeCyclingShapeFiltered" :key="index" :value="bikeShape">
        <div class="road" @click="selectedCyclingShape(bikeShape)">
          <div class="block">
            <p class="roadNum">{{ index > 10 ? index + 1 : '0' + (index + 1) }}</p>
          </div>
          <div class="block">
            <p class="roadName">{{ bikeShape.RouteName }}</p>
            <p class="roadIfo">
              {{ bikeShape.RoadSectionStart || '無資料' }}
              <span v-if="bikeShape.Direction == '雙向'">←</span>
              <span>→</span>
              {{ bikeShape.RoadSectionEnd || '無資料' }}
            </p>
            <p class="roadIfo">
              車道長度： <span class="roadLength">{{ bikeShape.CyclingLength / 100 + 'KM' }}</span>
            </p>
          </div>
        </div>
      </template>
    </section>

    <section class="cycling-shape__map">
      <Map :cyclingShape="bikeStore.bikeCyclingShapeFiltered" :selectedCyclingShape="bikeStore.getSelectedCyclingShape" />
    </section>
  </main>
</template>

<style scoped>
.cycling-shape {
  position: relative;
  display: flex;
  height: calc(100vh - 95px - 60px);
  overflow: hidden;
}

.cycling-shape__map {
  background: #dedede;
  height: 100%;
  width: 100%;
}
.menu {
  color: #fff;
  background: var(--blue85);
  width: 40%;
  max-width: 360px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.road {
  width: 85%;
  border-bottom: 1px solid #1393c8;
  display: flex;
  flex-direction: raw;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.road .block {
  padding: 10px 15px 10px 25px;
}
.road .block:first-child {
  border-right: 1px solid white;
}
.road .block p {
  margin: 10px 0;
}
.road .block p.roadNum {
  margin: 0 0;
}

.roadName {
  font-size: 20px;
  font-weight: bold;
}

.roadNum {
  width: 16px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 36px;
  line-height: 30px;
  font-weight: bold;
}
.roadIfo {
  font-size: 12px;
}

.road:last-child {
  border: none;
}
.roadLength {
  font-size: 14px;
}
</style>

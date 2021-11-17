<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { StationAndAvailabilityCityNameZhTW, StationAndAvailabilityCityName, CyclingShapeCityName, CyclingShapeCityNameZhTW } from '@/types'
import { getEnumValues, changeName } from '@/tools/'

const bikeStore = useBikeStore()

// 自行車站
const cityList = getEnumValues(StationAndAvailabilityCityName)
const cityListZhTW = getEnumValues(StationAndAvailabilityCityNameZhTW)

// 自行車道
const cyclingCityList = getEnumValues(CyclingShapeCityName)
const cyclingCityListZhTW = getEnumValues(CyclingShapeCityNameZhTW)

// select資料
const selectStation = ref<keyof typeof StationAndAvailabilityCityName>()
const selectAvailability = ref<keyof typeof StationAndAvailabilityCityName>()
const selectCyclingShape = ref<keyof typeof CyclingShapeCityName>()

// select打api抓取data
function getStationData() {
  if (selectStation.value) bikeStore.getStationData(selectStation.value)
}
function getAvailabilityData() {
  if (selectAvailability.value) bikeStore.getAvailabilityData(selectAvailability.value)
}
function getCyclingShapeData() {
  if (selectCyclingShape.value) bikeStore.getCyclingShapeData(selectCyclingShape.value)
}

defineProps<{ msg: string }>()
</script>

<template>
  <h1>功能測試</h1>

  api狀態: {{ bikeStore.loading }}

  <div class="second-block">
    <h4>Station</h4>
    <select class="form-control" placeholder="輸入想查詢的地點" v-model="selectStation" @change="getStationData">
      <option v-for="(city, index) in cityList" :key="index" :value="city">{{ cityListZhTW[index] }}</option>
    </select>

    顯示第一筆資料... {{ bikeStore.bikeStations[0] }}
  </div>

  <div class="second-block">
    <h4>Availability</h4>
    <select class="form-control" placeholder="輸入想查詢的地點" v-model="selectAvailability" @change="getAvailabilityData">
      <option v-for="(city, index) in cityList" :key="index" :value="city">{{ cityListZhTW[index] }}</option>
    </select>
    顯示第一筆資料... {{ bikeStore.bikeAvailability[0] }}
  </div>

  <div class="second-block">
    <h4>CyclingShape</h4>
    <select class="form-control" placeholder="輸入想查詢的地點" v-model="selectCyclingShape" @change="getCyclingShapeData">
      <option v-for="(city, index) in cyclingCityList" :key="index" :value="city">{{ cyclingCityListZhTW[index] }}</option>
    </select>
    顯示第一筆資料... {{ bikeStore.bikeCyclingShape[0] }}
  </div>
  <article class="second-block">
    <button>借車</button>
    <button>還車</button>
  </article>
</template>

<style scoped></style>

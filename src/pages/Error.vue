<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { StationAndAvailabilityCityNameZhTW, StationAndAvailabilityCityName, CyclingShapeCityName, CyclingShapeCityNameZhTW } from '@/types'
import { getEnumValues, changeName } from '@/tools/'
import { TypeBikeStation, TypeBikeAvailability } from '@/types'
import Map from '@/components/map.vue'
import GPS from '@/components/GPS.vue'

const bikeStore = useBikeStore()

// 自行車站可選擇城市
const cityList = getEnumValues(StationAndAvailabilityCityName)
const cityListZhTW = getEnumValues(StationAndAvailabilityCityNameZhTW)
const selectCity = ref<keyof typeof StationAndAvailabilityCityName>() //select

// 使用者位置
let lat = bikeStore.userLocation[0]
let lon = bikeStore.userLocation[1]

// api抓取data
function getStationData() {
  if (selectCity.value && lat && lon) bikeStore.getStationData(selectCity.value, lat, lon)
}
function getAvailabilityData() {
  if (selectCity.value) bikeStore.getAvailabilityData(selectCity.value)
}
// *不參考縣市資訊，直接抓取位置附近站點
function getNearByStationData() {
  if (bikeStore.userLocation) bikeStore.getNearByStationData(bikeStore.userLocation[0], bikeStore.userLocation[1])
}
function getNearByAvailabilityData() {
  if (bikeStore.userLocation) bikeStore.getNearByAvailabilityData(bikeStore.userLocation[0], bikeStore.userLocation[1])
}

//select打api
async function handleSelect() {
  await getStationData()
  await getAvailabilityData()
}

async function handleGPS() {
  // await getStationData();
  // await getAvailabilityData();
  await getNearByAvailabilityData()
  await getNearByStationData()
}

const isRent = ref(true)

// defineProps<{ msg: string }>()
</script>

<template>
<main class="content">
    <article v-if="bikeStore.userLocation[0] && bikeStore.userLocation[1]" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%">
      <Map :location="[bikeStore.userLocation[0], bikeStore.userLocation[1]]" :stations="bikeStore.getNearByStations" :availability="bikeStore.getNearByAvailability" :isRent="bikeStore.getIsRent" />
    </article>

    <article class="car-nav">
      <div class="Homeselect">
        <select class="form-control" value="輸入想查詢的地點" v-model="selectCity" @change="handleSelect">
          <option v-for="(city, index) in cityList" :key="index" :value="city">
            {{ cityListZhTW[index] }}
          </option>
        </select>
      </div>
    </article>

    <article class="map_content">
      <article class="Homeimg">
        <img src="@/assets/images/error.png" />
        <h1>哎呀 ! 我們似乎不知道您在哪裡呢</h1>
        <p>您該不會是沒開Gps權限吧，還是您現在不在地球呢 (´･ω･`)</p>
      </article>

      <div @click="handleGPS()">
        <GPS />
      </div>
    </article>
  </main>
</template>

<style scoped></style>

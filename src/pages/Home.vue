<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { StationAndAvailabilityCityNameZhTW, StationAndAvailabilityCityName, CyclingShapeCityName, CyclingShapeCityNameZhTW } from '@/types'
import { getEnumValues, changeName } from '@/tools/'
import { TypeBikeStation, TypeBikeAvailability } from '@/types'

const bikeStore = useBikeStore()

// 自行車站可選擇城市
const cityList = getEnumValues(StationAndAvailabilityCityName)
const cityListZhTW = getEnumValues(StationAndAvailabilityCityNameZhTW)
const selectCity = ref<keyof typeof StationAndAvailabilityCityName>() //select

// 使用者位置
let lat = bikeStore.userLocation[0]
let lon = bikeStore.userLocation[1]

// 附近的自行車租還資訊
let nearAvailability = bikeStore.nearAvailability

// 當前車站資料
let currentStation: any = reactive({
  rent: 0,
  return: 0,
  name: '',
  address: ''
})

// 當前車站資料
function updateCurrentByUID(UID: string) {
  console.log('updateCurrentByUID')
  let numInfo = nearAvailability.find((station) => station.StationUID === UID)
  currentStation.rent = numInfo?.AvailableRentBikes
  currentStation.rent = numInfo?.AvailableReturnBikes
  let desInfo = bikeStore.bikeStations.find((station) => station.StationUID === UID)
  currentStation.name = desInfo?.StationName.Zh_tw
  currentStation.address = desInfo?.StationAddress.Zh_tw
}

// api抓取data
function getStationData() {
  if (selectCity.value) bikeStore.getStationData(selectCity.value, lat, lon)
}
function getAvailabilityData() {
  if (selectCity.value) bikeStore.getAvailabilityData(selectCity.value)
}
//select打api
async function handleSelect() {
  await getStationData()
  await getAvailabilityData()
}
//資料變更就update
watch(
  nearAvailability,
  (oldValue, newValue) => {
    console.log('資料變更就update')
    updateCurrentByUID(nearAvailability[0].StationUID)
  },
  { deep: true }
)

const isRent = ref(true)
function switchAvailability(state: 'rent' | 'return') {
  switch (state) {
    case 'rent': //借車
      isRent.value = true
      updateCurrentByUID('KHH501209082') //測試用篩選號碼

    case 'return': //還車
      isRent.value = false
      updateCurrentByUID('KHH501209082') //測試用篩選號碼
  }
}

// defineProps<{ msg: string }>()
</script>

<template>
  <main class="content">

    <!-- <h1>{{ msg }}</h1> -->
    <article class="car-nav">
      <div class="Homeselect">
        <select class="form-control" value="輸入想查詢的地點" v-model="selectCity" @change="handleSelect">
          <option v-for="(city, index) in cityList" :key="index" :value="city">{{ cityListZhTW[index] }}</option>
        </select>

        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200">
            <path
              d="M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z"
              fill="currentColor"
            />
          </svg>
          選擇想查詢的縣市
        </span>
      </div>

      <div class="Homecar">
        <div class="car-btns">
          <button type="button" class="btn-orange se_btn" @click="switchAvailability('rent')">借車</button>
          <button type="button" class="disable_g btn-green se_btn" @click="switchAvailability('return')">還車</button>
        </div>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200">
            <path
              d="M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z"
              fill="currentColor"
            />
          </svg>
          藉由借 / 還車的按鈕來看所剩的數量喔
        </span>
      </div>
    </article>

    <article class="map_content">
      <!--我只是假地圖，請記得把我刪掉-->
      <img src="@/assets/images/ex_map.jpg">
      <!--我只是假地圖，請記得把我刪掉-->

      <!--<article class="Homeimg">
        <img src="@/assets/images/home_hurry.png" />
        <h1>趕快開始騎上UBike四處旅遊吧 !</h1>
        <p>邊騎腳踏車邊用手機是很危險的喔 (´･ω･`)</p>
      </article>-->

    </article>

    <article class="HomeCurrentStation" v-if="currentStation">
      <div class="StationName">
        <h2>{{ currentStation.name }}捷運木柵站</h2>
        <h4>{{ currentStation.address }}木柵路四段82巷18號前(捷運橋樑下)</h4>
      </div>
      <div class="StationNum">
        <div>
          <h5>可借:</h5>
          <span class="number">{{ currentStation.rent ? currentStation.rent : 999 }}</span>
        </div>
        <hr>
        <div>
          <h5>可還:</h5>
          <span class="number">{{ currentStation.return ? currentStation.return : 999 }}</span>
        </div>
      </div>
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

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

const mobileMenu = ref()
function handleMobileMenu(flag: boolean) {
  mobileMenu.value = flag
}
</script>

<template>
  <main class="cycling-shape">
    <section class="menu" :class="{ closeMobileMenu: !mobileMenu }">
      <button class="btn-list" :class="{ hidden: mobileMenu }" @click="handleMobileMenu(true)">查看此區域列表</button>
      <div class="menu__flex">
        <article>
          <p>
            <label>選擇縣市</label>
            <select class="form-control" v-model="selectCity" @change="handleSelect">
              <option v-for="(city, index) in cityList" :key="index" :value="city">
                {{ cityListZhTW[index] }}
              </option>
            </select>
          </p>
          <p>
            <label>請選擇區域或鄉鎮</label>
            <select class="form-control" v-model="selectTown" @change="handleTown">
              <option v-for="(town, index) in townList" :key="index" :value="town">
                {{ town }}
              </option>
            </select>
          </p>
        </article>
        <article class="mobileOnly">
          <svg @click="handleMobileMenu(false)" class="btn-close position" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 0.75C11.1562 0.75 0.75 11.1562 0.75 24C0.75 36.8438 11.1562 47.25 24 47.25C36.8438 47.25 47.25 36.8438 47.25 24C47.25 11.1562 36.8438 0.75 24 0.75ZM24 42.75C13.5938 42.75 5.25 34.4062 5.25 24C5.25 13.6875 13.5938 5.25 24 5.25C34.3125 5.25 42.75 13.6875 42.75 24C42.75 34.4062 34.3125 42.75 24 42.75ZM33.4688 18.1875C33.9375 17.8125 33.9375 17.0625 33.4688 16.5938L31.4062 14.5312C30.9375 14.0625 30.1875 14.0625 29.8125 14.5312L24 20.3438L18.0938 14.5312C17.7188 14.0625 16.9688 14.0625 16.5 14.5312L14.4375 16.5938C13.9688 17.0625 13.9688 17.8125 14.4375 18.1875L20.25 24L14.4375 29.9062C13.9688 30.2812 13.9688 31.0312 14.4375 31.5L16.5 33.5625C16.9688 34.0312 17.7188 34.0312 18.0938 33.5625L24 27.75L29.8125 33.5625C30.1875 34.0312 30.9375 34.0312 31.4062 33.5625L33.4688 31.5C33.9375 31.0312 33.9375 30.2812 33.4688 29.9062L27.6562 24L33.4688 18.1875Z"
              fill="white"
            />
          </svg>
        </article>
      </div>

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
.hidden {
  display: none !important;
}

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
.menu__flex {
  padding: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
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

/* input */
.form-control {
  padding: 15px 0px;
  text-align: center;
  color: #a4a4a4;
  border: none;
  box-shadow: 0px 3px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  width: 100%;
  outline: none;
  min-width: 250px;
  min-height: 17px; /*iphone fixed*/
}

.btn-close {
  cursor: pointer;
}
.btn-close.position {
  float: right;
  margin: 20px 10px 0 0;
  position: absolute;
  right: 0;
}
.mobileOnly {
  display: none;
}

/* 手機 size */
@media screen and (max-width: 767px) {
  .mobileOnly {
    display: block;
  }

  .menu {
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    z-index: 1050;
  }
  .menu__flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
  .menu__flex p {
    margin-bottom: 10px;
  }
  .menu__flex p br {
    display: block;
    height: 10px;
  }
  .form-control {
    width: 85%;
  }

  .btn-list {
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 4px rgb(0 0 0 / 15%);
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    margin-top: 10px;
    outline: none;
    transition: 0.3s ease;
  }

  /* 當關閉時  */
  .closeMobileMenu {
    position: fixed;
    top: initial;
    bottom: 0;
    height: 60px;
  }

  .closeMobileMenu .menu__flex {
    display: none;
  }
}
</style>

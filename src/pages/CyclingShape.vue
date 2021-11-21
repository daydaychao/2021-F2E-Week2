<script setup lang="ts">
import '@/assets/styles/root.css'
import { ref, reactive, watch } from 'vue'
import { useBikeStore } from '@/stores/bike'
import { getEnumValues, changeName } from '@/tools/'
import { StationAndAvailabilityCityNameZhTW, StationAndAvailabilityCityName, CyclingShapeCityName, CyclingShapeCityNameZhTW } from '@/types'
import Map from '@/components/mapCyclingShape.vue'


defineProps<{ msg: string }>()

const bikeStore = useBikeStore()
const cityList = getEnumValues(StationAndAvailabilityCityName)
const cityListZhTW = getEnumValues(StationAndAvailabilityCityNameZhTW)
const selectCity = ref<keyof typeof StationAndAvailabilityCityName>() //select

let geometry = [];

// api抓取data
function getCyclingShapeData() {
  if (selectCity.value) bikeStore.getCyclingShapeData(selectCity.value)
}

async function handleSelect() {
  await getCyclingShapeData()

}

function selectedCyclingShape(bikeShape:any){
  bikeStore.setSelectedCyclingShape(bikeShape);
}

</script>

<template>
  <main class="cycling-shape">
    <section class="menu">
      <p>請選擇縣市
        <select v-model="selectCity" @change="handleSelect">
          <option v-for="(city, index) in cityList" :key="index" :value="city">
            {{ cityListZhTW[index] }}
          </option>
        </select>
      </p>
      <template v-for="(bikeShape, index) in bikeStore.getCyclingShape" :key="index" :value="bikeShape">
        <div class="road" @click="selectedCyclingShape(bikeShape)">
          <div class="block">
            <p class="roadNum">{{"0"+(index+1)}}</p>
          </div>
          <div class="block">
            <p class="roadName">{{bikeShape.RouteName}}</p>
            <p class="roadDirect">
              {{bikeShape.RoadSectionStart||"無資料"}}
              <span v-if="bikeShape.Direction=='雙向'">←</span>
              <span>→</span>
              {{bikeShape.RoadSectionEnd||"無資料"}}
            </p>
            <p class="roadLength">路線長度 {{bikeShape.CyclingLength}}</p>
          </div>
        </div>
      </template>
    </section>
    
    <section class="cycling-shape__map">
      <Map 
      :cyclingShape="bikeStore.getCyclingShape" 
      :selectedCyclingShape="bikeStore.getSelectedCyclingShape"/>
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
  width: 100%
}
.menu {
  color: #fff;
  background: var(--blue85);
  width: 360px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.road{
  width: 85%;
  border-bottom: 1px solid #1393c8;
  display: flex;
  flex-direction: raw;
  justify-content: flex-start;
  align-items: center;
}

.road .block{
  padding: 0px 10px 0px 25px;
}
.road .block:first-child{
  border-right: 1px solid white;
}
.roadName{
 font-size: 20px;
}

.roadNum{
  font-size: 28px;
}
.roadDirect{
   font-size: 16px;
}

.road:last-child{
  border: none;
}


</style>
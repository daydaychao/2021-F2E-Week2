<template>
  <div style="height: 100%; width: 100%">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="location"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <template v-for="station in stations" :stations="stations" :key="station">
        <l-marker
          :lat-lng="[
            station.StationPosition.PositionLat,
            station.StationPosition.PositionLon,
          ]"
          @click="selectMarker(station.StationUID)"
        >
          <l-icon>
            <div
              :class="{
                dialogBox: true,
                empty: this.getRentReturnInfo(station.StationUID) == 0,
                rare: this.getRentReturnInfo(station.StationUID) >= 1,
                enough: this.getRentReturnInfo(station.StationUID) > 5,
              }"
            >
              {{ this.getRentReturnInfo(station.StationUID) }}
            </div>
          </l-icon>
        </l-marker>
      </template>
      <l-marker :lat-lng="location">
        <l-popup> 你在這裡 </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { useBikeStore } from "@/stores/bike";
export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
  },
  props: ["location", "stations", "availability", "isRent"],
  data() {
    return {
      zoom: 16,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
    availabilityMap() {
      let map = {};
      for (let i in this.availability) {
        map[this.availability[i].StationUID] = this.availability[i];
      }
      return map;
    },
    stationMap() {
      let map = {};
      for (let i in this.stations) {
        map[this.stations[i].StationUID] = this.stations[i];
      }
      return map;
    }
  },
  methods: {
    log(a) {
      console.log(a);
    },
    selectMarker(uid) {
      //設定當前選擇站點
      console.log("set bike station:", uid);
      let selectedInfo = {};
      selectedInfo["name"] = this.stationMap[uid].StationName.Zh_tw;
      selectedInfo["address"] = this.stationMap[uid].StationAddress.Zh_tw;
      selectedInfo["availableRent"] = this.availabilityMap[uid].AvailableRentBikes;
      selectedInfo["availableReturn"] = this.availabilityMap[uid].AvailableReturnBikes;

      const $bikeStore = useBikeStore();
      $bikeStore.setSelectedBikeStation(selectedInfo);
    },
    getRentReturnInfo(uid) {
      // 取得可借還車位置
      if (this.availabilityMap[uid]) {
        if (this.isRent) {
          return this.availabilityMap[uid].AvailableRentBikes;
        } else {
          return this.availabilityMap[uid].AvailableReturnBikes;
        }
      }else{
        return -1;
      }
    }
  },
};
</script>
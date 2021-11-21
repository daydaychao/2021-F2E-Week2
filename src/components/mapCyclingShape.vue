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
      <!-- 所有路線起點 -->
      <template v-for="(shape,index) in cyclingShape" :key="index" :value="shape">
        <l-marker :lat-lng="shape.Geometry[0][0]" @click="selectedRoad(shape)">
          <l-icon>
            <div class="dialogBox road">
              {{ '0'+(index+1) }}
            </div>
          </l-icon>
        </l-marker>
        
      </template>

      <!-- 選擇路線後出現完整路線 -->
      <template v-if="selectedCyclingShape">
        <template v-for="shape in selectedCyclingShape.Geometry" :key="shape">
          <l-polyline
          :lat-lngs="shape"
          color="red"
        ></l-polyline>
        </template>
      </template>
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
  LPolyline,
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
    LPolyline,
    LPopup,
  },
  props: ["cyclingShape","selectedCyclingShape"],
  data() {
    return {
      zoom: 16,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    location(){
      if(this.selectedCyclingShape && this.selectedCyclingShape.Geometry){
        let result = this.selectedCyclingShape.Geometry[0][0];
        return result;
      }else{
        return [23.58,120.58]
      }
    }
  },
  methods: {
    log(a) {
      console.log(a);
    },
    selectedRoad(shape) {
      const $bikeStore = useBikeStore();
      $bikeStore.setSelectedCyclingShape(shape);
    }
  },
};
</script>
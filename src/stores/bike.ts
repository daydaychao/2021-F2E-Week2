import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CyclingShapeCityName, StationAndAvailabilityCityName } from '@/types'
import { Bike as api } from '@/api'
import { defineStore } from 'pinia'

type typeBikeStore = {
  loading: boolean,
  userLocation: number[],
  bikeStations: TypeBikeStation[],
  bikeAvailability: TypeBikeAvailability[],
  bikeCyclingShape: TypeCyclingShape[],
  bikeCyclingShapeFiltered: TypeCyclingShape[],
  bikeNearByStations: TypeBikeStation[],
  bikeNearByAvailability: TypeBikeAvailability[],
  selectedBikeStation: any,
  selectedCyclingShape: any,
  isRent: boolean
}

export const useBikeStore = defineStore({
  id: 'bike',

  state: () =>
  ({
    loading: false,
    userLocation: [],
    bikeStations: [],
    bikeAvailability: [],
    bikeCyclingShape: [],
    bikeCyclingShapeFiltered: [],
    bikeNearByStations: [],
    bikeNearByAvailability: [],
    selectedBikeStation: {},
    selectedCyclingShape: {},
    isRent: true
  } as typeBikeStore),

  actions: {
    async getStationData(city: keyof typeof StationAndAvailabilityCityName, lat: number, lon: number) {
      this.setLoading(true)
      const resData = await api.getStationByCityName(city, lat, lon)
      this.bikeStations = resData
      this.setLoading(false)
    },
    async getAvailabilityData(city: keyof typeof StationAndAvailabilityCityName) {
      this.setLoading(true)
      const resData = await api.getAvailabilityCityName(city)
      this.bikeAvailability = resData
      this.setLoading(false)
    },
    async getCyclingShapeData(city: keyof typeof CyclingShapeCityName) {
      this.setLoading(true)
      const resData = await api.getCyclingShapeByCityName(city)

      // format Geometry
      for (let roadIndex = 0; roadIndex < resData.length; roadIndex++) {
        let road = resData[roadIndex]
        let roadGeometry = road.Geometry
        roadGeometry = roadGeometry.slice(16, roadGeometry.length).replaceAll("((", "").replaceAll("))", "").split("),(") // 字串格式處理
        for (let subRoadIndex = 0; subRoadIndex < roadGeometry.length; subRoadIndex++) {
          roadGeometry[subRoadIndex] = roadGeometry[subRoadIndex].replaceAll(",", ";").replaceAll(" ", ",").split(";") // 字串格式處理 + 轉陣列
          for (let pointIndex = 0; pointIndex < roadGeometry[subRoadIndex].length; pointIndex++) {
            roadGeometry[subRoadIndex][pointIndex] = roadGeometry[subRoadIndex][pointIndex].split(",") // 字串轉陣列
            let location = [] // 經緯度順序交換
            location.push(parseFloat(roadGeometry[subRoadIndex][pointIndex][1]))
            location.push(parseFloat(roadGeometry[subRoadIndex][pointIndex][0]))
            roadGeometry[subRoadIndex][pointIndex] = location
          }
        }
        resData[roadIndex].Geometry = roadGeometry
      }

      this.bikeCyclingShape = resData
      this.bikeCyclingShapeFiltered = resData
      this.setLoading(false)
    },
    async getNearByStationData(lat: number, lon: number) {
      this.setLoading(true)
      const resData = await api.getNearByStation(lat, lon)
      this.bikeNearByStations = resData
      this.setLoading(false)
    },
    async getNearByAvailabilityData(lat: number, lon: number) {
      this.setLoading(true)
      const resData = await api.getNearByAvailability(lat, lon)
      this.bikeNearByAvailability = resData
      this.setLoading(false)
    },
    async setLoading(flag: boolean) {
      this.loading = flag
    },
    setLocation(latitude: number, longitude: number) {
      this.userLocation = [latitude, longitude]
    },
    setIsRent(isRent: boolean) {
      this.isRent = isRent
    },
    setSelectedBikeStation(stationInfo: any) {
      this.selectedBikeStation = stationInfo
    },
    setSelectedCyclingShape(cyclingShapefo: any) {
      this.selectedCyclingShape = cyclingShapefo
    },
    setBikeCyclingShapeFiltered(filteredData: TypeCyclingShape[]) {
      this.bikeCyclingShapeFiltered = filteredData
    }
  },

  getters: {
    nearAvailability: (state) => {
      return state.bikeAvailability.filter((item) => {
        return state.bikeStations.find((x) => {
          return x.StationUID === item.StationUID
        })
      })
    },
    getUserLocation: (state) => state.userLocation,
    getAvailability: (state) => state.bikeAvailability,
    getCyclingShape: (state) => state.bikeCyclingShape,
    getNearByStations: (state) => state.bikeNearByStations,
    getNearByAvailability: (state) => state.bikeNearByAvailability,
    getSelectedBikeStation: (state) => state.selectedBikeStation,
    getIsRent: (state) => state.isRent,
    getHasLocation: (state) => Boolean(state.userLocation[0]),
    getSelectedCyclingShape: (state) => state.selectedCyclingShape,
    getCyclingShapeTown: (state) => {
      let TownListUnclean = state.bikeCyclingShape
        .sort()
        .map((item: TypeCyclingShape) => {
          return item.Town
        }).filter((x) => typeof x == 'string')

      return ['全部', ...new Set(TownListUnclean)]
    },
    getBikeCyclingShapeFiltered: (state) => {
      state.bikeCyclingShapeFiltered
    }
  }
})

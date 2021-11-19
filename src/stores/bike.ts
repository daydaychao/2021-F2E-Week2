import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CyclingShapeCityName, StationAndAvailabilityCityName } from '@/types'
import { Bike as api } from '@/api'
import { defineStore } from 'pinia'

type typeBikeStore = {
  loading: boolean,
  userLocation: number[],
  bikeStations: TypeBikeStation[],
  bikeAvailability: TypeBikeAvailability[],
  bikeCyclingShape: TypeCyclingShape[],
  bikeNearByStations: TypeBikeStation[],
  bikeNearByAvailability: TypeBikeAvailability[],
  selectedBikeStation: any,
  isRent: boolean
}

export const useBikeStore = defineStore({
  id: 'bike',

  state: () =>
  ({
    loading: false,
    userLocation: [], //初始值MLD
    bikeStations: [],
    bikeAvailability: [],
    bikeCyclingShape: [],
    bikeNearByStations: [],
    bikeNearByAvailability:[],
    selectedBikeStation: {},
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
      this.bikeCyclingShape = resData
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
    setIsRent(isRent: boolean){
      this.isRent = isRent;
    },
    setSelectedBikeStation(stationInfo:any) {
      this.selectedBikeStation = stationInfo;
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
    getAvailability: (state) => state.bikeAvailability,
    getCyclingShape: (state) => state.bikeCyclingShape,
    getNearByStations: (state) => state.bikeNearByStations,
    getNearByAvailability: (state) => state.bikeNearByAvailability,
    getSelectedBikeStation: (state) => state.selectedBikeStation,
    getIsRent: (state) => state.isRent
  },
})

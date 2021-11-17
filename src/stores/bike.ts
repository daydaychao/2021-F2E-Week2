import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CyclingShapeCityName, StationAndAvailabilityCityName } from '@/types'
import { Bike as api } from '@/api'
import { defineStore } from 'pinia'

type typeBikeStore = {
  loading: boolean
  userLocation: number[]
  bikeStations: TypeBikeStation[]
  bikeAvailability: TypeBikeAvailability[]
  bikeCyclingShape: TypeCyclingShape[],
}

export const useBikeStore = defineStore({
  id: 'bike',

  state: () =>
  ({
    loading: false,
    userLocation: [22.6721792, 120.2847744], //初始值MLD
    bikeStations: [],
    bikeAvailability: [],
    bikeCyclingShape: [],
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
    async setLoading(flag: boolean) {
      this.loading = flag
    },
    setLocation(latitude: number, longitude: number) {
      this.userLocation = [latitude, longitude]
    },
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
  },
})

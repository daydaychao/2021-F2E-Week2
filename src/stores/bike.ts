import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CyclingShapeCityName, StationAndAvailabilityCityName } from '@/types'
import { Bike as api } from '@/api'
import { defineStore } from 'pinia'

type typeBikeStore = {
  loading: boolean
  bikeStations: TypeBikeStation[]
  bikeAvailability: TypeBikeAvailability[]
  bikeCyclingShape: TypeCyclingShape[]
}

export const useBikeStore = defineStore({
  id: 'bike',

  state: () =>
  ({
    loading: false,
    bikeStations: [],
    bikeAvailability: [],
    bikeCyclingShape: [],
  } as typeBikeStore),

  actions: {
    async getStationData(city: keyof typeof StationAndAvailabilityCityName) {
      this.setLoading(true)
      const resData = await api.getStationByCityName(city)
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
    }
  },

  getters: {
    getStation: (state) => state.bikeStations,
    getAvailability: (state) => state.bikeAvailability,
    getCyclingShape: (state) => state.bikeCyclingShape,
  },
})

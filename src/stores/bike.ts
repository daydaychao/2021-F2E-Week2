import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CyclingShapeCityName, StationAndAvailabilityCityName } from '@/types'
import { Bike as api } from '@/api'
import { defineStore } from 'pinia'

type typeBikeStore = {
  bikeStations: TypeBikeStation[]
  bikeAvailability: TypeBikeAvailability[]
  bikeCyclingShape: TypeCyclingShape[]
}

export const useBikeStore = defineStore({
  id: 'bike',

  state: () =>
  ({
    bikeStations: [],
    bikeAvailability: [],
    bikeCyclingShape: []
  } as typeBikeStore),

  actions: {
    async getStationData(city: StationAndAvailabilityCityName) {
      const resData = await api.getStationByCityName(city)
      this.bikeStations = resData
    },
    async getAvailabilityData(city: StationAndAvailabilityCityName) {
      const resData = await api.getAvailabilityCityName(city)
      this.bikeStations = resData
    },
    async getCyclingShapeData(city: CyclingShapeCityName) {
      const resData = await api.getCyclingShapeByCityName(city)
      this.bikeStations = resData
    },
  },

  getters: {
    getStation: (state) => state.bikeStations,
    getAvailability: (state) => state.bikeAvailability,
    getCyclingShape: (state) => state.bikeCyclingShape,
  },
})

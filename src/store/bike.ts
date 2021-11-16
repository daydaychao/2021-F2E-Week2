import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CityName } from '@/types'
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
    async getStationData(city: CityName | string) {
      const resData = await api.getStationByCityName(city)
      this.bikeStations = resData
    },
    async getAvailabilityData(city: CityName | string) {
      const resData = await api.getAvailabilityCityName(city)
      this.bikeStations = resData
    },
    async getCyclingShapeData(city: CityName | string) {
      const resData = await api.getCyclingShapeByCityName(city)
      this.bikeStations = resData
    },
  },
})

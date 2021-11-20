import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, StationAndAvailabilityCityName as stationCN, CyclingShapeCityName as cyclingCN } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import jsSHA from 'jssha'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlBikeStation = 'Bike/Station/'
const urlAvailability = 'Bike/Availability/'
const urlCyclingShape = 'Cycling/Shape/'
const urlNearByStation = 'Bike/Station/NearBy'
const urlNearByAvailability = 'Bike/Availability/NearBy'

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始

  let AppID = 'bcee97e768f0431784373e00f3539404'
  let AppKey = 'bAY5MKsU_isyBjPsnFHcHlJgd1k'
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toUTCString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}

// 篩選需要的資料
function narrowingBikeStations(item: TypeBikeStation) {
  return {
    StationUID: item.StationUID,
    // StationID: item.StationUID,
    // AuthorityID: item.StationUID,
    StationName: {
      Zh_tw: item.StationName.Zh_tw,
      // En: item.StationName.En
    },
    StationPosition: {
      PositionLon: item.StationPosition.PositionLon,
      PositionLat: item.StationPosition.PositionLat,
      // GeoHash: item.StationPosition.GeoHash
    },
    StationAddress: {
      Zh_tw: item.StationAddress.Zh_tw,
      // En: item.StationAddress.En
    },
    // BikesCapacity: item.BikesCapacity,
    // ServiceType: item.ServiceType,
    // SrcUpdateTime: item.SrcUpdateTime,
    // UpdateTime: item.UpdateTime
  }
}
function narrowingTypeBikeAvailability(item: TypeBikeAvailability) {
  return {
    StationUID: item.StationUID,
    // StationID: item.StationID,
    ServiceStatus: item.ServiceStatus,
    ServiceType: item.ServiceType,
    AvailableRentBikes: item.AvailableRentBikes,
    AvailableReturnBikes: item.AvailableReturnBikes,
    // SrcUpdateTime: item.SrcUpdateTime,
    // UpdateTime: item.UpdateTime
  }
}
function narrowingTypeCyclingShape(item: TypeCyclingShape) {
  return {
    RouteName: item.RouteName,
    AuthorityName: item.AuthorityName,
    CityCode: item.CityCode,
    City: item.City,
    Town: item.Town,
    RoadSectionStart: item.RoadSectionStart,
    RoadSectionEnd: item.RoadSectionEnd,
    Direction: item.Direction,
    CyclingLength: item.CyclingLength,
    FinishedTime: item.FinishedTime,
    UpdateTime: item.UpdateTime,
    Geometry: item.Geometry
  }
}

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST))
}

async function GET(endpoint: string, narrowCallback: Function): Promise<any> {
  return fetch(API(endpoint), {
    method: 'GET',
    headers: getAuthorizationHeader()
  })
    .then((res) => res.json())
    .then((resJson) => resJson.map(narrowCallback, resJson))
    .then(tap(console.log))
}
// const filter = '?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON'
export const Bike = {
  getStationByCityName: (cityName: keyof typeof stationCN, lat?: number, lon?: number) => GET(`${urlBikeStation}${cityName}?$top=30`, narrowingBikeStations),
  getAvailabilityCityName: (cityName: keyof typeof stationCN) => GET(`${urlAvailability}${cityName}?$top=30`, narrowingTypeBikeAvailability),
  getCyclingShapeByCityName: (cityName: keyof typeof cyclingCN) => GET(`${urlCyclingShape}${cityName}`, narrowingTypeCyclingShape),
  getNearByStation: (lat: number, lon: number) => GET(`${urlNearByStation}?$spatialFilter=nearby(${lat},${lon},${500})`, narrowingBikeStations),
  getNearByAvailability: (lat: number, lon: number) => GET(`${urlNearByAvailability}?$spatialFilter=nearby(${lat},${lon},${500})`, narrowingTypeBikeAvailability)
}

import { TypeBikeStation, TypeBikeAvailability, TypeCyclingShape, CityName } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import jsSHA from 'jssha'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlBikeStation = 'Bike/Station/'
const urlAvailability = 'Bike/Availability/'
const urlCyclingShape = 'Cycling/Shape/'

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

function narrowingBikeStations(item: TypeBikeStation) {
  return {
    StationUID: item.StationUID,
    StationID: item.StationUID,
    AuthorityID: item.StationUID,
    StationName: {
      Zh_tw: item.StationName.Zh_tw,
      En: item.StationName.En
    },
    StationPosition: {
      PositionLon: item.StationPosition.PositionLon,
      PositionLat: item.StationPosition.PositionLat,
      GeoHash: item.StationPosition.GeoHash
    },
    StationAddress: {
      Zh_tw: item.StationAddress.Zh_tw,
      En: item.StationAddress.En
    },
    BikesCapacity: item.BikesCapacity,
    ServiceType: item.ServiceType,
    SrcUpdateTime: item.SrcUpdateTime,
    UpdateTime: item.UpdateTime
  }
}
function narrowingTypeBikeAvailability(item: TypeBikeAvailability) {
  return {
    StationUID: item.,
    StationID: item.,
    ServiceStatus: item.,
    ServiceType: item.,
    AvailableRentBikes: item.,
    AvailableReturnBikes: item.,
    SrcUpdateTime: item.,
    UpdateTime: item.
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
const filter = '?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON'
export const Bike = {
  getStationByCityName:  (cityName: CityName | string) => GET(`${urlBikeStation}${cityName}${filter}`,narrowingBikeStations),
  getAvailabilityCityName:  (cityName: CityName | string) => GET(`${urlAvailability}${cityName}${filter}`,narrowingBikeStations),
  getCyclingShapeByCityName:  (cityName: CityName | string) => GET(`${urlCyclingShape}${cityName}${filter}`,narrowingBikeStations),
}

// NOTE RESTFUL api 說明
// GET 取
// POST 新增
// PATCH 更新
// DELETE 刪除
//
// fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei`)
//   .then((response) => response.json())
//   .then((data) => console.log('fetch', data))
//   .catch((err) => {
//     console.error(err)
//   })

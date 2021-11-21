
// https://ptx.transportdata.tw/MOTC/v2/Bike/api-docs/oas

export enum StationAndAvailabilityCityName {
  // ChanghuaCounty = "ChanghuaCounty",
  Chiayi = "Chiayi",
  Hsinchu = "Hsinchu",
  Kaohsiung = "Kaohsiung",
  KinmenCounty = "KinmenCounty",
  MiaoliCounty = "MiaoliCounty",
  NewTaipei = "NewTaipei",
  PingtungCounty = "PingtungCounty",
  Taichung = "Taichung",
  Tainan = "Tainan",
  Taipei = "Taipei",
  Taoyuan = "Taoyuan",
}

export enum StationAndAvailabilityCityNameZhTW {
  // ChanghuaCounty = "彰化縣",
  Chiayi = "嘉義市",
  Hsinchu = "新竹市",
  Kaohsiung = "高雄市",
  KinmenCounty = "金門縣",
  MiaoliCounty = "苗栗縣",
  NewTaipei = "新北市",
  PingtungCounty = "屏東縣",
  Taichung = "臺中市",
  Tainan = "臺南市",
  Taipei = "臺北市",
  Taoyuan = "桃園市",
}

export enum CyclingShapeCityName {
  ChanghuaCounty = "ChanghuaCounty",
  Chiayi = "Chiayi",
  ChiayiCounty = "ChiayiCounty",
  // Hsinchu = "Hsinchu",
  HsinchuCounty = "HsinchuCounty",
  HualienCounty = "HualienCounty",
  Kaohsiung = "Kaohsiung",
  Keelung = "Keelung",
  KinmenCounty = "KinmenCounty",
  LienchiangCounty = "LienchiangCounty",
  MiaoliCounty = "MiaoliCounty",
  NantouCounty = "NantouCounty",
  NewTaipei = "NewTaipei",
  PenghuCounty = "PenghuCounty",
  PingtungCounty = "PingtungCounty",
  Taichung = "Taichung",
  Tainan = "Tainan",
  Taipei = "Taipei",
  TaitungCounty = "TaitungCounty",
  Taoyuan = "Taoyuan",
  YilanCounty = "YilanCounty",
  YunlinCounty = "YunlinCounty",
}

export enum CyclingShapeCityNameZhTW {
  ChanghuaCounty = "彰化縣",
  Chiayi = "嘉義市",
  ChiayiCounty = "嘉義縣",
  // Hsinchu = "新竹市",
  HsinchuCounty = "新竹縣",
  HualienCounty = "花蓮縣",
  Kaohsiung = "高雄市",
  Keelung = "基隆市",
  KinmenCounty = "金門縣",
  LienchiangCounty = "連江縣",
  MiaoliCounty = "苗栗縣",
  NantouCounty = "南投縣",
  NewTaipei = "新北市",
  PenghuCounty = "澎湖縣",
  PingtungCounty = "屏東縣",
  Taichung = "臺中市",
  Tainan = "臺南市",
  Taipei = "臺北市",
  TaitungCounty = "臺東縣",
  Taoyuan = "桃園市",
  YilanCounty = "宜蘭縣",
  YunlinCounty = "雲林縣",
}


// 公共自行車租借站位資料
export type TypeBikeStation = {
  StationUID: string,
  StationID: string,
  AuthorityID: string,
  StationName: {
    Zh_tw: string,
    En: string
  },
  StationPosition: {
    PositionLon: number,
    PositionLat: number,
    GeoHash: string,
  },
  StationAddress: {
    Zh_tw: string,
    En: string
  },
  BikesCapacity: number,
  ServiceType: number,
  SrcUpdateTime: string,
  UpdateTime: string
}

// 公共自行車即時車位資料
export type TypeBikeAvailability = {
  StationUID: string,
  StationID: string,
  ServiceStatus: number,
  ServiceType: number,
  AvailableRentBikes: number,
  AvailableReturnBikes: number,
  SrcUpdateTime: string,
  UpdateTime: string
}

// 縣市之自行車道路網圖資
export type TypeCyclingShape = {
  RouteName: string,
  AuthorityName: string,
  CityCode: string,
  City: string,
  Town: string,
  RoadSectionStart: string,
  RoadSectionEnd: string,
  Direction: string,
  CyclingLength: number,
  FinishedTime: string,
  UpdateTime: string,
  Geometry: string
}
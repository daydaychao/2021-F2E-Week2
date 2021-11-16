
export enum CityName {
  Taipei = 'Taipei',
  NewTaipei = 'NewTaipei',
  HsinchuCounty = 'HsinchuCounty',
  Keelung = 'Keelung',
  Taoyuan = 'Taoyuan',
  Hsinchu = 'Hsinchu',
  YilanCounty = 'YilanCounty',
  MiaoliCounty = 'MiaoliCounty',
  Taichung = 'Taichung',
  ChanghuaCounty = 'ChanghuaCounty',
  NantouCounty = 'NantouCounty',
  YunlinCounty = 'YunlinCounty',
  Chiayi = 'Chiayi',
  ChiayiCounty = 'ChiayiCounty',
  Tainan = 'Tainan',
  Kaohsiung = 'Kaohsiung',
  PingtungCounty = 'PingtungCounty',
  PenghuCounty = 'PenghuCounty',
  TaitungCounty = 'TaitungCounty',
  HualienCounty = 'HualienCounty',
  KinmenCounty = 'KinmenCounty',
  LienchiangCounty = 'LienchiangCounty'
}

export enum CityNameZhTW {
  Taipei = '臺北市',
  NewTaipei = '新北市',
  HsinchuCounty = '新竹縣',
  Keelung = '基隆市',
  Taoyuan = '桃園市',
  Hsinchu = '新竹市',
  YilanCounty = '宜蘭縣',
  MiaoliCounty = '苗栗縣',
  Taichung = '臺中市',
  ChanghuaCounty = '彰化縣',
  NantouCounty = '南投縣',
  YunlinCounty = '雲林縣',
  Chiayi = '嘉義市',
  ChiayiCounty = '嘉義縣',
  Tainan = '臺南市',
  Kaohsiung = '高雄市',
  PingtungCounty = '屏東縣',
  PenghuCounty = '澎湖縣',
  TaitungCounty = '臺東縣',
  HualienCounty = '花蓮縣',
  KinmenCounty = '金門縣',
  LienchiangCounty = '連江縣'
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
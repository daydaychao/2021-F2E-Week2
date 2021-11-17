export const getEnumValues = (object: object) => {
  return Object.values(object)
}

export const getEnumKeys = (object: object) => {
  return Object.keys(object)
}

// 城市中文英文轉換 (字串陣列,enum)
export const changeName = (preList: string, enumList: any) => {
  let newList: string[] = []
  preList.map((x) => {
    return (Object.keys(enumList) as Array<keyof typeof enumList>).map((key, index) => {
      if (x === key) {
        newList.push(enumList[key])
      }
    })
  })
  return newList
}
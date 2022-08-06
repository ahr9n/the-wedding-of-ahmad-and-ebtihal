export interface ICouple {
  name: string
  fullName: string
  father: string
  mother: string
  gender: string
  childNum: number
}

export interface ICouples {
  husband: ICouple
  wife: ICouple
}

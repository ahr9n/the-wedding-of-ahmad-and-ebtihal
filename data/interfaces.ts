export interface ICouple {
  name: string
  fullName: string
  father: string
  relation: string
}

export interface ICouples {
  husband: ICouple
  wife: ICouple
}

export interface IDalil {
  title: string
  intro: string | null
  arab: string | null
  content: string
  source: string
}

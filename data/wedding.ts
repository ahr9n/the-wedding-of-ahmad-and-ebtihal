import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Hasan",
    fullName: "Muhammad Hasan",
    father: "Sony Sugema (alm)",
    mother: "Siti Romelah",
    gender: "Putra",
    childNum: 8,
  },
  wife: {
    name: "Ismi",
    fullName: "Ismi Dinda Muslimah",
    father: "Budiarso",
    mother: "Ida Farida",
    gender: "Putri",
    childNum: 2,
  },
}

export const MARRIAGE_TIME = {
  DATE: {
    EN: "Saturday, 3 September 2022",
    ID: "Sabtu, 3 September 2022",
  },
  DATE_VALUE: new Date("September 3, 2022"),
  START_TIME: "08:30",
  END_TIME: "15:30",
}

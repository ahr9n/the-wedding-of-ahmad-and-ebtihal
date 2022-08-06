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

export const MARRIAGE = {
  time: {
    date: {
      en: "Saturday, 3 September 2022",
      id: "Sabtu, 3 September 2022",
    },
    dateValue: new Date("September 3, 2022"),
    startTime: "08:30",
    endTime: "15:30",
  },
  location: {
    place: "Jl. At-Taqwa Muhajirun, Negara Ratu, Kec. Natar, Lampung 35362",
    url: "http://maps.google.com/maps?q=loc:-5.325106,%20105.172285",
  },
}

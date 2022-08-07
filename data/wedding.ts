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
    place:
      "Kediaman Mempelai Wanita: Pondok Pesantren Al-Fatah. Gg. Tasamuh,  Muhajirun, Negararatu, Natar, Lampung Selatan, prov. Lampung Rt. 36, RW. 14 No. 129 (35362)",
    url: "https://www.google.com/maps?q=-5.3251859,105.1718993",
  },
  form: {
    url: "https://forms.gle/QqD2EnSwFp5MzGuR7",
  },
}

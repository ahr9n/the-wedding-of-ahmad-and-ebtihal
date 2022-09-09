import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Ahmad",
    fullName: "Ahmad Abdulrahman",
    father: "Abdulrahman Radwan",
  },
  wife: {
    name: "Ebtihal",
    fullName: "Ebtihal Alaa",
    father: "Alaa Hussein",
  },
}

export const MARRIAGE = {
  time: {
    date: {
      en: "Sunday, 18 September 2022",
      id: "Sunday, 18 September 2022",
    },
    dateValue: new Date("September 18, 2022"),
    startTime: "08:00",
    endTime: "20:00",
  },
  location: {
    place:
      "Kafr El-Sheikh Selim, Tanta, Gharbiah, Egypt",
    url: "https://www.google.com/maps?q=30.7356395,30.9755261",
  },
  form: {
    url: "https://forms.gle/",
  },
}

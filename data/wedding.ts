import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Ahmad",
    fullName: "المهندس: أحمد عبد الرحمن",
    father: "عبد الرحمن رضوان",
    relation: "نجل الشيخ",
  },
  wife: {
    name: "Ebtihal",
    fullName: "المهندسة: إبتهال علاء",
    father: "علاء حسين",
    relation: "كريمة الأستاذ",
  },
}

export const MARRIAGE = {
  time: {
    date: {
      en: "Sunday, 18 September 2022",
      id: ‎"يوم الأحد"+"/n"+"الموافق الثاني والعشرين من شهر صفر للعام 1444 هجرية"+"/n"+"الثامن عشر من شهر سبتمبر للعام 2022 ميلادية",
    },
    dateValue: new Date("September 18, 2022"),
    startTime: "03:00",
    endTime: "09:00",
  },
  location: {
    place: "منزل العريس بقرية كفر الشيخ سليم",
    url: "https://www.google.com/maps?q=30.7356395,30.9755261",
  },
  form: {
    url: "https://forms.gle/LRKxGUcvCF8qSCNJA",
  },
}

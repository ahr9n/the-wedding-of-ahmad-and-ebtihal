import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Ahmad",
    fullName: "المهندس: أحمد هلال",
    father: "هلال الفقي",
    relation: "نجل المرحوم",
  },
  wife: {
    name: "Hager",
    fullName: "الدكتورة: هاجر فوزي",
    father: "فوزي رحاب",
    relation: "كريمة المرحوم",
  },
}

export const MARRIAGE = {
  time: {
    date: {
      en: "Sat, 12 August 2023",
      id: {
        day: "يوم السبت",
        hijri: "الموافق الخامس والعشرين من شهر الله المحرم للعام ١٤٤٥ هجرية",
        miladi: "الثاني عشر من شهر أغسطس للعام ٢٠٢٣ ميلادية",
      },
    },
    dateValue: new Date("August 12, 2023"),
    startTime: "21:00",
    endTime: "23:59",
  },
  location: {
    place: "منزل العريس بقرية كفر الشيخ سليم",
    url: "https://www.google.com/maps?q=30.7356395,30.9755261",
  },
  form: {
    url: "https://forms.gle/LRKxGUcvCF8qSCNJA",
  },
}

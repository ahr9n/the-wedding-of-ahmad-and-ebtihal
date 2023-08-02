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
        day: "يوم السبت الموافق الثاني عشر من شهر أغسطس للعام ٢٠٢٣ ميلادية",
        // hijri: "الموافق الخامس والعشرين من شهر الله المحرم للعام ١٤٤٥ هجرية",
        // miladi: " الموافق الثاني عشر من شهر أغسطس للعام ٢٠٢٣ ميلادية",
      },
    },
    dateValue: new Date("August 12, 2023"),
    startTime: "21:00",
    endTime: "23:59",
  },
  location: {
    place: "قاعة الطاووس، أمام كوبري سبرباي الطريق السريع المؤدي للقاهرة، بجوار كارليتو كافيه",
    url: "https://goo.gl/maps/BEh8x3schUoksmRX7",
  },
  form: {
    url: "https://forms.gle/LRKxGUcvCF8qSCNJA",
  },
}

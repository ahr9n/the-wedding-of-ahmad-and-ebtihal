import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Ahmad",
    fullName: "المهندس: أحمد",
  },
  wife: {
    name: "Aya",
    fullName: "المهندسة: آية",
  },
}

export const MARRIAGE = {
  time: {
    date: {
      en: "Tue, 15 July 2025",
      id: {
        day: " يوم الثلاثاء الموافق الخامس عشر من شهر يوليو للعام ٢٠٢٥ ميلادية ",
        // hijri: "الموافق الخامس والعشرين من شهر الله المحرم للعام ١٤٤٥ هجرية",
        // miladi: " الموافق الثاني عشر من شهر أغسطس للعام ٢٠٢٣ ميلادية",
      },
    },
    dateValue: new Date("July 15, 2025"),
    startTime: "21:00",
    endTime: "23:59",
  },
  location: {
    place: "قصر الروضة، بجوار مفارق الزقازيق - بنها",
    url: "https://maps.app.goo.gl/iyfBQ4DmAgwUYtsw5",
  },
  form: {
    url: "https://forms.gle/LRKxGUcvCF8qSCNJA",
  },
}

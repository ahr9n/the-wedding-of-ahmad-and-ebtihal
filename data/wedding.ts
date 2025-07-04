import { ICouples } from "data/interfaces"

export const COUPLES: ICouples = {
  husband: {
    name: "Ahmad",
    fullName: "Eng: Ahmad",
  },
  wife: {
    name: "Aya",
    fullName: "Eng: Aya",
  },
}

export const MARRIAGE = {
  time: {
    date: {
      en: "Tue, 15 Jul. 2025",
      id: {
        day: "on Tuesday, 15th of July 2025",
        // hijri: "الموافق الخامس والعشرين من شهر الله المحرم للعام ١٤٤٥ هجرية",
        // miladi: " الموافق الثاني عشر من شهر أغسطس للعام ٢٠٢٣ ميلادية",
      },
    },
    dateValue: new Date("July 15, 2025"),
    startTime: "20:00",
    endTime: "23:59",
  },
  location: {
    place: "Al-Rawda Palace, next to Zagazig-Banha crossroads",
    url: "https://maps.app.goo.gl/iyfBQ4DmAgwUYtsw5",
  },
  form: {
    url: "https://forms.gle/LRKxGUcvCF8qSCNJA",
  },
}

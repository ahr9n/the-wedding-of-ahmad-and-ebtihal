import React from "react"

import { FaStarAndCrescent } from "react-icons/fa"

import Card from "@components/Card"

const Rewards = () => {
  return (
    <Card title="Dalil Dalam Pernikahan">
      <div className="my-7 font-serif text-xl xl:px-7 xl:text-3xl">
        وَاَنْكِحُوا الْاَيَامٰى مِنْكُمْ وَالصّٰلِحِيْنَ مِنْ عِبَادِكُمْ
        وَاِمَاۤىِٕكُمْۗ اِنْ يَّكُوْنُوْا فُقَرَاۤءَ يُغْنِهِمُ اللّٰهُ مِنْ
        فَضْلِهٖۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
      </div>
      <div className="xl:px-7">
        "Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan
        juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang
        laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi
        kemampuan kepada mereka dengan karunia-Nya. Dan Allah Mahaluas
        (pemberian-Nya), Maha Mengetahui."
      </div>
      <div>QS. An-Nur: 32</div>

      <label
        htmlFor="modal-dalil"
        className="modal-button btn btn-outline my-3"
      >
        <FaStarAndCrescent size={20} className="mr-2" />
        Lihat Dalil Nikah Lainnya!
      </label>
    </Card>
  )
}

export default Rewards

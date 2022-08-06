import React from "react"

import Card from "@components/Card"
import Dalil from "@components/Dalil"

const cardStyle = {
  backgroundColor: "rgba(0,197,97,0.5)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

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
        htmlFor="my-modal-4"
        className="modal-button btn btn-secondary my-3"
      >
        Lihat Dalil Nikah Lainnya!
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Dalil />
        </label>
      </label>
    </Card>
  )
}

export default Rewards

import React from "react"

import Card from "@components/Card"
import { ICouple } from "data/interfaces"
import { COUPLES } from "data/wedding"

const cardStyle = {
  backgroundColor: "rgba(0,197,97,0.5)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const Invitation = () => {
  const renderName = (couple: ICouple) => {
    const { fullName, father, mother, gender, childNum } = couple
    return (
      <div>
        <h1 className="font-curly text-4xl xl:text-6xl">{fullName}</h1>
        <div className="my-2">
          {gender} ke-{childNum} dari <b>Bapak {father}</b> dan{" "}
          <b>Ibu {mother}</b>
        </div>
      </div>
    )
  }

  const renderCoupleNames = () => {
    return (
      <div className="mt-10 mb-5">
        {renderName(COUPLES.wife)}
        <h3 className="my-8 font-curly text-2xl xl:text-4xl">&</h3>
        {renderName(COUPLES.husband)}
      </div>
    )
  }

  return (
    <Card title="Assalamualaikum Warahmatullahi Wabarakatuh">
      <h3>
        Dengan memohon Rahmat dan Ridho Allah ﷻ, kami berniat untuk memohon doa
        serta mengundang bapak/ibu/saudara/i untuk menghadiri pernikahan kami:
      </h3>
      {renderCoupleNames()}
    </Card>
  )
}

export default Invitation

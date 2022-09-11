import React from "react"

import Card from "@components/Card"
import Countdown from "@components/Countdown"
import { 
  renderDateTime,
  renderButtonLocation,
  renderDurationTime,
  renderLocation
  } from "@utils/utils"

import { ICouple } from "data/interfaces"
import { COUPLES } from "data/wedding"

const cardStyle = {
  backgroundColor: "rgba(0,197,97,0.5)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const Headline = () => {
  const renderName = (couple: ICouple) => {
    const { fullName, father, relation } = couple
    return (
      <div>
        <h1 className="font-curly text-4xl xl:text-6xl">{fullName}</h1>
        <div className="my-2">
          {relation} <b>{father}</b>
        </div>
      </div>
    )
  }

  const renderCoupleNames = () => {
    return (
      <div className="mt-10 mb-5">
        {renderName(COUPLES.husband)}
        <h3 className="mt-9 mb-5 font-curly text-3xl xl:text-4xl">&</h3>
        {renderName(COUPLES.wife)}
      </div>
    )
  }

  return (
    <Card title="وليمة زواج وحفل زفاف">
      <div className="my-5 font-curly text-4xl xl:text-5xl">
      	{COUPLES.husband.name} & {COUPLES.wife.name}
      </div>
      
      <h3>بقلوبٍ مليئة بالحب يشرّفنا دعوة سيادتكم لحضور وليمة الغداء وحفل زفاف</h3>
      {renderCoupleNames()}
      
      <div></div>
      {renderDateTime()}
      {renderDurationTime()}
      {renderLocation()}
      {renderButtonLocation()}
    </Card>
  )
}

export default Invitation

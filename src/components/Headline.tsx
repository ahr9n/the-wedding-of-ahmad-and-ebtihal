import React from "react"

import { ImCalendar } from "react-icons/im"

import Countdown from "@components/Countdown"
import { COUPLES, MARRIAGE_TIME } from "data/wedding"

const cardStyle = {
  backgroundColor: "rgba(0,197,97,0.5)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const Headline = () => {
  const renderName = (name: string) => {
    return <span className="font-curly text-4xl xl:text-5xl">{name}</span>
  }

  const renderCoupleNames = () => {
    return (
      <div className="my-5 font-curly text-4xl xl:text-5xl">
        {renderName(COUPLES.wife.name)} & {renderName(COUPLES.husband.name)}
      </div>
    )
  }

  const renderDateTime = () => {
    return (
      <div className="my-3 flex items-center justify-center">
        <ImCalendar size={20} className="mr-2" />
        {MARRIAGE_TIME.DATE.ID}
      </div>
    )
  }
  return (
    <div
      style={cardStyle}
      className="by-5 card image-full my-5 w-96 text-neutral-content lg:w-1/2"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">Pernikahan</h2>
        {renderCoupleNames()}
        <div>InsyaAllah akan dilaksanakan pada:</div>
        {renderDateTime()}
        <Countdown />
      </div>
    </div>
  )
}

export default Headline

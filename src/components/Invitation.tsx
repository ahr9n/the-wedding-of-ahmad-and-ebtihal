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
    const { fullName, father } = couple
    return (
      <div>
        <h1 className="font-curly text-4xl xl:text-6xl">{fullName}</h1>
        <div className="my-2">بنت <b>السيد {father}</b></div>
      </div>
    )
  }

  const renderCoupleNames = () => {
    return (
      <div className="mt-10 mb-5">
        {renderName(COUPLES.wife)}
        <h3 className="mt-9 mb-5 font-curly text-3xl xl:text-4xl">&</h3>
        {renderName(COUPLES.husband)}
      </div>
    )
  }

  return (
    <Card title="السلام عليكم ورحمة الله وبركاته">
      <h3>ننوي بفضل الله دعوة الأب/الأم/الأشقاء لحضور حفل زفاف:</h3>
      {renderCoupleNames()}
    </Card>
  )
}

export default Invitation

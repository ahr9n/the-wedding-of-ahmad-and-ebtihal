import React from "react"

import Card from "@components/Card"
import Countdown from "@components/Countdown"
import { renderCoupleNames, renderDateTime } from "@utils/utils"

const Headline = () => {
  return (
    <Card title="حفل زفاف">
      {renderCoupleNames()}
      <div>سيتم حفل الزفاف بمشيئته تعالى في</div>
      {renderDateTime()}
      <Countdown />
    </Card>
  )
}

export default Headline

import React from "react"

import Card from "@components/Card"
import Countdown from "@components/Countdown"
import { renderCoupleNames, renderDateTime } from "@utils/utils"

const Headline = () => {
  return (
    <Card style="font-family: Reem Kufi;" title="حفل زفاف">
      {renderCoupleNames()}
      <div>سيتم حفل الزفاف بمشيئة الله في</div>
      {renderDateTime()}
      <Countdown />
    </Card>
  )
}

export default Headline

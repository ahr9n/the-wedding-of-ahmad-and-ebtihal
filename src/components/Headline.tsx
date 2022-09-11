import React from "react"

import Card from "@components/Card"
import Countdown from "@components/Countdown"
import { renderCoupleNames, renderDateTime } from "@utils/utils"

const Headline = () => {
  return (
    <Card title="وليمة زواج وحفل زفاف">
      {renderCoupleNames()}
      {renderDateTime("headline")}
      <Countdown />
    </Card>
  )
}

export default Headline

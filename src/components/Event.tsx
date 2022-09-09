import React from "react"

import Card from "@components/Card"
import {
  renderButtonLocation,
  renderCoupleNames,
  renderDateTime,
  renderDurationTime,
  renderLocation,
} from "@utils/utils"

const Event = () => {
  return (
    <Card title="دعوة حفل الزفاف">
      {renderCoupleNames()}
      <div>إنه لشرف وسعادة لنا أن ندعوكم للحضور ولمباركة كل من العروس والعريس</div>
      <div className="mt-6 text-2xl font-bold">مراسم استقبال حفل الزفاف</div>
      {renderDateTime()}
      {renderDurationTime()}
      {renderLocation()}
      {renderButtonLocation()}
    </Card>
  )
}

export default Event

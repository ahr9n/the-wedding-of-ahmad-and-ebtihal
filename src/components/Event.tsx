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
      <div>
        المجد أقبل بالأفراح مبتسما • والسعد أمسى على الأكوان مرتسما
        وطائر الجود من عليائه صدحا • وكوكب السعد في أفق العُلا نجما
        يشرّفنا ويُسعدنا أن ندعوكم للحضور ولمباركة العروسين
      </div>
      <div className="mt-6 text-2xl font-bold">محل الزفاف</div>
      {renderDateTime()}
      {renderDurationTime()}
      {renderLocation()}
      {renderButtonLocation()}
    </Card>
  )
}

export default Event

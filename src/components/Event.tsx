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
    <Card title="Undangan dan Acara Pernikahan">
      {renderCoupleNames()}
      <div>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai
      </div>
      <div className="mt-6 text-2xl font-bold">Akad & Resepsi Pernikahan</div>
      {renderDateTime()}
      {renderDurationTime()}
      {renderLocation()}
      {renderButtonLocation()}
    </Card>
  )
}

export default Event

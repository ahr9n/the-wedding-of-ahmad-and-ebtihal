/* eslint-disable prettier/prettier */
import Card from "@components/Card"
import { renderCoupleNames } from "@utils/utils"

const ThankYou = () => {
  return (
    <Card title="Thank You!">
      <div>Your presence is our honor. May happiness and joyful occasions fill your lives as well.</div>
      {renderCoupleNames()}
    </Card>
  )
}

export default ThankYou

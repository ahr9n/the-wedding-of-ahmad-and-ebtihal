import Card from "@components/Card"
import { renderCoupleNames } from "@utils/utils"

const ThankYou = () => {
  return (
    <Card title="شكرا لك">
      {renderCoupleNames()}
      <div>نشكرك على حضورك ومباركتك</div>
    </Card>
  )
}

export default ThankYou

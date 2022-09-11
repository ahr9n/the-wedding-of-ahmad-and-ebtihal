import Card from "@components/Card"
import { renderCoupleNames } from "@utils/utils"

const ThankYou = () => {
  return (
    <Card title="شكرا لك">
      {renderCoupleNames()}
      <div>تشرّفنا بحضوركم، والعاقبة عندكم في المسرّات</div>
    </Card>
  )
}

export default ThankYou

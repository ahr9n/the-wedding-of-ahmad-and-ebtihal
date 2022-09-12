import Card from "@components/Card"
import { renderCoupleNames } from "@utils/utils"

const ThankYou = () => {
  return (
    <Card title="شكرا لكم">
      <div>تشرّفنا بحضوركم، والعاقبة عندكم في المسرّات</div>
      {renderCoupleNames()}
    </Card>
  )
}

export default ThankYou

import Card from "@components/Card"
import { renderCoupleNames } from "@utils/utils"

const ThankYou = () => {
  return (
    <Card title="Ucapan Terimakasih">
      {renderCoupleNames()}
      <div>Atas kehadiran dan doa restunya, kami ucapkan terimakasih</div>
    </Card>
  )
}

export default ThankYou

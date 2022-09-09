import Card from "@components/Card"
import { renderSendPrayButton } from "@utils/utils"

const Pray = () => {
  return (
    <Card title="الدعاء بالخير والبركة للزوجين">
      <div className="my-3 font-serif text-3xl">بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</div>
      <div>جعَلَ الله لكَ البرَكةَ والخيرَ في هذا الزَّواجِ، وجعلَ اللهُ الخيرَ ينزِلُ عليكَ في زواجِكَ، وجمَعَ اللهُ بينَكَ وبينَ زوجِكَ في الطاعةِ والصحَّةِ والعافيةِ وكلِّ ما هو خيرٌ.</div>
      <div>صحيح أبو داوود، الصفحة أو الرقم: 2130</div>
      {renderSendPrayButton()}
    </Card>
  )
}

export default Pray

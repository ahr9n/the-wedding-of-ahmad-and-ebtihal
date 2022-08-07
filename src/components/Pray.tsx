import Card from "@components/Card"
import { renderSendPrayButton } from "@utils/utils"

const Pray = () => {
  return (
    <Card title="Doa & Ucapan Untuk Pengantin">
      <div className="my-3 font-serif text-3xl">
        بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </div>
      <div>
        “Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
        susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan”
      </div>
      <div>(HR. Abu Dawud no. 2130)</div>
      {renderSendPrayButton()}
    </Card>
  )
}

export default Pray

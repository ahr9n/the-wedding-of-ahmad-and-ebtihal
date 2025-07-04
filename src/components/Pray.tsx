import Card from "@components/Card"
import { renderSendPrayButton } from "@utils/utils"

const Pray = () => {
  return (
    <Card title="A Prayer for the Bride and Groom">
      <div className="my-3 font-ruqaa text-3xl">
        May Allah bless you, and shower His blessings upon you, and bring you together in goodness.
      </div>
      <div>
        May Allah grant you blessings and goodness in your marriage, 
        may goodness descend upon you, 
        and may He unite you in obedience, health, and all that is good.
      </div>
      <div>Authentic - Abu Dawood, Hadith No. 2130</div>
      {renderSendPrayButton()}
    </Card>
  )
}

export default Pray

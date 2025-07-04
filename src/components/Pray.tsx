/* eslint-disable prettier/prettier */
import Card from "@components/Card"
import { renderSendPrayButton } from "@utils/utils"

const Pray = () => {
  return (
    <Card title="A Prayer for the Bride and Groom">
      <div className="my-3 font-ruqaa text-3xl">
        May Allah bless you, and shower His blessings upon you, and bring you together in goodness.
      </div>
      {renderSendPrayButton()}
    </Card>
  )
}

export default Pray

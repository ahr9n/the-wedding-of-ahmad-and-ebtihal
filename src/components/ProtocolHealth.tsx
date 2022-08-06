import { MdMasks, MdOutlineSocialDistance, MdOutlineWash } from "react-icons/md"

import Card from "@components/Card"

const ProtocolHealth = () => {
  return (
    <Card title="Protokol Kesehatan">
      <div>
        Mohon untuk anda sahabat/kerabat dan saudara kami yang akan datang ke
        Akad maupun resepsi pernikahan kami untuk tetap memperhatikan protokol
        kesehatan
      </div>
      <div className="text-lg">
        <div className="mt-3 flex items-center justify-center">
          <MdMasks size={35} className="mr-1" />
          <div>Memakai Masker</div>
        </div>
        <div className="my-5 flex items-center justify-center">
          <MdOutlineWash size={30} className="mr-2" />
          <div>Mencuci Tangan</div>
        </div>
        <div className="my-3 flex items-center justify-center">
          <MdOutlineSocialDistance size={35} className="mr-2" />
          <div>Menjaga Jarak</div>
        </div>
      </div>
    </Card>
  )
}

export default ProtocolHealth

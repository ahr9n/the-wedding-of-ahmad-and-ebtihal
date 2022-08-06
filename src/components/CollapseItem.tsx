import React, { useState } from "react"

import { Collapse } from "react-collapse"

import { IDalil } from "data/interfaces"

const CollapseItem = (dalil: IDalil) => {
  const [isOpened, setIsOpened] = useState(false)
  const { title, content, arab, source, intro } = dalil

  const clickButton = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className="my-3 bg-orange-900 py-3">
      <div
        className="btn btn-outline btn-lg btn-wide my-2 px-5 text-sm  xl:text-base"
        onClick={clickButton}
      >
        {title}
      </div>
      <Collapse isOpened={isOpened} className="text-sm">
        {intro && <div className="py-5 px-4">{intro}</div>}
        <div className="py-5 px-6 font-serif text-2xl">{arab}</div>
        <div className="py-5 px-4">"{content}"</div>
        <div className="py-2 px-4">{source}</div>
      </Collapse>
    </div>
  )
}

export default CollapseItem

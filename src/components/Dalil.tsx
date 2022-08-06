import React from "react"

import { FaStarAndCrescent } from "react-icons/fa"

import CollapseItem from "@components/CollapseItem"
import { DALILS } from "data/dalil"

const Dalil = () => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-center text-center">
        <FaStarAndCrescent />
        <h3 className="ml-3 py-3 text-lg font-bold">
          Dalil-Dalil Dalam Pernikahan
        </h3>
      </div>
      <div className="dalil h-96 w-full items-center justify-center overflow-y-auto py-3 text-center">
        {DALILS.map(({ title, arab, intro, content, source }) => {
          return (
            <CollapseItem
              key={title}
              title={title}
              arab={arab}
              intro={intro}
              content={content}
              source={source}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Dalil

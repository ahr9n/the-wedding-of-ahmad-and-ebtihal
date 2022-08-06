import React from "react"

const Collapse = ({ title, content }) => {
  return (
    <div className="collapse my-3 text-gray-800">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
        <span className="font-bold">{title}</span>
      </div>
      <div className="collapse-content bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Collapse

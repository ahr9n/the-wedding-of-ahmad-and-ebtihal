import React from "react"

const cardStyle = {
  backgroundColor: "rgba(0,197,97,0.5)",
  backgroundImage: `url("/background/floral-bg.jpg")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

type Props = {
  children: JSX.Element[] | JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <div
      style={cardStyle}
      className="by-5 card image-full my-5 w-11/12 text-neutral-content lg:w-1/2"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Card

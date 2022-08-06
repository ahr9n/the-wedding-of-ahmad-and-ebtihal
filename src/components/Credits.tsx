import React from "react"

import Card from "@components/Card"

const Credits = () => {
  return (
    <Card title="Credits">
      <div className="mockup-code">
        <pre>
          <code>
            Alhamdulillah, by The will of God, this web was made by Hasan
          </code>
        </pre>
        <pre>
          <code>
            Using Typescript, NextJs, DaisyUI, TailwindCSS, and Netlify
          </code>
        </pre>
      </div>
    </Card>
  )
}

export default Credits

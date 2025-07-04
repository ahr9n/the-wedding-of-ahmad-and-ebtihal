import React, { useEffect, useRef, useState } from "react"

import { MARRIAGE } from "data/wedding"

const classUnitTime = "flex flex-col items-center justify-center"
const classSpanCountdown = "countdown text-xl xl:text-3xl mb-2"

const Countdown = () => {
  const countDownDate = MARRIAGE.time.dateValue.getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
  }

  const daysRef = useRef()
  const hoursRef = useRef()
  const minutesRef = useRef()
  const secondsRef = useRef()

  useEffect(() => {
    if (countDown < 0) {
      return
    }
    const [days, hours, minutes, seconds] = getReturnValues(countDown)
    const dayNode = daysRef.current as any
    const hoursNode = hoursRef.current as any
    const minutesNode = minutesRef.current as any
    const secondsNode = secondsRef.current as any

    dayNode.style.setProperty("--value", `${days}`)
    hoursNode.style.setProperty("--value", `${hours}`)
    minutesNode.style.setProperty("--value", `${minutes}`)
    secondsNode.style.setProperty("--value", `${seconds}`)
  }, [countDown])

  if (countDown < 0) {
    return null
  }

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className={classUnitTime}>
        <span className={classSpanCountdown}>
          <span ref={daysRef} />
        </span>
        Days
      </div>
      <div className={classUnitTime}>
        <span className={classSpanCountdown}>
          <span ref={hoursRef} />
        </span>
        Hours
      </div>
      <div className={classUnitTime}>
        <span className={classSpanCountdown}>
          <span ref={minutesRef} />
        </span>
        Minutes
      </div>
      <div className={classUnitTime}>
        <span className={classSpanCountdown}>
          <span ref={secondsRef} />
        </span>
        Seconds
      </div>
    </div>
  )
}

export default Countdown

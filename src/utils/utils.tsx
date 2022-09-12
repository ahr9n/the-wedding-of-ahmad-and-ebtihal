import React from "react"

import Link from "next/link"
import { BsClockFill } from "react-icons/bs"
import { FaMapMarkedAlt } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { ImCalendar, ImLocation } from "react-icons/im"

import { COUPLES, MARRIAGE } from "data/wedding"

export const renderCoupleNames = () => {
  return (
    <div className="my-5 font-curly text-4xl xl:text-5xl">
      {COUPLES.husband.name} & {COUPLES.wife.name}
    </div>
  )
}

export const renderDateTime = (card = "invitation") => {
  let now = MARRIAGE.time.date.id
  if (card == "headline") now = MARRIAGE.time.date.en

  return (
    <div className="my-3 flex items-center justify-center">
      <ImCalendar size={20} className="mr-2" />
      {now}
    </div>
  )
}

export const renderDurationTime = () => {
  const { startTime, endTime } = MARRIAGE.time
  return (
    <div className="flex items-center justify-center">
      <BsClockFill size={20} className="mr-2" />
      وسيبدأ تقديم الوليمة في تمام الساعة الثالثة عصرًا
    </div>
  )
}

export const renderLocation = () => {
  return (
    <div>
      <div className="my-3 flex items-center justify-center">
        <ImLocation size={23} />
        <div className="ml-2 font-bold">المكان</div>
      </div>
      <div>{MARRIAGE.location.place}</div>
    </div>
  )
}

export const renderButtonLocation = () => {
  return (
    <div className="my-3 flex items-center justify-center">
      <Link href={MARRIAGE.location.url}>
        <a className="btn btn-outline" target="__blank">
          <FaMapMarkedAlt size={25} className="mr-2" />
          انظر في الخريطة
        </a>
      </Link>
    </div>
  )
}

export const renderSendPrayButton = () => {
  return (
    <div className="my-3 flex items-center justify-center">
      <Link href={MARRIAGE.form.url}>
        <a className="btn btn-outline" target="__blank">
          <FiSend size={20} className="mr-2" />
          قم بإرسال دعوتك الخاصة من هنا
        </a>
      </Link>
    </div>
  )
}

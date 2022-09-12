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
  if (card == "headline"){
    let now = MARRIAGE.time.date.en
    return (
      <div className="my-3 flex items-center justify-center">
        <ImCalendar size={26} className="mr-2" />
        {now}
      </div>
    )
  } else {
    let now = MARRIAGE.time.date.id
    return (
      <div className="my-3 flex items-center justify-center">
        <div>{now.miladi}</div>
        <br>
        <div>{now.hijri}</div>
        <ImCalendar size={26} className="mr-2" />
        <br>
        <div>{now.day}</div>
      </div>
    )
  }
}

export const renderDurationTime = () => {
  const { startTime, endTime } = MARRIAGE.time
  return (
    <div className="flex items-center justify-center">
      وسيبدأ تقديم الوليمة في تمام الساعة الثالثة عصرًا
      <BsClockFill size={26} className="mr-2" />    
    </div>
  )
}

export const renderLocation = () => {
  return (
    <div>
      <div className="my-3 flex items-center justify-center">
        <div className="ml-2 font-bold">المكان</div>
        <ImLocation size={23} />
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
          <FaMapMarkedAlt size={23} className="mr-2" />
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
          <FiSend size={23} className="mr-2" />
          قم بإرسال دعوتك الخاصة من هنا
        </a>
      </Link>
    </div>
  )
}

import React from "react"

import Head from "next/head"

import Dalil from "@components/Dalil"
import Headline from "@components/Headline"
import Invitation from "@components/Invitation"
import Pray from "@components/Pray"
import Rewards from "@components/Rewards"
import ThankYou from "@components/ThankYou"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding of Ahmad & Hager</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-5">
        <Headline />
        <Invitation />
        <Rewards />
        <Pray />
        <ThankYou />
        <Dalil />
      </main>
    </>
  )
}

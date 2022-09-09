import React from "react"

import Head from "next/head"

import Dalil from "@components/Dalil"
import Event from "@components/Event"
import Headline from "@components/Headline"
import Invitation from "@components/Invitation"
import Pray from "@components/Pray"
import Rewards from "@components/Rewards"
import ThankYou from "@components/ThankYou"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding of Ahmad & Ebtihal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center py-5">
        <Headline />
        <Invitation />
        <Rewards />
        <Event />
        <Pray />
        <ThankYou />
        <Dalil />
      </main>
    </>
  )
}

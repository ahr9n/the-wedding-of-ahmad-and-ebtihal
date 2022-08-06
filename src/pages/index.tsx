import React from "react"

import Head from "next/head"

import Headline from "@components/Headline"
import Invitation from "@components/Invitation"
import Rewards from "@components/Rewards"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding of Ismi & Hasan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center py-5">
        <Headline />
        <Invitation />
        <Rewards />
      </main>
    </>
  )
}

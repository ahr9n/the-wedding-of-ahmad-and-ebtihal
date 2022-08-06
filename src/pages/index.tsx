import React from "react"

import Head from "next/head"

import Headline from "@components/Headline"
import Invitation from "@components/Invitation"
import Rewards from "@components/Rewards"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js advanced start template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

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

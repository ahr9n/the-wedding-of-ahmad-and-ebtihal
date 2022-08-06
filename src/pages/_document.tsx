import React from "react"

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html data-theme="forest">
        <Head>
          <meta
            name="description"
            content="Wedding Website of Ismi Dinda Muslimah & Muhammad Hasan"
          />
          <meta
            name="keywords"
            content="NextJS, Wedding Website, Daisy UI, Tailwind CSS"
          />
          <meta property="og:title" content="The Wedding of Ismi & Hasan" />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/2louui6ojn7/Wedding/wedding-ismi-hasan_WkoRFlxR9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659798791093"
          />
          <meta
            property="og:description"
            content="Wedding Website of Ismi Dinda Muslimah & Muhammad Hasan"
          />
          <meta property="og:url" content="www.ismi.mhasan01.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
            rel="stylesheet"
          />
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Title</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

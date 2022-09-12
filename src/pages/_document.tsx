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
            content="Wedding Website of Ahmad Abdulrahman & Ebtihal Alaa"
          />
          <meta
            name="keywords"
            content="NextJS, Wedding Website, Daisy UI, Tailwind CSS"
          />
          <meta property="og:title" content="The Wedding of Ahmad & Ebtihal" />
          <meta
            property="og:image"
            content="https://static.vecteezy.com/system/resources/previews/004/328/835/large_2x/muslim-wedding-in-white-dress-illustration-free-vector.jpg"
          />
          <meta
            property="og:description"
            content="Wedding Website of Ahmad Abdulrahman & Ebtihal Alaa"
          />
          <meta
            property="og:url"
            content="https://ahmadebtihalwedding.netlify.app/"
          />
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

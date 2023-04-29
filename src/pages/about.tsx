import * as React from "react"
import Layout from "../components/layout-index"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About Me" children={undefined} lang={undefined} />
      <div>
        <h1>about me</h1>
      </div>
      <p className="justify-left flex-auto flex-wrap">
        I'm currently working as a barista at a specialty coffee shop. I love listening to music, especially artists like Andrew Bird, Porter Robinson, and Odesza.
      </p>
      <div>
        <h1>contact me</h1>
      </div>
      <p className="justify-left flex-auto flex-wrap">
        you can contact me on Discord at Cinder#0965 or on Telegram at{" "}
        <a href="https://t.me/cinderithink"> @cinderithink</a>.
      </p>
    </Layout>
  )
}

export default AboutPage

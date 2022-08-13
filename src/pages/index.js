import * as React from "react"
import Layout     from "../components/layout"
import Seo        from "../components/seo"
import Header     from "../components/Header";
import Hero       from "../components/Hero";
import Trips      from "../components/Trips";



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <Hero/>
      <Trips/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/aboutUs"
import OurTeam from "../components/ourTeam"
import OurServices from "../components/ourServices"
import ContactUs from "../components/contactUs"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <OurTeam />
    <OurServices />
    <ContactUs />
  </Layout>
)

export default IndexPage

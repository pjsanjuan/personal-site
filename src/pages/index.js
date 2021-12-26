import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/home/hero"
import Projects from "../components/home/projects"
import Hobbies from "../components/home/hobbies"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About style={{ minHeight: '100vh' }}/>
    <Projects/>
    <Hobbies/>
  </Layout>
)

export default IndexPage

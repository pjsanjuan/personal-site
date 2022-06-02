import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/home/hero"
import Projects from "../components/home/projects"
import Hobbies from "../components/home/hobbies"
import WorkExperienceTabs from "../components/home/work-experience-tabs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About style={{ minHeight: '100vh' }} />
    <WorkExperienceTabs style={{ margin: '200px 0'}}/>
    <Projects style={{ margin: '200px 0'}}/>
    <Hobbies style={{ margin: '200px 0'}}/>
  </Layout>
)

export default IndexPage

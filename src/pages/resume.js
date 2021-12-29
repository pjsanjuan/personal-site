import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkExperience from "../components/resume/work-experience"
import Skills from "../components/resume/skills"

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    <Skills />

    <WorkExperience />
  </Layout>
)

export default Resume

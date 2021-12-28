import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkExperience from "../components/resume/work-experience"

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    {/* TODO: Skills */}
    
    <WorkExperience />
  </Layout>
)

export default Resume

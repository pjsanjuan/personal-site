import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceItem from "./work-experience-item"
import * as scssStyles from "../../styles/home/work-experience-tabs.module.scss"

const workExperienceQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/work-experience/" } }
      sort: { order: ASC, fields: frontmatter___startDate }
    ) {
      nodes {
        id
        fileAbsolutePath
        body
        frontmatter {
          position
          company
          location
          startDate
          endDate
        }
      }
    }
  }
`

const WorkExperience = () => {
  const { allMdx } = useStaticQuery(workExperienceQuery)

  return (
    <section id="work-experience">
      <h1>01. Work Experience</h1>

      {allMdx.nodes.map(activeNode => (
        <WorkExperienceItem
          key={activeNode.frontmatter.position}
          position={activeNode.frontmatter.position}
          company={activeNode.frontmatter.company}
          location={activeNode.frontmatter.location}
          startDate={activeNode.frontmatter.startDate}
          endDate={activeNode.frontmatter.endDate}
          mdxBody={activeNode.body}
        />
      ))}
    </section>
  )
}

export default WorkExperience

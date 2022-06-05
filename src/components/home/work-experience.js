import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceItem from "./work-experience-item"
import { Typography } from "@mui/material"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


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

const WorkExperience = ({ className }) => {
  const { allMdx } = useStaticQuery(workExperienceQuery)
  const allNodes = allMdx.nodes

  return (
    <section className={className} id="work-experience">
      <Typography gutterBottom variant="h4">
        01. Work Experience
      </Typography>

      <VerticalTimeline
        lineColor="#161925"
      >
        {allNodes.map(node => (
          <WorkExperienceItem
            key={node.id}
            position={node.frontmatter.position}
            company={node.frontmatter.company}
            startDate={node.frontmatter.startDate}
            endDate={node.frontmatter.endDate}
            mdxBody={node.body}
          />
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default WorkExperience

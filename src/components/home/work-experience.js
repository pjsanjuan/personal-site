import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceItem from "./work-experience-item"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

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

  return (
    <section className={className} id="work-experience">
      <Typography gutterBottom variant="h4">01. Work Experience</Typography>
      <Stack spacing={2}>
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
      </Stack>
    </section>
  )
}

export default WorkExperience

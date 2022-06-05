import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceItem from "./work-experience-item"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import WorkIcon from "@mui/icons-material/Work"
import "react-vertical-timeline-component/style.min.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
      {/* TODO: Wrap the VerticalTimeline component into it's own */}
      <Typography gutterBottom variant="h4">
        01. Work Experience
      </Typography>

      <VerticalTimeline>
        {allNodes.map(activeNode => (
          <VerticalTimelineElement
            key={activeNode.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="2011 - present"
            date={`${activeNode.frontmatter.startDate} to ${activeNode.frontmatter.endDate}`}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            style={{ width: "100%" }}
          >
            <Typography variant="h6">
              {activeNode.frontmatter.position}
            </Typography>
            <Typography variant="h6">
              <i>{activeNode.frontmatter.company}</i>
            </Typography>

            <Typography>
              {<MDXRenderer>{activeNode.body}</MDXRenderer>}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default WorkExperience

import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceCard from './work-experience-card'

const workExperienceQuery = graphql`
  query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/work-experience/"}}
      sort: {order: DESC, fields: frontmatter___startDate}
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


const WorkExperience = ({ style }) => {
  const { allMdx } = useStaticQuery(workExperienceQuery);

  return (
    <section style={style}>
      <h1>Work Experience</h1>
      <div>
        {/* {
         allMdx.nodes.map(node => (
          <li
            key={node.frontmatter.position}
          >{node.frontmatter.position}</li>
        ))
      } */}

        {
          allMdx.nodes.map(node => (
            <WorkExperienceCard
              key={node.frontmatter.position}
              position={node.frontmatter.position}
              company={node.frontmatter.company}
              location={node.frontmatter.location}
              startDate={node.frontmatter.startDate}
              endDate={node.frontmatter.endDate}
              mdxBody={node.body}
            />
          ))
        }
      </div>
    </section>
  )
}

export default WorkExperience

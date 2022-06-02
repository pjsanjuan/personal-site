import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceTab from "./work-experience-tab"
import * as scssStyles from "../../styles/home/work-experience-tabs.module.scss"

const workExperienceQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/work-experience/" } }
      sort: { order: DESC, fields: frontmatter___startDate }
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

const WorkExperienceTabs = ({ style }) => {
  const { allMdx } = useStaticQuery(workExperienceQuery)

  const [activeNode, setActiveNode] = useState(allMdx.nodes[0])

  const selectedTabClass = currentNode => {
    return currentNode.frontmatter.position === activeNode.frontmatter.position
      ? scssStyles.isActive
      : null
  }

  return (
    <section style={style} id="work-experience">
      <h1 className="code">01. Work Experience</h1>
      <div className={scssStyles.main}>
        <div className={scssStyles.tabs}>
          <ul>
            {allMdx.nodes.map(node => (
              <li key={node.frontmatter.position}>
                <button
                  onClick={() => setActiveNode(node)}
                  className={selectedTabClass(node)}
                >
                  {node.frontmatter.position}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={scssStyles.tabContent}>
          {
            <WorkExperienceTab
              key={activeNode.frontmatter.position}
              position={activeNode.frontmatter.position}
              company={activeNode.frontmatter.company}
              location={activeNode.frontmatter.location}
              startDate={activeNode.frontmatter.startDate}
              endDate={activeNode.frontmatter.endDate}
              mdxBody={activeNode.body}
            />
          }
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceTabs

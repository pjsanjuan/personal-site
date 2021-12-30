import React, { useState } from 'react'

import { useStaticQuery, graphql } from "gatsby"
import WorkExperienceTab from './work-experience-tab'
import * as scssStyles from "../../styles/home/work-experience-tabs.module.scss"

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

const WorkExperienceTabs = ({ style }) => {
  const { allMdx } = useStaticQuery(workExperienceQuery);

  const [activeNode, setActiveNode] = useState(allMdx.nodes[0]);

  return (
    <section style={style}>
      <h1 class="code">02. Where I've worked at</h1>
      <div className={scssStyles.main}>
        <div class={scssStyles.tabs}>
          <ul>
            {
              allMdx.nodes.map((node) => (
                <li>
                  <button onClick={() => setActiveNode(node)}>
                    {node.frontmatter.position}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div class={scssStyles.tabContent}>
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

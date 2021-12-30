import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as cardStyles from "../../styles/home/work-experience-tab.module.scss"

const WorkExperienceTab = ({ position, company, location, startDate, endDate, mdxBody, style }) => (
  <div style={style}>
    <div className={cardStyles.heading}>
      <h2>{position}</h2>
      <h4>{company}</h4> <h4>{location}</h4>
      <h4><span>{startDate}</span> - <span>{endDate ? endDate : "Present"}</span></h4>
    </div>
    {
      <MDXRenderer>
        {mdxBody}
      </MDXRenderer>
    }
  </div>
)

export default WorkExperienceTab

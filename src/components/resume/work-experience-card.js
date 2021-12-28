import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"

const WorkExperienceCard = ({ position, company, location, startDate, endDate, mdxBody }) => (
  <div>
    <h1>{position}</h1>
    <h4>{company}</h4> <h4>{location}</h4>
    <h4>{startDate}</h4> <h4>{endDate ? endDate : "Present"}</h4>
    {
      <MDXRenderer>
        {mdxBody}
      </MDXRenderer>
    }
  </div>
)

export default WorkExperienceCard

import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Hobby = ({ title, mdxBody }) => (
  <div>
    <h2 className="code">{title}</h2>
    {
      <MDXRenderer>
        {mdxBody}
      </MDXRenderer>
    }
  </div>
)

export default Hobby

import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Typography } from "@mui/material"

const Hobby = ({ title, mdxBody }) => (
  <div>
    <Typography variant="h6">{title}</Typography>
    {<MDXRenderer>{mdxBody}</MDXRenderer>}
  </div>
)

export default Hobby

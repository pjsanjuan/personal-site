import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hobby from "./hobby"
import { Typography, Stack } from "@mui/material"

const hobbiesQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/hobbies/" } }) {
      nodes {
        id
        fileAbsolutePath
        body
        frontmatter {
          title
        }
      }
    }
  }
`

const Hobbies = ({ className }) => {
  const { allMdx } = useStaticQuery(hobbiesQuery)

  return (
    <section className={className} id="hobbies">
      <Typography gutterBottom variant="h4">
        03. Hobbies
      </Typography>
      <Stack spacing={2}>
        {allMdx.nodes.map(node => (
          <Hobby
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            mdxBody={node.body}
          />
        ))}
      </Stack>
    </section>
  )
}

export default Hobbies

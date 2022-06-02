import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hobby from "./hobby"
import * as hobbyStyles from "../../styles/home/hobbies.module.scss"
import { Typography } from "@mui/material"

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

const Hobbies = ({ style }) => {
  const { allMdx } = useStaticQuery(hobbiesQuery)

  return (
    <section style={style} id="hobbies">
      <Typography gutterBottom variant="h4">03. Hobbies</Typography>
      <div className={hobbyStyles.main}>
        {allMdx.nodes.map(node => (
          <Hobby
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            mdxBody={node.body}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hobbies

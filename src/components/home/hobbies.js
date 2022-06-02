import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hobby from "./hobby"

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
      <h1 className="code">03. Hobbies</h1>
      <div>
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

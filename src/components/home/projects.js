import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"

const projectsQuery = graphql`
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/content\/projects/"}}) {
      nodes {
        id
        body
        frontmatter {
          githubLink
          title
          youtubeLink
          technologies
          thumbnailImage {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const ProjectsHome = ({ style }) => {
  const { allMdx } = useStaticQuery(projectsQuery);

  return (
    <section style={style} id="projects">
      <h1 className="code">
        02. Projects
      </h1>

      <div>
      {
        allMdx.nodes.map(node => (
          <ProjectCard
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            mdxBody={node.body}
            githubLink={node.frontmatter.githubLink}
            youtubeLink={node.frontmatter.youtubeLink}
            gatsbyImageData={node.frontmatter.thumbnailImage}
            technologies={node.frontmatter.technologies}
            style={{ marginBottom: "20px" }}
          />
        ))
      }
      </div>
    </section>
  )
}

export default ProjectsHome

import * as React from "react"
import * as projectStyles from "../../styles/home/projects.module.scss"
import { useStaticQuery, graphql } from "gatsby"
// import ProjectData from "../../content/projects.json"
import ProjectCard from "./project-card"
import * as path from "path-browserify"

const projectsQuery = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          githubLink
          title
          thumbnailImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const ProjectsHome = () => {
  const { allMdx } = useStaticQuery(projectsQuery);
  console.log("🚀 ~ file: projects.js ~ line 28 ~ ProjectsHome ~ allMdx", allMdx)

  return (
    <section>
      <h1>
        01. Projects
      </h1>
      <div className={projectStyles.wrapper}>
        <ul>
        {
          allMdx.nodes.map((node, index) => (
            <li key={index}>
              {node.frontmatter.title}
            </li>
          ))
        }
        </ul>
      </div>
    </section>
  )
}



export default ProjectsHome

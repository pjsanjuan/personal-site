import * as React from "react"
import * as projectStyles from "../../styles/home/projects.module.scss"
import { useStaticQuery, graphql } from "gatsby"
// import ProjectData from "../../content/projects.json"
import ProjectCard from "./project-card"
import * as path from "path-browserify"

const projectsQuery = graphql`
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
      nodes {
        id
        body
        frontmatter {
          githubLink
          title
          youtubeLink
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

const ProjectsHome = () => {
  const { allMdx } = useStaticQuery(projectsQuery);
  console.log("🚀 ~ file: projects.js ~ line 28 ~ ProjectsHome ~ allMdx", allMdx)

  return (
    <section>
      <h1>
        01. Projects
      </h1>
      <div className={projectStyles.wrapper}>
      {
        allMdx.nodes.map((node, index) => (
          <ProjectCard
            key={index}
            title={node.frontmatter.title}
            mdxBody={node.body}
            githubLink={node.frontmatter.githubLink}
            youtubeLink={node.frontmatter.youtubeLink}
            gatsbyImageData={node.frontmatter.thumbnailImage}
          />
        ))
      }

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

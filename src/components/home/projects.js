import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"

const projectsQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
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

const ProjectsHome = ({ className }) => {
  const { allMdx } = useStaticQuery(projectsQuery)

  return (
    <section className={className} id="projects">
      <Typography gutterBottom variant="h4">
        02. Projects
      </Typography>

      <Grid container spacing={2}>
        {allMdx.nodes.map(node => (
          <Grid item xs={12} sm={6}>
            <ProjectCard
              key={node.frontmatter.title}
              title={node.frontmatter.title}
              mdxBody={node.body}
              githubLink={node.frontmatter.githubLink}
              youtubeLink={node.frontmatter.youtubeLink}
              gatsbyImageData={node.frontmatter.thumbnailImage}
              technologies={node.frontmatter.technologies}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default ProjectsHome

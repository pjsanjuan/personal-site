import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GitHub, YouTube } from "@mui/icons-material"

// MUI components
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import CardMedia from "@mui/material/CardMedia"

const ProjectCard = ({
  title,
  mdxBody,
  gatsbyImageData,
  technologies,
  githubLink,
  youtubeLink,
}) => {
  const image = getImage(gatsbyImageData)

  return (
    <Container>
      <Card variant="outlined">
        {/* Header Image */}
        <CardMedia>
          <GatsbyImage image={image} alt="Project image" />
        </CardMedia>

        {/* Content */}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography>{<MDXRenderer>{mdxBody}</MDXRenderer>}</Typography>
        </CardContent>

        {/* Footer */}
        <CardActions>
          <Typography>
            {technologies ? technologies.join(", ") : null}
          </Typography>

          <Typography>
            {
              // Render the github icon if the githubLink prop exists
              githubLink ? (
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <GitHub/>
                </a>
              ) : null
            }

            {
              // Render the github icon if the githubLink prop exists
              youtubeLink ? (
                <a href={youtubeLink} target="_blank" rel="noreferrer">
                  <YouTube />
                </a>
              ) : null
            }
          </Typography>
        </CardActions>
      </Card>
    </Container>
  )
}

ProjectCard.defaultProps = {
  title: ``,
  mdxBody: ``,
  githubLink: ``,
  youtubeLink: ``,
  gatsbyImageData: Object,
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  mdxBody: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  youtubeLink: PropTypes.string,
  gatsbyImageData: PropTypes.object,
}

export default ProjectCard

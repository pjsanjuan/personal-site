import * as React from "react"
import * as projectStyles from "../../styles/home/project-card.module.scss"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// MUI components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia'

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
          <Typography>
            <h2>{title}</h2>
            {<MDXRenderer>{mdxBody}</MDXRenderer>}
          </Typography>
        </CardContent>

        {/* Footer */}
        <CardActions>
          <span className={`${projectStyles.technologies} code`}>
            {technologies ? technologies.join(", ") : null}
          </span>

          <div className={projectStyles.externalLinks}>
            {
              // Render the github icon if the githubLink prop exists
              githubLink ? (
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              ) : null
            }

            {
              // Render the github icon if the githubLink prop exists
              youtubeLink ? (
                <a href={youtubeLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>
              ) : null
            }
          </div>
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

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

const ProjectCard = ({
  title,
  mdxBody,
  gatsbyImageData,
  technologies,
  githubLink,
  youtubeLink,
  style,
}) => {
  const image = getImage(gatsbyImageData)

  return (
    <div className={projectStyles.wrapper} style={style}>
      <div className={projectStyles.imageWrapper}>
        <GatsbyImage image={image} alt="Project image" />
      </div>

      <div className={projectStyles.contentWrapper}>
        <div>
          <h2 className="code">{title}</h2>
          {<MDXRenderer>{mdxBody}</MDXRenderer>}
        </div>

        <div className={projectStyles.footer}>
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
        </div>
      </div>
    </div>
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

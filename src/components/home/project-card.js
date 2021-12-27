import * as React from "react"
import * as projectStyles from "../../styles/home/projects.module.scss"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ title, mdxBody, gatsbyImageData, githubLink, youtubeLink }) => {
  const image = getImage(gatsbyImageData)
  console.log("🚀 ~ file: project-card.js ~ line 11 ~ ProjectCard ~ image", image)

  return (
    <div className="project-card">
      <div className={projectStyles.wrapper}>
        <GatsbyImage
          image={image}
          alt="Project image"
        />
      </div>
  
      <div className={projectStyles.content}>
        <h2>{title}</h2>
        {/* <MDXRenderer>
          {mdxBody}
        </MDXRenderer> */}
  
        {
          // Render the github icon if the githubLink prop exists
          githubLink ? <a href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithubSquare}/>
          </a> : null
        }
  
        {
          // Render the github icon if the githubLink prop exists
          youtubeLink ? <a href={youtubeLink} target="_blank">
            <FontAwesomeIcon icon={faYoutubeSquare}/>
          </a> : null
        }
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
  gatsbyImageData: PropTypes.object
}

export default ProjectCard

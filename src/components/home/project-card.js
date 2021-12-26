import * as React from "react"
import * as projectStyles from "../../styles/home/projects.module.scss"
import PropTypes from "prop-types"

const ProjectCard = ({ githubLink, title, bulletPointItems}) => (
  <div className="project-card">
    <div className={projectStyles.wrapper}>
    {/* TODO: Image of project here */}
    </div>

    <div className={projectStyles.content}>
      <h2>{title}</h2>
      <ul>
      {
        bulletPointItems.map((item, index) => {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    </div>
  </div>
)

ProjectCard.defaultProps = {
  githubLink: ``,
  title: ``,
  bulletPointItems: []
}

ProjectCard.propTypes = {
  githubLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  bulletPointItems: PropTypes.arrayOf(PropTypes.string),
}

export default ProjectCard

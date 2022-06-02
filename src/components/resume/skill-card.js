import React from "react"
import PropTypes from "prop-types"

const SkillCard = ({ gatsbyImageData, skillName }) => {
  const image = getImage(gatsbyImageData)

  return (
    <div className="skillCard">
      <GatsbyImage image={image} />
      <h3>{skillName}</h3>
    </div>
  )
}

SkillCard.defaultProps = {
  skillName: ``,
  gatsbyImageData: Object,
}

SkillCard.propTypes = {
  skillName: PropTypes.string.isRequired,
  gatsbyImageData: PropTypes.object.isRequired,
}

export default SkillCard

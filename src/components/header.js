import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.wrapper}>
      <h1>
        <Link to="/">{siteTitle}
        </Link>
      </h1>

      <div className={headerStyles.tabs}>
        <h2 className={headerStyles.underlineAnimate}>
          <Link to="">Projects</Link>
        </h2>

        <h2 className={headerStyles.underlineAnimate}>
          <Link to="/resume">Resume</Link>
        </h2>

        <h2>
          <a href="https://github.com/pjsanjuan" target="_blank">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </h2>

        <h2>
          <a href="https://www.linkedin.com/in/pjsanjuan/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

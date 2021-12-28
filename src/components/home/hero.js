import * as React from "react"
import * as heroStyles from "../../styles/home/hero.module.scss"
import { StaticImage } from "gatsby-plugin-image"


const HeroHome = () => (
  <section className={heroStyles.wrapper}>
    <div className={heroStyles.main}>
      <div className={heroStyles.imageWrapper}>
        <StaticImage
          src="../../images/headshot.jpg"
          alt="Profile picture"
          imgStyle={{ borderRadius: '100%' }} />
      </div>

      <div className={heroStyles.aboutWrapper}>
        <p className="code">Hi, my name is</p>
        <h1>Patrick San Juan</h1>
        <p>I'm a developer who likes to learn new technologies through projects.
          I primarily do back end development, but I'm learning front-end web develop when I can to expand my skills.
          Currently, I'm focused on developing software at FORM.</p>
      </div>
    </div>
  </section>
)

export default HeroHome

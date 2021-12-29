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
        <p>I like learning new technologies through projects.
          I'm <b>primarily a back end developer</b>, but I'm learning front-end web technologies to <b>expand my skills</b>.
          Currently, I'm focused on developing software at <b>FORM</b>.</p>
        <p>
          Lately, I've been working the with following technologies:
          <ul className={heroStyles.recentSkills}>
            <li>NodeJs</li>
            <li>JavaScript/TypeScript</li>
            <li>SQL</li>
            <li>AWS</li>
            <li>React</li>
            <li>Vue</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
)

export default HeroHome

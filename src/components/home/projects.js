import * as React from "react"
import * as projectStyles from "../../styles/home/projects.module.scss"
import ProjectData from "../../content/projects.json"
import ProjectCard from "./project-card"

console.log(ProjectData)

const ProjectsHome = () => (
  <section>
    <h1>
      01. Projects
    </h1>
    <div className={projectStyles.wrapper}>
      {
        ProjectData.map(item => {
          return <ProjectCard
            key={item.title}
            title={item.title}
            bulletPointItems={item.bulletPointItems}
            githubLink="https://google.com"
          />
        })
      }
    </div>
  </section>
)

export default ProjectsHome

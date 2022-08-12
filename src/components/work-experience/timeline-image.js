import React from "react"
import { ReactJs, Vuedotjs, Scala, Nodedotjs, Angular } from '@icons-pack/react-simple-icons';
import WorkIcon from "@mui/icons-material/Work"
/**
 * Available icons:
 * Vue.js
 * React.js
 * Node.js
 * Scala
 * 
 * Contains the code for fetching the icon in simple-icons
 */
const TimelineImage = ({
  imageName,
}) => {
  switch (imageName) {
    case "react": return <ReactJs />
    case "vue": return <Vuedotjs />
    case "scala": return <Scala />
    case "node": return <Nodedotjs />
    case "angular": return <Angular />
    default: return <WorkIcon />
  }
}

export default TimelineImage

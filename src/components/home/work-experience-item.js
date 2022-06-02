import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import * as cardStyles from "../../styles/home/work-experience-tab.module.scss"

// MUI imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const WorkExperienceItem = ({
  position,
  company,
  location,
  startDate,
  endDate,
  mdxBody,
}) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>
        <h4>{position} at {company}</h4>
        <h5>{location}, <span>{startDate}</span> - <span>{endDate ? endDate : "Present"}</span></h5> 
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {<MDXRenderer>{mdxBody}</MDXRenderer>}
      </Typography>
    </AccordionDetails>
  </Accordion>
)

export default WorkExperienceItem

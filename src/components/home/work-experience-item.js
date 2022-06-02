import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// MUI imports
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

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
        {position} at {company}
        {location}, <span>{startDate}</span> -{" "}
        <span>{endDate ? endDate : "Present"}</span>
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{<MDXRenderer>{mdxBody}</MDXRenderer>}</Typography>
    </AccordionDetails>
  </Accordion>
)

export default WorkExperienceItem

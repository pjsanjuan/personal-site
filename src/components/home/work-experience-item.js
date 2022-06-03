import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// MUI imports
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Stack, Divider } from "@mui/material"

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
      <Stack
        direction="row"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        width="100%"
      >
        <Typography>
          {position} at {company}
        </Typography>
        <Typography>
          {location}
        </Typography>
        <Typography>
          <span>{startDate}</span> -{" "}
          <span>{endDate ? endDate : "Present"}</span>
        </Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{<MDXRenderer>{mdxBody}</MDXRenderer>}</Typography>
    </AccordionDetails>
  </Accordion>
)

export default WorkExperienceItem

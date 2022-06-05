import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import IconButton from '@mui/material/IconButton'
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import WorkIcon from "@mui/icons-material/Work"
import Collapse from "@mui/material/Collapse"
import { styled } from '@mui/material/styles'
import Stack from "@mui/material/Stack"
import "../../styles/work-experience-item.scss"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WorkExperienceItem = ({
  id,
  position,
  company,
  startDate,
  endDate,
  mdxBody,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#8ea8c3", color: "#161925" }}
      contentArrowStyle={{ borderRight: "7px solid  #8ea8c3" }}
      date={`${startDate} to ${endDate}`}
      iconStyle={{ background: "#8ea8c3", color: "#161925" }}
      icon={<WorkIcon />}
      style={{ width: "100%" }}
      dateClassName="date-style"
    >
      <Typography variant="h6">
        {position}
      </Typography>
      <Typography variant="h6">
        <Stack direction="row" justifyContent="space-between">
          <i>{company}</i>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="see details"
          >
            <ExpandMoreIcon sx={{ color: "#fff" }} />
          </ExpandMore>
        </Stack>
      </Typography>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography>
          {<MDXRenderer>{mdxBody}</MDXRenderer>}
        </Typography>
      </Collapse>
    </VerticalTimelineElement>
  )
}

export default WorkExperienceItem

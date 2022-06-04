import * as React from "react"
import PropTypes from "prop-types"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { Stack, Divider, Container } from "@mui/material"
import { styled } from '@mui/system';
import Link from '@mui/material/Link'
import { StaticImage } from "gatsby-plugin-image"

const CustomStyledHeader = styled('header')({
  display: 'flex',
  backgroundColor: "#161925",
  textAlign: "center",
  padding: "20px 0",
  "a:visited": {
    color: "white",
    textDecoration: "none",
  }
})

const Header = ({ siteTitle }) => (
  <CustomStyledHeader>
    <Container
      fixed
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <StaticImage
        src="../images/favicon.png"
        alt="PSJ"
        style={{ maxWidth: "100px" }}
      />

      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          display: {
            xxs: "none",
            xs: "none",
            sm: "none",
            md: "flex",
          }
        }}
      >
        <Link variant="h6" href="/#work-experience" underline="none">Experience</Link>

        <Link variant="h6" href="/#projects" underline="none">Projects</Link>

        <Link variant="h6" href="/#hobbies" underline="none">Hobbies</Link>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Link
          href="https://github.com/pjsanjuan"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </Link>

        <Link
          href="https://www.linkedin.com/in/pjsanjuan/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </Link>
      </Stack>
    </Container>
  </CustomStyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

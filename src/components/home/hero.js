import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Grid } from "@mui/material"

const HeroHome = ({ className }) => (
  <section className={className} id="hero-home">
    <Grid
      container
      fixed
      spacing={4}
      sx={{ minHeight: "100vh", alignItems: "center" }}
    >
      {/* Profile picture */}
      <Grid item xs={12} sm={5}>
        <StaticImage
          src="../../images/headshot.jpg"
          alt="Profile picture"
          imgStyle={{ borderRadius: "100%" }}
        />
      </Grid>

      {/* About */}
      <Grid item xs={12} sm={6}>
        <Typography>Hi, my name is</Typography>
        <Typography variant="h4">Patrick San Juan</Typography>
        <Typography>
          <p>
            I like learning new technologies through projects. I'm
            <b>primarily a back end developer</b>, but I'm learning front-end
            web technologies to <b>expand my skills</b>. Currently, I'm focused
            on developing software at <b>Hootsuite</b>.
          </p>
        </Typography>
      </Grid>
    </Grid>
  </section>
)

export default HeroHome

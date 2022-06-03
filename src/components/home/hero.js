import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Grid } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const query = graphql`
  query {
    mdx(
      fileAbsolutePath: {regex: "/content/hero/"}
    ) {
     id
     body
    }
  }
`

const HeroHome = ({ className }) => {
  const { mdx } = useStaticQuery(query)

  return (
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
         <MDXRenderer>{mdx.body}</MDXRenderer>
        </Grid>
      </Grid>
    </section>
  )
}

export default HeroHome

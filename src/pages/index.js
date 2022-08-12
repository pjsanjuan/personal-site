import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import Projects from "../components/home/projects"
import Hobbies from "../components/home/hobbies"
import WorkExperience from "../components/work-experience/work-experience"

import { Stack, ThemeProvider } from "@mui/material"
import { CssBaseline } from "@mui/material"

import themeDef from "../theme"

const IndexPage = () => (
  <ThemeProvider theme={themeDef}>
    <CssBaseline />
    <Seo title="Home" />
    <Layout>
      <Stack spacing={15}>
        <Hero />
        <WorkExperience />
        <Projects />
        <Hobbies />
      </Stack>
    </Layout>
  </ThemeProvider>
)

export default IndexPage

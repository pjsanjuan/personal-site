import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import Projects from "../components/home/projects"
import Hobbies from "../components/home/hobbies"
import WorkExperienceTabs from "../components/home/work-experience"

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
        <WorkExperienceTabs />
        <Projects />
        <Hobbies />
      </Stack>
    </Layout>
  </ThemeProvider>
)

export default IndexPage

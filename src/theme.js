import { createTheme } from "@mui/material"

const codeFonts = '"Source Code Pro", "Helvetica", "Arial", sans-serif'

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: '"Open Sans", "Montserrat", sans-serif',
    h1: {
      fontFamily: codeFonts,
    },
    h2: {
      fontFamily: codeFonts,
    },
    h3: {
      fontFamily: codeFonts,
    },
    h4: {
      fontFamily: codeFonts,
    },
    h5: {
      fontFamily: codeFonts,
    },
    h6: {
      fontFamily: codeFonts,
    },
  },
})

export default theme

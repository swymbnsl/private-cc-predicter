"use client"
import Sidebar from "@/components/sidebar"
import React, { useContext } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { ThemeContext } from "@/context/theme"

export default function layout({ children }) {
  const { isLightTheme } = useContext(ThemeContext)

  const darkTheme = createTheme({
    palette: {
      mode: isLightTheme ? "light" : "dark",
    },
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Sidebar />
        {children}
      </ThemeProvider>
    </>
  )
}

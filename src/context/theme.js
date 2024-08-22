"use client"
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext("")

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false)

  const updateTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  useEffect(() => {
    document.body.style.backgroundColor = isLightTheme ? "#EFEFEF" : "#09090a"
  }, [isLightTheme])

  return (
    <ThemeContext.Provider value={{ isLightTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

"use client"
import { ThemeContext } from "@/context/theme"
import React, { useContext, useState } from "react"
import Form from "./components/form"

export default function page() {
  const { isLightTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "black" : "white"
  const cardBgColor = isLightTheme ? "bg-white" : "bg-[#1F1F22]"

  const [input, setInput] = useState({
    gender: "male",
  })

  return (
    <>
      <div
        className={
          (isLightTheme ? "bg-[#EFEFEF]" : "bg-[#09090a]") +
          " h-[100vh] w-full flex"
        }
      >
        <div className="h-full w-1/6"></div>
        <div className="w-5/6 p-5 flex flex-col gap-3">
          <div
            className={`flex flex-col gap-5 ${cardBgColor} items-center text-${textColor} h-full rounded-2xl shadow-black/20 p-5 shadow-lg w-[40%]`}
          >
            <div className="flex flex-col gap-1 w-full">
              <span className="text-2xl font-bold w-full">
                Predict Approval
              </span>
              <div className="w-full h-[2px] bg-[#cfcfcf] rouded-full"></div>
            </div>
            <Form
              input={input}
              setInput={setInput}
              textColor={textColor}
              isLightTheme={isLightTheme}
            />
          </div>
        </div>
      </div>
    </>
  )
}

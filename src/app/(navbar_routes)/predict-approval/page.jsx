"use client"
import { ThemeContext } from "@/context/theme"
import React, { useContext, useState } from "react"
import Form from "./components/form"
import axios from "axios"

export default function page() {
  const { isLightTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "black" : "white"
  const cardBgColor = isLightTheme ? "bg-white" : "bg-[#1F1F22]"

  const [input, setInput] = useState({
    gender: 0,
    ownedRealty: 1,
    income: undefined,
    incomeType: 1,
    education: 1,
    housingType: 1,
    jobTitle: 1,
    totalFamilyMembers: undefined,
    age: undefined,
    workingExperience: undefined,
    totalBadDebt: undefined,
  })

  const [prediction, setPrediction] = useState("")
  const [probability, setProbability] = useState("")
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const predictApproval = async () => {
    try {
      console.log("Started")
      console.log(Object.values(input))
      const res = await axios.post(
        "https://credx-backend.onrender.com/predict",
        Object.values(input),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      // const res = await axios.post(
      //   "https://credx-backend.onrender.com/predict",
      //   JSON.stringify(input)
      // )
      setPrediction(res.data.prediction)
      setProbability(res.data.probability)
      console.log({ res })
    } catch (error) {
      console.log({ error })
    } finally {
      console.log("Ended")
    }
  }

  return (
    <>
      <div className="p-5 flex justify-between gap-3 w-full  ">
        <div
          className={`flex flex-col gap-5 ${cardBgColor} items-center text-${textColor} rounded-2xl shadow-black/20 p-5 shadow-lg min-w-[490px]`}
        >
          <div className="flex flex-col gap-1 w-full">
            <span className="text-2xl font-bold w-full">Predict Approval</span>
            <div className="w-full h-[2px] bg-[#cfcfcf] rouded-full"></div>
          </div>
          <Form
            predictApproval={predictApproval}
            input={input}
            setInput={setInput}
            textColor={textColor}
            isLightTheme={isLightTheme}
          />
        </div>
        <div
          className={`flex flex-col gap-5 ${cardBgColor} items-center text-${textColor} rounded-2xl shadow-black/20 p-5 shadow-lg w-full`}
        >
          <div className="flex flex-col gap-1 w-full">
            <span className="text-2xl font-bold w-full">
              prediction: {prediction}
            </span>
            <span className="text-2xl font-bold w-full">
              probability: {probability}
            </span>
            {/* <div className="w-full h-[2px] bg-[#cfcfcf] rouded-full"></div> */}
          </div>
        </div>
      </div>
    </>
  )
}

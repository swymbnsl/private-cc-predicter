"use client"
import { ThemeContext } from "@/context/theme"
import React, { useContext, useEffect, useState } from "react"
import Form from "./components/form"
import axios from "axios"
import PredictionGauge from "@/components/prediction_gauge"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import CountUp from "react-countup"
import { creditCardApprovalTips } from "@/helpers/tips"
import { RefreshCcw } from "lucide-react"

export default function page() {
  const { isLightTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "black" : "white"
  const cardBgColor = isLightTheme ? "bg-white" : "bg-[#161618]"

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
  const [isPredicting, setIsPredicting] = useState(false)
  const [refresh, setRefresh] = useState(true)
  const [randomTips, setRandomTips] = useState(["demo"])

  const predictApproval = async () => {
    try {
      setButtonDisabled(true)
      setIsPredicting(true)
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
      setPrediction(res.data.prediction)
      setProbability(res.data.probability)
      console.log({ res })
    } catch (error) {
      console.log({ error })
    } finally {
      console.log("Ended")
      setButtonDisabled(false)
      setIsPredicting(false)
    }
  }

  const getRandomTips = () => {
    const tempRandomTips = []
    for (let i = 0; i < 7; i++) {
      tempRandomTips.push(
        creditCardApprovalTips[Math.floor(Math.random() * 98)]
      )
    }
    setRandomTips(tempRandomTips)
  }

  useEffect(() => {
    getRandomTips()
  }, [refresh])

  useEffect(() => {
    if (
      input.income &&
      input.totalFamilyMembers &&
      input.workingExperience &&
      input.age &&
      input.totalBadDebt
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [input])

  return (
    <>
      <div className="p-5 px-10 w-full  ">
        <div
          className={`flex flex-col gap-5 h-full text-${textColor} shadow-black/20`}
        >
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[32px] font-bold w-full">
              Predict Approval
            </span>
            <div className="w-full h-[2px] bg-[#cfcfcf] rounded-full"></div>
          </div>
          <div className="flex w-full gap-8">
            <Form
              isPredicting={isPredicting}
              buttonDisabled={buttonDisabled}
              predictApproval={predictApproval}
              input={input}
              setInput={setInput}
              textColor={textColor}
              isLightTheme={isLightTheme}
            />
            <div
              className={`shadow-black/20 shadow-2xl ${cardBgColor} text-${textColor} rounded-2xl w-full flex flex-col items-center h-full p-5`}
            >
              <span className="text-[25px] font-bold w-full">Results:</span>
              <div className="h-[220px] flex items-center">
                <div className="w-[300px] h-[300px] relative">
                  <div className="absolute top-0 w-full h-full">
                    <PredictionGauge
                      color={["#1f1f22"]}
                      animationDuration={0}
                      data={[1]}
                    />
                  </div>
                  <div className="absolute top-0 w-full h-full">
                    <PredictionGauge
                      color={["#C8BCF6", "rgba(0, 0, 0, 0)"]}
                      animationDuration={1000}
                      data={[75, 25]}
                    />
                  </div>
                  <div className="w-full flex flex-col items-center absolute top-[165px]">
                    <span className="font-bold text-4xl">
                      <CountUp end={75} duration={1} />%
                    </span>
                  </div>
                </div>
              </div>
              <span className="font-bold text-lg text-center text-green-200">
                Yay!! Based on the data you provided, you have 75% chances of
                getting your credit card approved 🎉
              </span>
              <div className="w-full mt-10 flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <span className="font-bold text-lg w-full">
                    Some tips to improve your chances:
                  </span>
                  <RefreshCcw
                    className="hover:cursor-pointer"
                    onClick={getRandomTips}
                  />
                </div>
                <div className="w-full h-[2px] bg-[#cfcfcf] rounded-full"></div>
                <div className="flex flex-col mt-3 gap-3">
                  {randomTips.map((i, idx) => {
                    return <span key={idx}> » &nbsp; {i}</span>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

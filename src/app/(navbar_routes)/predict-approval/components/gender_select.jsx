import React, { useState } from "react"
import FemaleLogo from "@/components/female_logo"
import MaleLogo from "@/components/male_logo"

export default function GenderSelect({
  textColor,
  isLightTheme,
  input,
  setInput,
}) {
  const selectedBgColor = "[#C8BCF6]/20"
  const selectedIconColor = isLightTheme ? "#7650FF" : "#C8BCF6"
  const selectedTextColor = isLightTheme ? "text-[#7650FF]" : "text-[#C8BCF6]"
  const selectedBorderColor = isLightTheme
    ? "border-[#7650FF]"
    : "border-[#C8BCF6]"
  return (
    <div className="flex justify-between">
      <div
        onClick={() =>
          setInput((prev) => {
            return {
              ...prev,
              ["gender"]: "male",
            }
          })
        }
        className={
          (input.gender == "male"
            ? `bg-${selectedBgColor} ${selectedBorderColor} border-[2.5px]`
            : "border-transparent  border-[2.5px]") +
          ` h-[100px] w-[45%] rounded-2xl flex items-center p-3 gap-3 hover:cursor-pointer`
        }
      >
        <MaleLogo
          color={input.gender == "male" ? selectedIconColor : textColor}
          height="40px"
          width="40px"
        />
        <span
          className={
            (input.gender == "male" ? `${selectedTextColor}` : textColor) +
            " text-2xl font-bold"
          }
        >
          Male
        </span>
      </div>
      <div
        onClick={() =>
          setInput((prev) => {
            return {
              ...prev,
              ["gender"]: "female",
            }
          })
        }
        className={
          (input.gender == "female"
            ? `bg-${selectedBgColor} ${selectedBorderColor} border-[2.5px]`
            : "border-transparent  border-[2.5px]") +
          ` h-[100px] w-[45%] rounded-2xl flex items-center p-3 gap-3 hover:cursor-pointer`
        }
      >
        <FemaleLogo
          color={input.gender == "female" ? selectedIconColor : textColor}
          height="40px"
          width="40px"
        />
        <span
          className={
            (input.gender == "female" ? `${selectedTextColor}` : textColor) +
            " text-2xl font-bold"
          }
        >
          Female
        </span>
      </div>
    </div>
  )
}

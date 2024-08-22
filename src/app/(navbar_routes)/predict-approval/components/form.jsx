import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material"
import React from "react"
import GenderSelect from "./gender_select"
import { DollarSign, IndianRupee } from "lucide-react"
import PrimaryButton from "@/components/button"

export default function Form({ textColor, isLightTheme, input, setInput }) {
  const handleChange = (evt) => {
    setInput((prev) => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value,
      }
    })
  }

  return (
    <div className=" flex w-full flex-col gap-5">
      <GenderSelect
        textColor={textColor}
        isLightTheme={isLightTheme}
        input={input}
        setInput={setInput}
      />

      <div className="flex flex-col w-full gap-5">
        <TextField
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          id="age"
          label="Age"
          variant="outlined"
          type="number"
          placeholder="21"
          name="age"
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Education Type
          </InputLabel>
          <Select
            name="education"
            value={input.education}
            label="Education Type"
            onChange={handleChange}
          >
            <MenuItem value={"lower_secondary"}>Lower Secondary</MenuItem>
            <MenuItem value={"secondary"}>Secondary</MenuItem>
            <MenuItem value={"higher"}>Higher</MenuItem>
            <MenuItem value={"incomplete_higher"}>Incomplete higher</MenuItem>
            <MenuItem value={"academic_degree"}>Academic Degree</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[48%]">
          <TextField
            id="income"
            label="Income"
            variant="outlined"
            type="number"
            name="income"
            onChange={handleChange}
            placeholder="180000"
            InputProps={{
              inputProps: {
                min: 0,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <IndianRupee color={textColor} size={20} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="w-[48%]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Income Type
            </InputLabel>
            <Select
              name="incomeType"
              value={input.incomeType}
              label="Income Type"
              onChange={handleChange}
            >
              <MenuItem value={"freelancing"}>Freelancing</MenuItem>
              <MenuItem value={"working"}>Working</MenuItem>
              <MenuItem value={"state_servant"}>State Servant</MenuItem>
              <MenuItem value={"commercial_associate"}>
                Commercial Associate
              </MenuItem>
              <MenuItem value={"pensioner"}>Pensioner</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[48%]">
          <TextField
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            id="years-of-working"
            label="Years of Working"
            variant="outlined"
            type="number"
            name="workingExperience"
            onChange={handleChange}
            placeholder="4"
          />
        </div>

        <div className="w-[48%]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Job Title
            </InputLabel>
            <Select
              name="jobTitle"
              value={input.jobTitle}
              label="Job Title"
              onChange={handleChange}
            >
              <MenuItem value={"security_staff"}>Security Staff</MenuItem>
              <MenuItem value={"sales_staff"}>Sales Staff</MenuItem>
              <MenuItem value={"accountants"}>Accountants</MenuItem>
              <MenuItem value={"laborers"}>Laborers</MenuItem>
              <MenuItem value={"managers"}>Managers</MenuItem>
              <MenuItem value={"drivers"}>Drivers</MenuItem>
              <MenuItem value={"core_staff"}>Core Staff</MenuItem>
              <MenuItem value={"high_skill_tech_staff"}>
                High Skill Tech Staff
              </MenuItem>
              <MenuItem value={"cleaning_staff"}>Cleaning Staff</MenuItem>
              <MenuItem value={"private_service_staff"}>
                Private Service Staff
              </MenuItem>
              <MenuItem value={"cooking_staff"}>Cooking Staff</MenuItem>
              <MenuItem value={"low_skilled_laborers"}>
                Low Skilled Laborers
              </MenuItem>
              <MenuItem value={"medicine_staff"}>Medicine Staff</MenuItem>
              <MenuItem value={"secretaries"}>Secretaries</MenuItem>
              <MenuItem value={"waiter_staff"}>Waiter Staff</MenuItem>
              <MenuItem value={"hr_staff"}>Hr Staff</MenuItem>
              <MenuItem value={"realty_agent"}>Realty Agent</MenuItem>
              <MenuItem value={"it_staff"}>IT Staff</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="w-full">
        <TextField
          InputProps={{
            inputProps: {
              min: 0,
            },
          }}
          fullWidth
          id="total-bad-debt"
          label="Total Bad Debt"
          variant="outlined"
          type="number"
          name="totalBadDebt"
          onChange={handleChange}
          placeholder="0"
        />
      </div>
      <div className="w-full">
        <TextField
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          fullWidth
          id="family_members"
          label="Total Family Members"
          variant="outlined"
          type="number"
          name="totalFamilyMembers"
          onChange={handleChange}
          placeholder="5"
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[35%]">
          <FormControl className="w-full">
            <FormLabel id="demo-radio-buttons-group-label">
              Owned realty?
            </FormLabel>
            <RadioGroup
              sx={{
                // backgroundColor: "red",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="w-[48%]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Housing Type
            </InputLabel>
            <Select
              name="housingType"
              value={input.housingType}
              label="Housing Type"
              onChange={handleChange}
            >
              <MenuItem value={"freelancing"}>House / apartment</MenuItem>
              <MenuItem value={"working"}>Rented apartment</MenuItem>
              <MenuItem value={"state_servant"}>Municipal apartment</MenuItem>
              <MenuItem value={"commercial_associate"}>With parents</MenuItem>
              <MenuItem value={"pensioner"}>Co-op apartment</MenuItem>
              <MenuItem value={"pensioner"}>Office apartment</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <PrimaryButton
        isLightTheme={isLightTheme}
        // clickFunction={}
        disabled={false}
        width="100%"
        height="40px"
        buttonText="Predict"
      />
    </div>
  )
}

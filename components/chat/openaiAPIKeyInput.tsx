"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"
import { Input } from "../input"

//@ts-ignore
export function OpenaiAPIKeyInput({ oaiKey, setOaiKey }) {
  const [inputOaiKey, setInputOaiKey] = useState("")
  const [oaiKeyFocus, setOaiKeyFocus] = useState(false)
  const [oaiKeyValueDisplayed, setOaiKeyValueDisplayed] = useState("")
  const [isKeyValid, setIsKeyValid] = useState(false)

  useEffect(() => {
    if (oaiKeyFocus) {
      setOaiKeyValueDisplayed(inputOaiKey)
    } else {
      setOaiKeyValueDisplayed(inputOaiKey.replace(/./g, "*"))
    }
  }, [inputOaiKey, oaiKeyFocus])

  useEffect(() => {
    if (inputOaiKey.length > 50) {
      fetch(`/api/test_api?key=${inputOaiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setIsKeyValid(data.status)
          if (data.status === true) {
            setOaiKey(inputOaiKey)
          } else {
            setOaiKey("")
          }
        })
        .catch((error) => console.error("Error:", error))
    } else {
      setIsKeyValid(false)
      setOaiKey("")
    }
  }, [inputOaiKey])

  const oaiKeyClassName = clsx(
    "placeholder:text-current border-current border-1 rounded-lg py-8 max-w-[25rem] md:max-w-[30rem] md:py-12 lg:py-5 mt",
    {
      "bg-green-400": isKeyValid,
      "bg-red-300": !isKeyValid,
    }
  )

  return (
    <div className=" mt-[25px] flex gap-5">
      <label
        htmlFor=""
        className="flex items-center justify-center font-bold"
      >
        Open AI API Key:
      </label>
      <Input
        type="text"
        id="oaikey"
        placeholder="Enter Key Here."
        className={oaiKeyClassName}
        value={oaiKeyValueDisplayed}
        onChange={(e) => setInputOaiKey(e.target.value)}
        onFocus={() => setOaiKeyFocus(true)}
        onBlur={() => setOaiKeyFocus(false)}
      />
    </div>
  )
}

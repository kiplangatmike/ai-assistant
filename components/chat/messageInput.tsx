import * as React from "react"
import { TextArea } from "../textArea"
import { Button } from "../button"

interface Props {
  isDisabled: boolean
  isLoading: boolean
  inputText: string
  handleKeyDown: any
  handleSendMessage: any
  setInputText: any
}

interface Props {
  isDisabled: boolean
  isLoading: boolean
  inputText: string
  handleKeyDown: any
  handleSendMessage: any
  setInputText: any
}

export const MessageInput: React.FC<Props> = ({
  isDisabled,
  isLoading,
  inputText,
  handleKeyDown,
  handleSendMessage,
  setInputText,
}) => {
  const placeholder = isDisabled
    ? "Please enter your OpenAI key above."
    : "Type message here."

  return (
    <div className="relative mb-20 mt-[5px]">
      <TextArea
        className="w-[100%]"
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isDisabled || isLoading}
      />
      <Button
        className="absolute mt-[5px] w-[15%]"
        onClick={handleSendMessage}
        disabled={isDisabled || isLoading}
      >
        Send
      </Button>
    </div>
  )
}

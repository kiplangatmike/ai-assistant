import * as React from "react"
import { ScrollArea } from "@/components/scroll-area"
import { AssistantChatCard } from "@/components/chat/assistantChat"
import { UserChatCard } from "@/components/chat/userChat"

interface IMessage {
  sender: string
  text: string
}

interface ChatWindowProps {
  messages: IMessage[]
  scrollAreaRef: React.RefObject<HTMLDivElement>
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  scrollAreaRef,
}) => {
  return (
    <ScrollArea className="mt-[100px] h-[500px] w-[800px] rounded-md border">
      <div className="mt-[25px] flex items-center justify-center">
        <h1 className="text-3xl font-bold">AI Assitant</h1>
      </div>
      {messages.map((message, index) =>
        message.sender === "assistant" ? (
          <AssistantChatCard key={index} text={message.text} />
        ) : (
          <UserChatCard key={index} text={message.text} />
        )
      )}
      <div ref={scrollAreaRef} />
    </ScrollArea>
  )
}

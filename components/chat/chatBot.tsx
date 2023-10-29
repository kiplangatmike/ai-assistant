"use client"

import { useState, useRef } from "react";
import { OpenaiAPIKeyInput } from "./openaiAPIKeyInput";
import { ChatWindow } from "./chatWindow";

export function ChatBox() {
    const [oaiKey, setOaiKey] = useState("")
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Good morning! What can I do for you today?" },
  ])

    const scrollAreaRef = useRef<HTMLDivElement>(null)
    return (
        <section>
            <OpenaiAPIKeyInput oaiKey={""} setOaiKey={setOaiKey}/>
            <ChatWindow messages={messages} scrollAreaRef={scrollAreaRef}/>
        </section>
    )
}
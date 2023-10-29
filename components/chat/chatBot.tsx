"use client"

import { useState } from "react";
import { OpenaiAPIKeyInput } from "./openaiAPIKeyInput";

export function ChatBox() {
    const [oaiKey, setOaiKey] = useState("")
    return (
        <section>
            <OpenaiAPIKeyInput oaiKey={""} setOaiKey={setOaiKey}/>
        </section>
    )
}
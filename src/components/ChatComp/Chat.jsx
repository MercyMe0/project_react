import React, { useState } from 'react'
import Comments from "./Comments"
import ChatBlocks from "./ChatBlocks"
import Hook from "../Main/Hook"
import "./ChatComp.css"
export default function Chat() {

  const [user] = Hook("USER")
  const [chatData, setChatData] = Hook("CHAT", [])
  const [inputValue, setInputValue] = useState("")
  const [showDialog, setShowDialog] = useState(false)

  const sendChat = () => {
    if(user) {
      setChatData([...chatData, `${user}: ${inputValue}`]);
      setInputValue("")
    } else {
      setShowDialog(true)
      setInputValue("")

    }

  }

  return (
    <div className="chatWrap">
      <div className="chatBlocks" >
        <ChatBlocks chatData={chatData} />
      </div>

      <div className="CommentsChat">
        <Comments
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendChat={sendChat}
        setChatData={setChatData}
        showDialog={showDialog}
        />
      </div>

    </div>
  )
}
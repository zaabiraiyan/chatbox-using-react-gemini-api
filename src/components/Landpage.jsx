import React from 'react'
import { useEffect, useRef, useState } from "react"
import Chatboxform from "./Chatboxform"
import Chaticon from "./Chaticon"
import Chatmessage from "./Chatmessage";
const Landpage = () => {
    const chatbodyref=useRef()
    const updatehistory=(text)=>{
      setchathistory(prev=>[...prev.filter((msg)=>msg.text !=='thinking...'),{role:'model',text}])
    }
    const [chathistory,setchathistory]=useState([]);
    const generateresponse=async(history)=>{
      history=history.map(({role,text})=>({role,parts:[{text}]}))
      const request={
        method:"POST",
        header:{"Content-Type":" application/json"},
        body:JSON.stringify({contents: history})
      }
      try{
        const response=await fetch(import.meta.env.VITE_API_URL,request)
        const data=await response.json()
        if(!response.ok) throw new Error(data.error.message || "something went wrong")
          console.log(data)
        const apiresponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
        updatehistory(apiresponse)
        console.log(data)
      }catch(error){
          console.log(error)
      }
  
    }
  
    useEffect(()=>{
        chatbodyref.current.scrollTo({top:chatbodyref.current.scrollHeight,behaviour:"smooth"})
    },[chathistory])

  return (
    <div className="container">
    <div className="chatbot-popup">
      {/* bot header */}
      <div className="chatbot-header">
        <div className="chatbot-info">
          <Chaticon/>
          <h2 className="logo-text">chatbot</h2> 
          </div>
      
      <button className="material-symbols-rounded">
      keyboard_arrow_down
      </button>
      </div>
   
    {/* bot body */}
    <div ref={chatbodyref} className="message-body">
        <div className="message body-message">
        <Chaticon/>
        <p className="message-text">
          hey there <br/> how can i help u ?
        </p>
        </div>

        
    {chathistory.map((chat,index)=>(
      <Chatmessage key={index} chat={chat} />
    ))}

    </div>
        {/* bot footer */}
        <div className="message-footer">
          <Chatboxform chathistory={chathistory} setchathistory={setchathistory} generateresponse={generateresponse} />
          
        </div>
    </div>
</div>
  )
}

export default Landpage
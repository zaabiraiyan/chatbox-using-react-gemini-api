import React from 'react'
import Chaticon from './Chaticon'

const Chatmessage = ({chat}) => {
  return (
    <div className={`message ${chat.role ==='model'?'body':'user'}-message`}>
            {chat.role === 'model' && <Chaticon/>}
            <p className="message-text">
             {chat.text}
            </p>

        </div>
  )
}

export default Chatmessage
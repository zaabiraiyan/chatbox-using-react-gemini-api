import React, { useRef } from 'react'

const Chatboxform = ({chathistory,setchathistory,generateresponse}) => {
    const focus=useRef()
    const handlesubmitform=(e)=>{
        e.preventDefault()
        const usermessage=focus.current.value.trim()
        if(!usermessage) return;
        focus.current.value="";
        setchathistory((history)=>[...history,{role:"user",text:usermessage}])
        setTimeout(()=> setchathistory((history)=>[...history,{role:"model",text:'thinking...'}]),600)
        generateresponse([...chathistory,{role:"user",text:usermessage}])
      };
     
     
    
  return (
    <div>
        <form action="#" className="user-form" onSubmit={handlesubmitform}>
                <input ref={focus} type="text" className="message-input" placeholder="message..." required/>
                <button className="material-symbols-rounded">
                  arrow_upward
                </button>
              </form>
    </div>
  )
}

export default Chatboxform
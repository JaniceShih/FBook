import { Avatar } from '@mui/material'
// import {React, useState} from 'react';
import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {

  // const {Input, setInput} = useState("");

  const handleSubmit =(e) =>{
    e.preventDefault();
    //some clever db stuff;
    
  }

  return (
    <div className='messagesender'>
      <div className='messagesender__top'>
         <Avatar src={window.demouserimg}/>
         <form>
             {/* need to work on setting value from state */}
            <input className='messagesender__input'
            placeholder={`What's on your mind`} />
            <input
            placeholder={`image URL(option)`} />
            <button onClick={handleSubmit} type="submit">Hidden submit</button>
         </form>
      </div>     
      
      <div className='messagesender__buttom'>
         {/* <div className='messagesender__option'>
           <VideocamIcon style={{color: "red"}} />
            <h3>LIve Video</h3>
         </div> */}
         <div className='messagesender__option'>
           <PhotoLibraryIcon style={{color: "green"}} />
            <h3>Photo/Video</h3>
         </div>
         <div className='messagesender__option'>
           <InsertEmoticonIcon style={{color: "orange"}} />
            <h3>Feeling/Activity</h3>
         </div>
      </div>
    </div>
  )
}

export default MessageSender
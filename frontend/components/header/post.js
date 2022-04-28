import React from 'react'
import Avatar from '@mui/material/Avatar'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// need to work on rdner value from database(api)
function Post({profilePic, body, timestame, username, image, updated_at}) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar'/>
        <div className='post__topinfo'>
            <h3>{username}</h3>
            <p>{updated_at}</p>
        </div>
      </div>
      <div className="post__buttom">      
            <p>{body}</p>    
      </div>
      <div className="post__image">
          <img src={image} />
      </div>   

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpOffAltIcon /> 
          <p> Like </p>
        </div>  
        <div className='post__option'>
          <ChatBubbleOutlineIcon /> 
          <p> Comment </p>
        </div>  
      </div>     
 
    </div>
  )
}

export default Post
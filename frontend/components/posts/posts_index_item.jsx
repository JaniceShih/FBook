import React from 'react'
import Avatar from '@mui/material/Avatar'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// need to work on rdner value from database(api)
class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      deletestate: ''
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
    this.setState({
      deletestate: 'deleted'
    })
  }
  

  
  render(){
    
    const {post, deletePost} = this.props;
    // console.log(post.id)

    return (
      <div className='post'>
        <div className='post__top'>
          <Avatar className='post__avatar'/>
          <div className='post__topinfo'>
              <h3>{post.fname}</h3>
              <p>{post.updated_at}</p>
          </div>
          
        </div>
       
        <div className="post__buttom">      
              <p>{post.body}</p>             
        </div>
  
        <div className="post__image">
            <img src={post.photoUrl} />
        </div>

        <div  className='post__options'>
    
          <div className='post__option'>
            <button onClick={this.handleDelete}> Delete </button> 
          </div>
          <div className='post__option'>
            <button > Edit </button> 
          </div>
    
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
}

export default PostIndexItem
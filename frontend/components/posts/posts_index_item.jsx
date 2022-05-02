import React from 'react'

import Avatar from '@mui/material/Avatar'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import PostIndexItemMenu from './posts_index_item_menu'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.openDeletePostModal = this.openDeletePostModal.bind(this);
    this.openEditPostModal = this.openEditPostModal.bind(this);
  }

  openDeletePostModal(e) {
    e.preventDefault();
    this.props.openModal({ type: 'delete_post', post: this.props.post });
 } 

 openEditPostModal(e){
  e.preventDefault();
  this.props.openModal({ type: 'edit_post', post: this.props.post });
 }

  render(){
    const {post} = this.props;

    return (
      <div className='post'>
        <div className='post__top'>
          <div className='post__top--left'>
            <Avatar className='post__avatar'/>
            <div className='post__topinfo'>
              <h3>{post.fname}</h3>
              <p>{post.updated_at}</p>            
            </div>
          </div>
          <div className="post__top__right">
              <p onClick={this.handleClick} className="post__menu">...</p>   
              <div className="post__top__right--menu">
                <div className="post__option">
                  <ModeEditOutlineOutlinedIcon />
                  <button  onClick={this.openEditPostModal}> Edit Post </button> 
                </div> 
                <div  className="post__option">
                  <DeleteForeverOutlinedIcon />
                  <button onClick={this.openDeletePostModal}> Delete Post </button> 
                </div>
               
              </div>                  
          </div>
        </div>
        
        <div className="post__buttom">      
            <p>{post.body}</p>             
        </div>
  
        <div className="post__image">
          <img src={post.photoUrl} />
        </div>

        {/* <div  className='post__options'>    
          <div className='post__option'>
            <button onClick={this.openDeletePostModal}> Delete </button> 
          </div>
          <div className='post__option'>
            <button  onClick={this.openEditPostModal}> Edit </button> 
          </div>    
        </div> */}

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
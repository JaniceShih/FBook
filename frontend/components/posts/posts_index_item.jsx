import React from 'react'

import Avatar from '@mui/material/Avatar'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import CommentsContainer from '../comments/comments_index_container'

class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.openDeletePostModal = this.openDeletePostModal.bind(this);
    this.openEditPostModal = this.openEditPostModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openDeletePostModal(e) {
    e.preventDefault();
    this.props.openModal({ type: 'delete_post', post: this.props.post });
 } 

 openEditPostModal(e){
  e.preventDefault();
  this.props.openModal({ type: 'edit_post', post: this.props.post });
 }

 handleClick(id){   
   
   const ele = document.getElementById('post__comment'+id);
   if (ele.style.display === "none"){
      console.log(id);
      ele.style.display = 'flex'; 
   }else{
      ele.style.display = 'none'; 
   }
 }

  render(){
    const {currentUser, post, friendIds} = this.props; 

    // const friendIds = [currentUser.id];
    // Object.values(followers).map(friend=> console.log(friendIds.push(friend.id)));
    // Object.values(following).map(friend=> console.log(friendIds.push(friend.id)));


    if(!friendIds.includes(post.user_id)) {
        return null;
    } 

    let post__menu = '';
    // console.log(post.user_id);
    // console.log( currentUser.id);
    if(post.user_id === currentUser.id){
       post__menu = <p className="post__menu">...</p>;
    }
    
    const commentsCount = post.comments.length;


    return (
      <div className='post'>
        <div className='post__top'>
          <div className='post__top--left'>
            <Avatar /> 
            <div className='post__topinfo'>
              <h3>{post.fname + ' ' + post.lname}</h3>
              <p>{post.updated_at.toString().split('T')[0]}</p>            
            </div>
          </div>
          
          <div className="post__top__right">

               {post__menu}

              <div className="post__top__right--menu">
                <div className="post__option"
                    onClick={this.openEditPostModal}>
                  <ModeEditOutlineOutlinedIcon />
                  <button  > Edit Post </button> 
                </div> 
                <div  className="post__option"
                      onClick={this.openDeletePostModal}>
                  <DeleteForeverOutlinedIcon />
                  <button > Delete Post </button> 
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

        <div  className='post__likeComment'>    
          <div className='post__option--like'>
            Likes
          </div>
          <div className='post__option--comment'>
            <p onClick={()=>this.handleClick(post.id)}> {commentsCount} Comments </p>
          </div>    
        </div>


        <div className='post__options'>
          <div className='post__option'>
            <ThumbUpOffAltIcon /> 
            <p> Like </p>
          </div>  
          <div className='post__option'>
            <ChatBubbleOutlineIcon /> 
            <p onClick={()=>this.handleClick(post.id)}>  Comment </p>
          </div>  
        </div> 

        <div id="CommentsContainer" className='post__comments'>
          <CommentsContainer post={post} currentUser={currentUser}/>
        </div>    
   
      </div>
    )
  }  
}

export default PostIndexItem
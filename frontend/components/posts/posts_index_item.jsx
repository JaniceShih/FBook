import React from 'react'

import Avatar from '@mui/material/Avatar'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import CommentsContainer from '../comments/comments_index_container'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';


class PostIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.openDeletePostModal = this.openDeletePostModal.bind(this);
    this.openEditPostModal = this.openEditPostModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreateLike = this.handleCreateLike.bind(this);
    this.handleDeleteLike = this.handleDeleteLike.bind(this);
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
      // console.log(id);
      ele.style.display = 'flex'; 
  }else{
      ele.style.display = 'none'; 
  }
 }

 handleCreateLike(e){
    e.preventDefault();
    const like = {like_id: this.props.post.id, like_type: "Post", user_id: this.props.currentUser.id};
    // console.log("create");
    this.props.createLike(like);
    this.props.fetchPosts();
 }

 handleDeleteLike(likeId){
   return (e)=>{
    // console.log("delete:" + likeId);
    this.props.deleteLike(likeId);
    this.props.fetchPosts();
   }

}

  render(){
    const {currentUser, post, friendIds, userId} = this.props; 
    // console.log(userId);
    // console.log(post.user_id);

    if ((typeof userId !== "undefined") && userId!==post.user_id){
      return null;
    }

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
    const likesCount = post.likes.length;

    let userImag =  <Avatar sx={{ height: '40px', width: '40px' }}
    /> 
    if(post.user_photoUrl){
        userImag =  <img src={post.user_photoUrl} className="avatar avatar--medium"/>            
    }

    let likeId = 0;
    let likesThumbup = "";
    post.likes.map(liker=> {
      if (liker.user_id === currentUser.id) {
        likesThumbup= "jacebook__color--active"
        likeId=liker.id
      }  
    })

    // console.log(likesThumbup);

    return (
      <div className='post'>
        <div className='post__top'>
          <div className='post__top--left'>
           {userImag}
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
             <ThumbUpRoundedIcon /> {likesCount}
          </div>
          <div className='post__option--comment'>
            <p onClick={()=>this.handleClick(post.id)}> {commentsCount} Comments </p>
          </div>    
        </div>


        <div className='post__options'>
          <div className={`post__option ` + likesThumbup}>
            <ThumbUpOffAltIcon /> 
            <p className={likesThumbup}> 
            <button onClick={(likesThumbup === '') ? this.handleCreateLike : this.handleDeleteLike(likeId) }>Like</button>  
            </p>
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
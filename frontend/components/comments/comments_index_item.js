import React from 'react';
import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: this.props.comment.body,
            editstatus: ''
        }
        this.updateEditStatus = this.updateEditStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.openDeleteCommentModal = this.openDeleteCommentModal.bind(this);
        this.handleCreateLike = this.handleCreateLike.bind(this);
        this.handleDeleteLike= this.handleDeleteLike.bind(this);
    }

    updateEditStatus(){
        this.setState({
            editstatus: 'edit'
        })
    }

   
    openDeleteCommentModal(e) {
        // debugger
        e.preventDefault();
        this.props.openModal({ type: 'delete_comment', comment: this.props.comment });
    }

    handleSubmit(e) {
        e.preventDefault();

        const comment = {
            body: this.state.body,
            id: this.props.comment.id,
            post_id: this.props.postId,
            user_id: this.props.currentUser.id
        }
        
        // console.log(comment);

        this.props.updateComment(comment);
        this.props.fetchPosts();
        this.setState({
            editstatus: ''
        })
    }

    update(field){
        return e =>(
          this.setState({
            [field]: e.currentTarget.value
          })    
        )      
    }

    handleCreateLike(e){
        e.preventDefault();
        const like = {like_id: this.props.comment.id, like_type: "Comment", user_id: this.props.currentUser.id};
        // console.log(like);
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
        const {comment, deleteComment, updateComment, fetchPosts, postId, currentUser,openModal} = this.props;
        // console.log(this.props.postId);
        // console.log(this.props.userId);
        // this.setState({
        //     post_id: this.props.postId,
        //     user_id: this.props.userId
        //   }) 
        // console.log(comment.id);

        let comment__menu = '';
        if(comment.user_id === currentUser.id){ 
            comment__menu = <p className="comments__menu"> ... </p>;
        }

        let userImag =  <Avatar sx={{ height: '28px', width: '28px' }}
        /> 
        if(currentUser.photoUrl){
            userImag =  <img src={comment.photoUrl} className="avatar avatar--medium"/>           
        }

        // const likesCount = comment.likes.length;

        let  likesCount =  '' ;
        if (comment.likes.length > 0) {
            likesCount =  <p className='jacebook__color--active comments__body__bottom--likescount'> <ThumbUpRoundedIcon />  {comment.likes.length}</p>
        }

        let likeId = 0;
        let likesThumbup = "";
        // console.log(comment.likes);
        comment.likes.map(liker=> {
          if (liker.user_id === currentUser.id) {
            
            likesThumbup= "jacebook__color--active"
            likeId=liker.id
          }  
        })
       

        let comment_body = '';
        if (this.state.editstatus === 'edit'){
            comment_body = 
                <div className='comments__create' >
                    {userImag}
                    <form>
                            <input className='comments__input'
                                value={this.state.body}
                                onChange={this.update('body')}                            
                            />   
                            <button 
                                onClick={this.handleSubmit} 
                                type="submit"
                                className='btn--hidden'>
                                Hidden submit
                            </button>   
                        </form>
                </div>  
                
        }else{
            comment_body = 
                <div  className="comments__item" >
                    <Avatar src={comment.photoUrl}/>                     
                    <div className ="comments__body">
                        <div  className='comments__body__top'>
                            <h3>{comment.fname +' ' + comment.lname}</h3>
                            <p>{comment.body}</p>  
                            
                        </div>
                        <div className='comments__body__bottom--likes '>
                             <p> 
                                 
                                 {/* <button className={'comments__buttom ' + likesThumbup}> Like </button>   */}
                                 <button 
                                    className={'comments__buttom ' + likesThumbup}
                                    onClick={(likesThumbup === '') ? this.handleCreateLike : this.handleDeleteLike(likeId) }>Like</button>  

                             
                             </p>
                             {likesCount}
                        </div>                    
                    </div>
                    <div className="comments__body__right">
                        {comment__menu}
                        <div className="comments__item--menu">
                            <div className="post__option" onClick={this.updateEditStatus}>
                                <button 
                                    className='comments__buttom'
                                    > 
                                    Edit 
                                </button> 
                            </div>
                            <div className="post__option" onClick={this.openDeleteCommentModal}>
                                <button 
                                    className='comments__buttom'
                                    >Delete </button>
                            </div>
                        </div>
                    </div>
                
            </div>

        }

        

        return(
            <>
                {comment_body}
            </>
        )
    }
}

export default CommentIndexItem
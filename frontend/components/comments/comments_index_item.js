import React from 'react';
import { Avatar } from '@mui/material'

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
        
        console.log(comment);

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
   
    render(){
        const {comment, deleteComment, updateComment, fetchPosts, postId, currentUser,openModal} = this.props;
        // console.log(this.props.postId);
        // console.log(this.props.userId);
        // this.setState({
        //     post_id: this.props.postId,
        //     user_id: this.props.userId
        //   }) 

        let comment__menu = '';
        if(comment.user_id === currentUser.id){ 
            comment__menu = <p className="comments__menu"> ... </p>;
        }

        let comment_body = '';
        if (this.state.editstatus === 'edit'){
            comment_body = 
                <div className='comments__create' >
                    <Avatar src={comment.photoUrl}/>                 
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
                <div className="comments__item" >
                    <Avatar src={comment.photoUrl}/>                     
                    <div className ="comments__body">
                        <div  className='comments__body__top'>
                            <h3>{comment.fname +' ' + comment.lname}</h3>
                            <p>{comment.body}</p>  
                            
                        </div>
                        <div className='comments__body__bottom'>
                             <button className='comments__buttom'>Like </button> 
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
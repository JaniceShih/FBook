import React from 'react';
import { Avatar } from '@mui/material'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;
        // console.log(this.state);
    }
   
    render(){
        const {comment, deleteComment, fetchPosts} = this.props;
        // console.log(comment);
        return(
            <>
                <div className="comments__item" >
                    <Avatar />
                    
                    <div className ="comments__body">
                        <div  className='comments__body__top'>
                            <h3>{comment.fname}</h3>
                            <p>{comment.body}</p>   
                        </div>
                        <div className='comments__body__bottom'>
                        <button className='comments__buttom'>Like </button>                             <button className='comments__buttom'>Reply </button>      

                        </div>
                      
                    </div>
                    <p className="post__menu">...</p>

                    <div className="comments__item--menu">
                        <button className='comments__buttom'>Edit </button> 
                        
                        <button 
                            className='comments__buttom'
                            onClick={()=> {
                            deleteComment(comment.id)
                            fetchPosts()
                            } } >Delete </button>
                    </div>
                    
                </div>
               
               
            </>
        )
    }
}

export default CommentIndexItem
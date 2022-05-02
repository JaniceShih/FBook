import React from 'react';
import { Avatar } from '@mui/material'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: '',
            post_id: this.props.postId,
            user_id: this.props.userId
        }
        console.log(this.state);
    }
   
    render(){
        const {comment} = this.props;
        // console.log(comment);
        return(
            <>
                <div className="comments__item" >
                    <Avatar />
                    <p>{comment.fname}</p>
                    <p>{comment.body}</p>
                    
                </div>
                <div className="comments__item--menu">
                    <button>Edit</button> <button>Delete</button>
                </div>
            </>
        )
    }
}

export default CommentIndexItem
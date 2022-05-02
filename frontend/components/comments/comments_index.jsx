import React from 'react';
import { Avatar } from '@mui/material'

import CommentIndexItem from './comments_index_item';

   
class   CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
        // this.props.fetchComments();
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createComment(this.state);
    }

    update(field){
        return e =>(
          this.setState({
            [field]: e.currentTarget.value
          })    
        )      
    }
    

    render(){ 
        const {post, currentUser} = this.props;
        console.log(post.comments);
        
        return(
            <div className='comments'>  

                {
                    Object.values(post.comments).map((comment)=>
                        <CommentIndexItem 
                            comment={comment}
                            postId={post.id}
                            userId={currentUser.id}
                        />
                         
                    )
                }

            <div className='comments__create' >
                        <Avatar src={currentUser.photoUrl}/> 
                        
                            <input className='comments__input'
                                value={this.state.body}
                                placeholder={` Write a Comment... `} 
                                onChange={this.update('body')}
                                onClick={this.handleSubmit}/>                    
                                
                </div>  
            </div>
        )
    }
}

export default CommentIndex;
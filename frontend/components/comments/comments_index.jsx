import React from 'react';
import { Avatar } from '@mui/material'

import CommentIndexItem from './comments_index_item';

   
class   CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
        // this.props.fetchComments();
    }


    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state);
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
        // console.log(post.id)
        // console.log(currentUser.id)
        // this.setState({
        //     post_id: post.id,
        //     user_id: currentUser.id
        //   }) 


        return(
            <div className='comments'>  

                {
                    Object.values(post.comments).map((comment,idx)=>
                        <CommentIndexItem 
                            comment={comment}
                            postId={post.id}
                            userId={currentUser.id}
                            key ={idx}
                        />
                         
                    )
                }

            <div className='comments__create' >
                        <Avatar src={currentUser.photoUrl}/> 
                        <form>

                            <input className='comments__input'
                                value={this.state.body}
                                placeholder={" Write a Comment... "} 
                                onChange={this.update('body')}                            
                               />   
                            <button onClick={this.handleSubmit} type="submit">Hidden submit</button>   
                        </form>
                                         
                                
                </div>  
            </div>
        )
    }
}

export default CommentIndex;
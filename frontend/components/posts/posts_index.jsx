import React from 'react';
import PostIndexItem from './posts_index_item'
import MessageSender from '../header/message_sender'


class PostIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){      
        // debugger
        const {posts} = this.props;
        return(
            <div className='feed'>

                <MessageSender />
                {
                    posts.reverse().map(
                        allposts => 
                        Object.values(allposts).map(
                            (post,idx)=> 
                                <PostIndexItem 
                                    body={post.body} 
                                    image={post.photoURL} 
                                    updated_at={post.updated_at} 
                                    fname={post.fname} 
                                    key={idx}
                            />
                        )
                    )                    
                }
            </div>
        )
    }
}

export default PostIndex;
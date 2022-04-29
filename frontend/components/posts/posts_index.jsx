import React from 'react';
import PostIndexItem from './posts_index_item'
import CreatePostContainer from './create_post_container'


class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.posts
        }
    }

    componentDidMount(){
        // debugger
        this.props.fetchPosts();
    }

    render(){      
        // debugger        
        const {posts, deletePost} = this.props;
    
        return(
            <div className='feed'>               
                <div>
                     <CreatePostContainer />
                </div>
                <div>
                {
                    posts.reverse().map(
                        // post => 
                        // Object.values(allposts).map(
                            (post,idx)=> 
                                <PostIndexItem 
                                    post={post}
                                    deletePost = {deletePost}
                                    key ={idx}
                            />
                        // )
                    )                    
                }

                </div>
                
              
            </div>
        )
    }
}

export default PostIndex;
import React from 'react';
import PostIndexItem from './posts_index_item'
import CreatePostContainer from './create_post_container'


class PostIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }
    // componentDidUpdate(){
    //     this.props.fetchPosts();
    // }

    render(){      
        // debugger
        // console.log(this.props);
        const {posts} = this.props;
        return(
            <div className='feed'>

                <CreatePostContainer />
                {
                    posts.reverse().map(
                        allposts => 
                        Object.values(allposts).map(
                            (post,idx)=> 
                                <PostIndexItem 
                                    body={post.body} 
                                    image={post.photoUrl} 
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
import React from 'react'
import MessageSender from './message_sender'
import StoryReel from './storyreel'
import Post from'./post'
import PostIndexContainer from './../posts/posts_container'


class Feed extends React.Component{

  constructor(props){
    super(props);
    // debugger
    this.state ={
      posts: []
    }
    this.fetachPosts = this.fetachPosts.bind(this);
  }

  fetachPosts(){
    $.ajax({
      url: 'api/posts'
    }).then(
      posts =>{
        this.setState({posts})
      }
    )
  }

  componentDidMount(){
    this.fetachPosts();
  }
  
  render(){
    // debugger
    return(
      <div className='feed'>

      {/* <StoryReel />  */}
      <MessageSender />
      {this.state.posts.map((post,idx) => <Post body={post.body} image={post.photoURL} updated_at={post.updated_at} key={idx}/> )}
      {/* <PostIndexContainer /> */}

      </div>
    )
  }
}

export default Feed;
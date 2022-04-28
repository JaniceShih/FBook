import React from 'react'
import MessageSender from './message_sender'
import StoryReel from './storyreel'
import Post from'./post'

// function Feed() {
//   return (
//     <div className='feed'>
//         {/* <StoryReel /> */}
//         {/* <MessageSender />   */}
//         {/* <Post      
//         profilePic=""
//         message="a/A Ruby"
//         image="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/ruby/logo.png"
//         /> */}
//         <Post username={"Ruby"}/>
//         <Post username={"Rails"} />
//         <Post username={"JavaScript"} />
//         <Post username={"React/Redux"} />
   
//     </div>
//   )
// }

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
      {this.state.posts.map(post => <Post body={post.body} image={post.photoURL} updated_at={post.updated_at}/>)}
      </div>
    )
  }
}

export default Feed;
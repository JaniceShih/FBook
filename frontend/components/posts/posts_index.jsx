import React from 'react';
import PostIndexItem from './posts_index_item'
import StoryReel from '../feed/storyreel'

import { Avatar } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.posts
        }
        this.openCreatePostModal = this.openCreatePostModal.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchPosts();
    }

    componentDidUpdate(prevProps) {      
 
        // if (prevProps.posts !== this.state.posts) {
        //     console.log(prevProps.posts);
        //     // console.log("====");
        //     console.log(this.state.posts);

        //     // this.props.fetchPosts();
        // }else{
        //     console.log("same");

        // }
      }

    openCreatePostModal(e) {
        e.preventDefault();
        this.props.openModal({ type: 'create_post'
    });
    } 

    render(){          
        const {currentUser, posts, openModal} = this.props;
        const friendIds = [currentUser.id];
        Object.values(currentUser.followers).map(
            friend=> friendIds.push(friend.id));
        Object.values(currentUser.following).map(
            friend=> friendIds.push(friend.id));

        return(
            <div className='feed'> 
                {/* <StoryReel /> */}
                <div className='messagesender' >
                    <div className='messagesender__top' >
                        <Avatar src={currentUser.photoUrl}/> 
                        <div onClick={this.openCreatePostModal}
                            key="openCreatePostModal"
                            className='messagesender__input'>
                            What's on your mind? {currentUser.fname}
                        </div>          
                    </div>     

                    <div className='messagesender__buttom'>                    
                        <div className='messagesender__option'  onClick={this.openCreatePostModal}>
                            <PhotoLibraryIcon style={{color: "green"}} />
                            <h3>Photo/Video</h3>
                        </div>
                        <div className='messagesender__option'  onClick={this.openCreatePostModal}>
                            <InsertEmoticonIcon style={{color: "orange"}} />
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>
                </div>

                {
                    Object.values(posts).reverse().map(                      
                        (post,idx)=> 
                        <PostIndexItem 
                            post={post}
                            openModal ={openModal}
                            currentUser={currentUser}
                            friendIds = {friendIds}
                            key ={idx}
                         />                    
                    )                    
                }
            </div>
        )
    }
}

export default PostIndex;
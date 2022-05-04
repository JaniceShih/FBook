import React from 'react';
import PostIndexItem from './posts_index_item'


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
        // this.props.fetchComments();
    }

 
    openCreatePostModal(e) {
        e.preventDefault();
        this.props.openModal({ type: 'create_post'
    });
    } 

    render(){          
        const {currentUser, posts, openModal, user,fetchPosts, createLike, deleteLike, userId} = this.props;
        const friendIds = [currentUser.id];
        Object.values(currentUser.followers).map(
            friend=> friendIds.push(friend.id));
        Object.values(currentUser.following).map(
            friend=> friendIds.push(friend.id));

        
            let userImag =  <Avatar sx={{ height: '28px', width: '28px' }}
        /> 
        if(currentUser.photoUrl){
            userImag =  <img src={currentUser.photoUrl} className="avatar avatar--medium"/>           
        }


        return(
            
           <>
                <div className='messagesender' >
                    <div className='messagesender__top' >
                        {userImag}
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
                            fetchPosts={fetchPosts}
                            createLike={createLike}
                            deleteLike={deleteLike}
                            userId={userId}
                            key ={idx}
                         />                    
                    )                    
                }
            </>
        )
    }
}

export default PostIndex;
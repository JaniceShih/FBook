import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import SidebarContainer from './../sidebar/sidebar_container'
import FriendsContainer from  './../friends/friends_container'
import PostIndexContainer from "../posts/posts_index_container"
import StoryReel from '../feed/storyreel'


const FeedIndex = () => {
    return (
        <>
            <NavBarContainer />
 
            <div className="app app__body">
                <SidebarContainer /> 
                <div className='feed'> 
                     <StoryReel />               
                     <PostIndexContainer />
                </div>
                <FriendsContainer />
            </div> 
        </>
    )
}

export default FeedIndex;
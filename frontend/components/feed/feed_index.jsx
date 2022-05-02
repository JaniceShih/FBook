import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import SidebarContainer from './../sidebar/sidebar_container'
import FriendsContainer from  './../friends/friends_container'
import PostIndexContainer from "../posts/posts_index_container"


const FeedIndex = () => {
    return (
        <>
            <NavBarContainer />
 
            <div className="app app__body">
                <SidebarContainer />                
                <PostIndexContainer />
                <FriendsContainer />
            </div> 
        </>
    )
}

export default FeedIndex;
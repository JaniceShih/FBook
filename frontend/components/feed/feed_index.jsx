import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import Sidebar from './sidebar'
import FriendsList from './friend_list'
import PostIndexContainer from "../posts/posts_index_container"


const FeedIndex = () => {
    return (
        <>
            <NavBarContainer />
 
            <div className="app app__body">
                <Sidebar />                
                <PostIndexContainer />
                <FriendsList />
             </div> 
        </>
    )
}

export default FeedIndex;
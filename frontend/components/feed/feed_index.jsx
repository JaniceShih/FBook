import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

import Sidebar from './../header/sidebar'
import Feed from './../header/feed'
import FriendsList from './../header/friend_list'

const FeedIndex = (props) => {
    return (
        <>
              <NavBarContainer />
 
            <div className="app app__body">
                <Sidebar />
                <Feed />
                {/* widgets / Contacts */}

                <FriendsList />

             </div> 

            

        </>
    );
};

export default FeedIndex;
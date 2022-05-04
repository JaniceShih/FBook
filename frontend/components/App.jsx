import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container"
import FeedIndex from "./feed/feed_index"
import ProfileContainer from "./profile/profile_container";
// import FriendsContainer from "./profile/friends_container";
import ModalContainer from "./modal/modal_container";

const App = () => {
    return(
        <> 
           <ModalContainer />
           <ProtectedRoute exact path="/" component={FeedIndex}/>
           <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
           {/* <ProtectedRoute path="/users/:userId/friends" component={FriendsContainer} /> */}
           <AuthRoute path="/login" component={LoginFormContainer}/>            
        </>
    );
};

export default App;
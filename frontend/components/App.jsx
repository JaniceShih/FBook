import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container"
import FeedIndex from "./feed/feed_index"

const App = () => {
    return(
        <div>    
           <ProtectedRoute exact path="/" component={FeedIndex}/>
           <AuthRoute path="/login" component={LoginFormContainer}/>
        </div>
    );
};

export default App;
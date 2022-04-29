import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container"
import FeedIndex from "./feed/feed_index"
import ModalContainer from "./modal/modal_container";

import Header from "./header/header";
import Sidebar from './header/sidebar'
import Feed from './header/feed'


const App = () => {
    return(
        <>    

           <ModalContainer />
           <ProtectedRoute exact path="/" component={FeedIndex}/>
           <AuthRoute path="/login" component={LoginFormContainer}/>            
        </>
    );
};

export default App;
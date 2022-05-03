import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, logout, signup, receiveCurrentUser  } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    let store;
 
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser }
            },
            session: {currentUser: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    
    // for testing   
    // window.demouser= {fname: 'Demo', lname: 'User', email: 'demo@gmail.com', birthday: '2002-02-5', gender: 'Female',  bio: '', password: '123456'};

    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.receiveCurrentUser = receiveCurrentUser;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch; 


    ReactDOM.render(<Root store={store} />, root);

    let port = process.env.PORT || 8080;
})

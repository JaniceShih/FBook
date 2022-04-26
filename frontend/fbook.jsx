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
    window.demouser= {fname: 'demouser', lname: 'test', email: 'demouser.test@gmail.com', birthday: '2022-04-26', gender: 'Female',  bio: 'pre-K', password: '123456'};
    window.user = {email: 'shih.janice00@gmail.com', password: '123456' };
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.receiveCurrentUser = receiveCurrentUser;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    
    ReactDOM.render(<Root store={store} />, root);
})

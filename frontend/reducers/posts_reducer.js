import { RECEIVE_ALL_POST, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger

    switch (action.type) {
        case RECEIVE_ALL_POST:
            // debugger
            return Object.assign({}, state, action.posts)     
        case RECEIVE_POST:
            // debugger
           return Object.assign({}, state, {[action.post.id]: action.post});  
        case REMOVE_POST:
            // debugger
            let nextState = Object.assign({}, state);
            delete nextState[action.postId]
            return nextState;  
        default:
            return state;
    };
};

export default postsReducer;


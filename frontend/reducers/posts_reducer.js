import { RECEIVE_ALL_POST } from "../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_POST:
            return action.posts;
        default:
            return state;
    };
};

export default postsReducer;


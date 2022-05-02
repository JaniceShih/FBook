import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentIndex from './comments_index';


const mSTP = state =>({
    // posts: state.entities.posts,
    currentUser: state.entities.users[state.session.currentUser]    
})

const mDTP = dispatch =>({
    createComment: ()=> dispatch(createComment())
})

export default connect(mSTP, mDTP)(CommentIndex);

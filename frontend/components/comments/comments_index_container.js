import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentIndex from './comments_index';


const mSTP = state =>({
    comment: {
        body: '',
        post_id: null,
        user_id: null,
      },
    currentUser: state.entities.users[state.session.currentUser]    
})

const mDTP = dispatch =>({
    createComment: (comment)=> dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentIndex);

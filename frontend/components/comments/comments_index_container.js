import { connect } from 'react-redux';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import {fetchPosts} from  '../../actions/post_actions';
import CommentIndex from './comments_index';


const mSTP = state =>({
    // posts: state.entities.posts,
    // currentUser: state.entities.users[state.session.currentUser]   
    comments : state.entities.comments
})

const mDTP = dispatch =>({
    createComment: (comment)=> dispatch(createComment(comment)),
    deleteComment: (commentId)=> dispatch(deleteComment(commentId)),
    fetchComments: ()=>dispatch(fetchComments()), 
    fetchPosts: ()=>dispatch(fetchPosts()),
})

export default connect(mSTP, mDTP)(CommentIndex);

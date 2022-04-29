import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mSTP = state =>({
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser     
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts()),
    deletePost: (postId)=> dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex);

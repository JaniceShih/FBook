import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mSTP = state =>({
    posts: Object.values(state.entities.posts)
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex);

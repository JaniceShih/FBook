import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mSTP = state =>({
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser     
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex);

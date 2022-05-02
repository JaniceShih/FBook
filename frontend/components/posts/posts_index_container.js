import { connect } from 'react-redux';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import PostIndex from './posts_index';
import { openModal } from "../../actions/modal_actions";

const mSTP = state =>({
    posts: state.entities.posts,
    currentUser: state.session.currentUser     
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(PostIndex);

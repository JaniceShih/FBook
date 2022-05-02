import { connect } from 'react-redux';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import PostIndex from './posts_index';
import { openModal } from "../../actions/modal_actions";

const mSTP = state =>({
    posts: state.entities.posts,
    // followers: state.entities.users[state.session.id].followers,
    // following: state.entities.users[state.session.id].following,
    currentUser: state.entities.users[state.session.currentUser]    
})

const mDTP = dispatch =>({
    fetchPosts: ()=> dispatch(fetchPosts()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(PostIndex);

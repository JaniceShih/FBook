import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import MessageSender from './message_sender.js'

const mSTP = state =>({
    post: {
        title: '',
        body: '',
        user_id: state.session.currentUser 
    },
        
})

const mDTP = dispatch =>({
    createPost: (formData)=> dispatch(createPost(formData)),
    fetchPosts: ()=> dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(MessageSender);
import React from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../../actions/comment_actions';
import {fetchPosts} from  '../../actions/post_actions';
import { closeModal } from "../../actions/modal_actions";


class DelteComment extends React.Component {

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }
  

  render() {
    const {comment, deleteComment, closeModal} = this.props;
    console.log(comment);

    return (
        <div className='form__box from__delete'>   
        <div className="form__header">
            <h2 className="form__header--delete"> Delete? </h2>               
        </div>

        <div >
          <div onClick={closeModal} className="close-x">X</div> 
          <div> Items you delete can't be restored. </div>
          <form> 
              <div className='from__submit'>
                <div className='from__submit__delete'>
                    <button 
                        className="btn  btn--gray from__submit__delete--cancel" 
                        onClick={closeModal} > 
                        Cancel
                    </button>                         
                    <button 
                        className="btn btn--primary " 
                        onClick={() => deleteComment(comment.id).then(() => {
                            this.props.closeModal()
                            this.props.fetchPosts();
                            }
                        )} > 
                        Delete
                    </button>  
                </div>
             
              </div>  
                         
          </form>
        </div>  
        </div>
    )

  }
}

const mSTP = state =>({
    comment: state.ui.modal.comment
})

const mDTP = dispatch =>({
    closeModal: () => dispatch(closeModal()),
    fetchPosts: ()=>dispatch(fetchPosts()),
    deleteComment: (commentId)=> dispatch(deleteComment(commentId))
})

export default connect(mSTP, mDTP)(DelteComment);
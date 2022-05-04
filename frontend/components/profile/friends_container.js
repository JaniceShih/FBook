import React from 'react';
import { connect } from 'react-redux';


import FriendList from "../friends/friend_list"


class Friends extends React.Component {

  componentDidMount() {    
  } 

  render() {
    const {user} = this.props;
    console.log(user.followers);
    console.log(user.following);
    const freinds = [...user.followers, ...user.following];
    // console.log(freinds);
   

    return (
  
        <div>
             <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__top' >
                                Friends                        
                        </div>
                        <div className='friend__list'>
                        {
                            freinds.map(friend => <FriendList friend={friend} flexdirection='friendrow'/>) 
                        }   
                        </div>  
                                            
                    </div>
                </div>
        </div>     
    )
  }
}

const mSTP = (state, ownProps) =>{
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};


const mDTP = dispatch =>({
    
})

export default connect(mSTP, mDTP)(Friends);
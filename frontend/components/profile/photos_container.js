import React from 'react';
import { connect } from 'react-redux';



class Photos extends React.Component {

  componentDidMount() {
    
  }
  

  render() {

    

    return (
        <div>
        <div className='profile__sidebar--info'>
               <div className='profile__intro' >
                   
                   <div className='intro__top' >
                           Photos                                   
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
}

const mDTP = dispatch =>({
    
})

export default connect(mSTP, mDTP)(Photos);
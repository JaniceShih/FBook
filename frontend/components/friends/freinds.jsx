import React from 'react'
import FriendList from './friends_list'

function Friends(props) {
  const {currentUser} = props;
  return (
    <div className='friendslist'>
        <div className='ads'>
          <h3>Sponsored</h3>
          <div  className='ad'>
            <div className='ad__img'>
                <img src={window.aa}/>
            </div>
            <div className='ad__info'>
                  <h3>
                    Change your career. Change your life
                 </h3>
               
                 <p>
                   <a href='https://www.appacademy.io/' target='_blank'>
                      https://www.appacademy.io/  
                   </a>
                 </p>
                 
              </div>
          </div>
        </div>


        {
            currentUser.followers.map(
              (friend, idx)=> <FriendList  friend = {friend} key={idx}/>)
        }

{
          currentUser.following.map(
            (friend, idx)=> <FriendList  friend = {friend} key={idx}/>)
        }

    </div>
  )
}

export default Friends
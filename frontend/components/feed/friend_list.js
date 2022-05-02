import React from 'react'
import FriendRow from './friend_row'

function FriendsList() {
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
                      https://www.appacademy.io/
                 </p>
                 
              </div>
          </div>
        </div>
        
        <FriendRow  friendname='Ruby'/>
        <FriendRow  friendname='SQL' />     
        <FriendRow  friendname='Rails' />   
        <FriendRow  friendname='JavaScript' />   
        <FriendRow  friendname='React' />   
        <FriendRow  friendname='Redux' />   
       

    </div>
  )
}

export default FriendsList
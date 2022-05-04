import React from 'react'

import FriendList from "../friends/friend_list"

class ProfileSidebar extends React.Component{

    render(){

        const {user} = this.props;
        console.log(user.followers);
        console.log(user.following);
        const freinds = [...user.followers, ...user.following];
        
        return (

            <div className='profile__sidebar'>
                <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__top' >
                                Intro                                     
                        </div>  
                        <div className='intro__bottom' >
                             <button className='intro__input'>
                                 Add Bio
                              </button>                                       
                        </div>    

                       
                    </div>
                </div>
                <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__top' >
                                photos                                     
                        </div>  
                                            
                    </div>
                </div>

                <div className='profile__sidebar--info '>
                    <div className='profile__intro' >
                        
                        <div className='intro__top ' >
                            Friends

                            <div className='friend__list'>
                            {
                                freinds.map(friend => <FriendList friend={friend} flexdirection='friendcol'/>) 
                            }   
                            </div>  
                            
                        </div>  
                                            
                    </div>
                </div>
          
             </div>

        )
    }
}

export default ProfileSidebar;
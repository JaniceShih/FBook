import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import FriendList from "../friends/friend_list"

class ProfileSidebar extends React.Component{

    render(){

        const {user} = this.props;
        console.log(user.followers);
        console.log(user.following);
        let freinds = [...user.followers, ...user.following];
        
        return (

            <div className='profile__sidebar'>
                <div className='profile__sidebar--info'>
                    <div className='profile__intro' >
                        
                        <div className='intro__heading' >
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
                        
                        <div className='intro__header'>
                                <div className='intro__heading'>
                                     Photos
                                </div>
                                <div className='intro__link'>
                                    See all photos
                                </div>
                        </div>
                                            
                    </div>
                </div>

                <div className='profile__sidebar--info '>
                    <div className='profile__intro' >
                        
                        <div >
                            <div className='intro__header'>
                                <div className='intro__heading'>
                                     Friends 
                                </div>
                                <div className='intro__link'>
                                     <Link to={`/users/${user.id}/friends`}> See all friends </Link>
                                </div>
                            </div>
                            

                            <div className='friend__list'>
                            {
                                freinds.slice(0, 8).map(friend => <FriendList friend={friend} flexdirection='friendcol'/>) 
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
import React from 'react'
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../posts/posts_index_container"
import Avatar from '@mui/material/Avatar'; 

class Profile extends React.Component{
    
    render(){
        const {currentUser, user} = this.props;
        return (
            <>
                <NavBarContainer />
                <div className='profile'>
                     <div className='profile__top'> 
                        <div className="profile__coverpotp" >
                            <div className="profile__coverbar" >
                            </div>
                        </div>

                        <div className='profile__header'>
                            <div className='profile__img'>
                                <img src={user.photoUrl} className="avatar "/>
                            </div>
                            <div  className='profile__userinfo'>
                                <div className='profile__userinfo--name'><h1>{user.fname+` `+user.lname}</h1></div>
                                <div><p>?? Friends</p></div>
                                <div className='profile__userinfo--avatar'>
                                    <Avatar sx={{ height: '28px', width: '28px' }} />
                                    <Avatar sx={{ height: '28px', width: '28px' }} />
                                    <Avatar sx={{ height: '28px', width: '28px' }} />
                                    <Avatar sx={{ height: '28px', width: '28px' }} />

                                </div>
                            </div>
                            {/* <div>
                                edit profile
                            </div> */}
                            
                        </div>                    

                        <div  className='profile__navbar'>
                            <div className='profile__option header__option--active'>                                 
                                <Link to={`/users/${currentUser.id}`}>Posts</Link>
                            </div>
                            <div className='profile__option'> 
                                <Link to={`/users/${currentUser.id}/friends`}>Friends</Link>
                            </div>
                            <div className='profile__option'> 
                                Photos
                            </div>
                           
                        </div>
                     
                     </div>
                     <div className='profile__bottom'>
                        <div className='profile__body'>
                            <div className='profile__sidebar'>
                                <div className='profile__sidebar--info'>Info</div>
                                <div>Photos</div>
                                <div className='profile__sidebar--friends'>Friends</div>
                            </div>
                            <div className='profile__posts'>
                                <PostIndexContainer />
                            </div>

                        </div>
                     </div>
                    

                </div>
   

            </>
        )
    }

}

export default Profile
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../posts/posts_index_container"
import FriendsContainer from "./friends_container"
import PhotosContainer from "./photos_container"
import ProfileSidebar from "./propfile_sidebar"



import Avatar from '@mui/material/Avatar'; 


class Profile extends React.Component{
    
    render(){
        const {currentUser, user, url} = this.props;
        
        const params = url.split("/");
        const tagName = params[params.length -1];
        // console.log(user);
        // console.log(tagName);
        let userImag =  <Avatar className="story__avatar--white" sx={{ height: '178px', width: '178px' }}
        /> 

        if(user.photoUrl){
            userImag =  <img src={user.photoUrl} className="avatar"/>            
        }

        let profile__sidebar = '';
        if(tagName !== 'friends' && tagName !== 'photos'){
            // console.log("posts")
            profile__sidebar = 
               <ProfileSidebar user={user}/>
        }
        
        let postactive = "";
        let friendsactive = "";
        let photosactive = "";
        switch(tagName){
            case 'friends':
                friendsactive = "header__option--active";
                break
            case 'photos':
                photosactive = "header__option--active";
                break
            default:
                postactive = "header__option--active";
        }

   
        console.log(user.followers);
        console.log(user.following);
        const freinds = [...user.followers, ...user.following];



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
                                {userImag}
                            </div>
                            <div  className='profile__userinfo'>
                                <div className='profile__userinfo--name'><h1>{user.fname+` `+user.lname}</h1></div>
                                <div><p>{freinds.length} Friends</p></div>
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
                    
                            <div className={`profile__option  ${postactive}`}>                                 
                                <Link to={`/users/${currentUser.id}`}> Posts </Link>
                            </div>
                       
                            <div className={`profile__option  ${friendsactive}`}> 
                                <Link to={`/users/${currentUser.id}/friends`}> Friends </Link>
                            </div>
                         
                            <div className={`profile__option  ${photosactive}`}> 
                                 <Link to={`/users/${currentUser.id}/photos`}> Photos </Link>
                            </div>
                           
                        </div>
                     
                     </div>
                     <div className='profile__bottom'>
                        <div className='profile__body'>
                            {profile__sidebar}
                            <div className='profile__posts'>
                                <Switch>                              
                                    <Route path="/users/:userId/friends" component={FriendsContainer} />
                                    <Route path="/users/:userId/photos" component={PhotosContainer} />
                                    <Route path="/users/:userId" component={PostIndexContainer} />
                                </Switch>
                               
                            </div>

                        </div>
                     </div>
                    

                </div>
   

            </>
        )
    }

}

export default Profile
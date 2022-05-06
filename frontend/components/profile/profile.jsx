import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../posts/posts_index_container"
import FriendsContainer from "./friends_container"
import PhotosContainer from "./photos_container"
import ProfileSidebar from "./propfile_sidebar"
import Avatar from '@mui/material/Avatar'; 
import EditIcon from '@mui/icons-material/Edit';

class Profile extends React.Component{

    constructor(props){
        super(props);
       
        this.openEditProfileModal = this.openEditProfileModal.bind(this);
    }

    openEditProfileModal(e){
        e.preventDefault();
        this.props.openModal({ type: 'edit_profile', user: this.props.user });
       }
    
    render(){
        const {currentUser, user, url, posts, updateUser} = this.props;        
        const params = url.split("/");
        const tagName = params[params.length -1];

        // console.log(user);

        let userImag =  <Avatar 
                            className="story__avatar--white" sx={{ height: '178px', width: '178px' }} /> 

        if(user.photoUrl){
            userImag =  <img src={user.photoUrl} 
                            className="avatar"/>            
        }

        let profile__sidebar = '';
        if(tagName !== 'friends' && tagName !== 'photos'){  
            profile__sidebar = 
               <ProfileSidebar user={user} posts={posts} updateUser={updateUser} />
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

        const freinds = [...user.followers, ...user.following];

        const photos = [];
        Object.values(posts).map(post => {       
             if(post.user_id === user.id) 
                {photos.push(post.photoUrl)} 
            })
        //  console.log(photos);

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
                                <div className='profile__userinfo--name'>
                                    <h1>{user.fname+` `+user.lname}</h1>
                                </div>
                                <div>
                                    <p>{freinds.length} Friends </p>
                                </div>
                            </div>
                            <div className='profile__userinfo--edit'>
                             
                                    <button className="intro__input btn--primary"onClick={this.openEditProfileModal}> 
                                    <EditIcon /> Edit Profile
                                    </button>

                            </div>
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
                                    <Route path="/users/:userId/friends" 
                                        component={FriendsContainer }/>
                                    <Route path="/users/:userId/photos" 
                                        component={PhotosContainer} />
                                    <Route path="/users/:userId" 
                                        component={PostIndexContainer} />
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
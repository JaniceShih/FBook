import React from 'react'
import SidebarItem from './sidebar_item'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import { Avatar } from '@mui/material'

function SideBar(props) {
    const {currentUser} = props;
    // console.log(currentUser.fname);
    // const photoUrl = (currentUser.photoUrl) ? currentUser.photoUrl : 'none';

    let userImag =  <Avatar sx={{ height: '28px', width: '28px' }}
            /> ;
   
    if(currentUser.photoUrl){
        userImag =  <img src={currentUser.photoUrl} className="avatar avatar--small"/>            
    }

    return (
        <div className='sidebar'>
            {/* <SidebarItem src={photoUrl} title={currentUser.fname+' '+ currentUser.lname}/>  */}
            <div className='sidebarrow'>
                {userImag}
                <h4>{currentUser.fname+' '+ currentUser.lname}</h4>
            </div>  
            {/* <SidebarItem Icon={PeopleIcon} title='Friends' />               */}

            <SidebarItem Icon={ExpandMoreIcon} title=' Future Function' currentUser = {currentUser}/>  
            <SidebarItem Icon={LocalHospitalIcon} title='COVID-19 Tracker' currentUser = {currentUser}/>
            <SidebarItem Icon={SupervisedUserCircleRoundedIcon} title='Friends' currentUser = {currentUser}/>
            <SidebarItem Icon={ChatIcon} title='Messenger' currentUser = {currentUser}/>   
            <SidebarItem Icon={StorefrontIcon} title='Marketplace' currentUser = {currentUser}/>   
            <SidebarItem Icon={VideoLibraryIcon} title='Videos' currentUser = {currentUser}/>   
            <SidebarItem Icon={EmojiFlagsIcon} title='Pages' currentUser = {currentUser}/> 
            

        </div>
    )
}

export default SideBar
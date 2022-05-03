import React from 'react'
import SidebarItem from './sidebar_item'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material'

function SideBar(props) {
    const {currentUser} = props;
    // console.log(currentUser.fname);
    // const photoUrl = (currentUser.photoUrl) ? currentUser.photoUrl : 'none';
    return (
        <div className='sidebar'>
            {/* <SidebarItem src={photoUrl} title={currentUser.fname+' '+ currentUser.lname}/>  */}
            <div className='sidebarrow'>
                <Avatar src={currentUser.photoUrl} sx={{ height: '28px', width: '28px' }}/>
                <h4>{currentUser.fname+' '+ currentUser.lname}</h4>
            </div>  
            <SidebarItem Icon={LocalHospitalIcon} title='COVID-19 Tracker'/>
            <SidebarItem Icon={EmojiFlagsIcon} title='Pages' />     
            <SidebarItem Icon={PeopleIcon} title='Friends' />   
            <SidebarItem Icon={ChatIcon} title='Messenger' />   
            <SidebarItem Icon={StorefrontIcon} title='Marketplace' />   
            <SidebarItem Icon={VideoLibraryIcon} title='Videos' />   
            <SidebarItem Icon={ExpandMoreIcon} title='More' />   

        </div>
    )
}

export default SideBar
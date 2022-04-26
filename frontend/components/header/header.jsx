import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';

import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
        <div  className='header__left'>
            <img src={window.jacebook} />
            <div className='header__input'>
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div  className='header__middle'>
            <div className='header__option'> 
                <HomeIcon  fontSize="large" />
            </div>
            <div className='header__option'> 
                <FlagIcon  fontSize="large" />
            </div>
            <div className='header__option'> 
                <SubscriptionsOutlinedIcon  fontSize="large" />
            </div>
            <div className='header__option'> 
                <StorefrontOutlinedIcon  fontSize="large" />
            </div>
            <div className='header__option'>              
                <SupervisedUserCircleRoundedIcon  fontSize="large" />
            </div>
        </div>

        <div  className='header__right'>
            <div className="header_info">
                <Avatar />
                <h4>a/Astuent</h4>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                    </IconButton>
                <IconButton>                    
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Header;
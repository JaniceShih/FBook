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
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
    return (
        <div className='header'>
            <div  className='header__left'>
                <img src={window.jacebook} />
                <div className='header__input'>
                    <SearchIcon />
                    <input type="text" placeholder='Search JsceBook'/>
                </div>
            </div>

            <div  className='header__center'>
                <div className='header__option header__option--active'> 
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
                <div className="header__info">
                    <Avatar src={window.demouserimg}/>
                    <h4>a/A student</h4>

                    <IconButton >
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
                    <IconButton>                    
                            <a onClick={this.props.logout}> <ExitToAppRoundedIcon /> </a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
    }
}

export default Header;
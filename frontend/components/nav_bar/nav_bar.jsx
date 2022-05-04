import React from 'react'
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';

import Avatar from '@mui/material/Avatar';

// import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {currentUser} = this.props;

        let userImag =  <Avatar sx={{ height: '28px', width: '28px' }}
            /> 
        if(currentUser.photoUrl){
            userImag =  <img src={currentUser.photoUrl} className="avatar avatar--small"/>            
        }

   
        return (
            <div className='header'>
                <div  className='header__left'>

                    <Link to="/"><img src={window.jacebook} className="header__logo"/></Link>
                    
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
                        <Link to={`/users/${currentUser.id}`}>                            
                            <div className="header__info--user"> 
                                {userImag}
                                {currentUser.fname}
                            </div>
                        </Link>
                        <div className='header__info--option'>
                                <AddIcon sx={{fontSize: 25 }}/>
                        </div>
                        <div className='header__info--option'>
                            <ForumIcon sx={{fontSize: 25 }}/>
                        </div>
                        <div className='header__info--option'>
                            <NotificationsActiveIcon sx={{fontSize: 25 }}/>
                        </div>
                        <div className='header__info--option'>
                            <ExpandMoreIcon sx={{fontSize: 25 }}/>
                        </div>
                        <div className='header__info--option'>
                            <a onClick={this.props.logout}> <ExitToAppRoundedIcon sx={{fontSize: 25 }}/> </a>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
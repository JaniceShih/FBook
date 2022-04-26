import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
// import GroupsIcon from '@mui/icons-material/Groups';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
// import AirplayIcon from '@mui/icons-material/Airplay';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {

        return(
            <nav className="nav">
               
                <img className="nav__logo" src={window.jacebook} />
                <ul className="list nav__list collapsible__content">
                    <li className="nav__item"><a><HomeOutlinedIcon sx={{ fontSize: 35 }} /></a> </li>
                    <li className="nav__item"><SubscriptionsOutlinedIcon sx={{ fontSize: 35 }} /></li>
                    <li className="nav__item"><StorefrontIcon sx={{ fontSize: 35 }} /></li>
                    <li className="nav__item"><SupervisedUserCircleRoundedIcon sx={{ fontSize: 35 }} /></li>
                    <li className="nav__item"><AutoAwesomeMosaicOutlinedIcon sx={{ fontSize: 35 }} /></li>
                </ul>  
                <div  className="nav__right">
                    {/* <AccountCircleRoundedIcon sx={{ fontSize: 35 }} /> */}
                    
                        <Avatar src={window.demouserimg}  sx={{ width: 35, height: 35 }} />  {this.props.currentUser.fname}
                    
                        <IconButton>
                            <AddIcon sx={{ fontSize: 28 }}/>
                        </IconButton>
                        <IconButton>
                            <ForumIcon sx={{ fontSize: 28 }}/>
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon sx={{ fontSize: 28 }}/>
                            </IconButton>
                        <IconButton>                    
                            <ExpandMoreIcon sx={{ fontSize: 28 }}/>
                        </IconButton>
                        <IconButton>                    
                        <a onClick={this.props.logout}> <ExitToAppRoundedIcon sx={{ fontSize: 28 }}/> </a>
                        </IconButton>
                    
                </div>               
            </nav>
        );
    };
};

export default NavBar;
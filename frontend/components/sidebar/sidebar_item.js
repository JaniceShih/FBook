
import React from 'react'
import { Link} from 'react-router-dom';

function SidebarItem({src, Icon, title, currentUser}) {
  return (
    <div className='sidebarrow'>
        {/* {src && <Avatar src={src} />} */}     
        {Icon && <Icon />}
        {/* <Link to={`/users/${currentUser.id}/friends`}> */}
        <h4>{title}</h4>
        {/* </Link> */}
    </div>
  )
}

export default SidebarItem

import React from 'react'
import { Link} from 'react-router-dom';

function SidebarItem({src, Icon, title, currentUser, linkurl}) {
  let show = <h4>{title}</h4>   

  if(linkurl){
    show = <Link to={linkurl}><h4>{title}</h4></Link>  
  }

  return (
    <div className='sidebarrow'>           
        {Icon && <Icon />}
        {show}
    </div>
  )
}

export default SidebarItem
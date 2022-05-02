import { Avatar } from '@mui/material'
import React from 'react'

function SidebarItem({src, Icon, title}) {
  return (
    <div className='sidebarrow'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarItem
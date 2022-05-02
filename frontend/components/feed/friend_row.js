import { Avatar } from '@mui/material'
import React from 'react'

function FriendRow({src, friendname}) {
  return (
    <div className='sidebarrow'>
        <Avatar />
        <h4>{friendname}</h4>
    </div>
  )
}

export default FriendRow
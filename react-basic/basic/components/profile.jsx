import React from 'react'
import Avatar from './avatar.jsx'

export default function profile({image, name, title, isNew}) {
  return (
    <div className='profile'>
        <Avatar image={image} isNew = {isNew}/>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

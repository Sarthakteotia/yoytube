import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Music" />
      <Button name="Sports" />
      <Button name="Movies" />
      <Button name="GA" />
      <Button name="Current Affairs" />
      <Button name="News" />
      <Button name="Gaming" />
    </div>
  )
}

export default ButtonList;
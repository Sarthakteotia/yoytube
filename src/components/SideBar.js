import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return( 
  <div className='p-2 m-2'>
    <h1 className='font-bold'>Subscription</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li>Live</li>
      <li>Music</li>
      <li>Movies</li>
      <li>News</li>
      <li>Gaming</li>
    </ul>
    <h1 className='pt-4 font-bold'>Watch Later</h1>
    <ul>
    <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
      <li>History</li>
    </ul>
  </div>
  )
}

export default SideBar
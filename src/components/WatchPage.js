import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
 const [searchParams] = useSearchParams()
 console.log(searchParams.get("v"))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
  return (
    <div>
    <div className='px-5'>
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
    </div>
    <div className='p-2 m-2'>
      <CommentsContainer />
    </div>
    </div>
  )
}

export default WatchPage;
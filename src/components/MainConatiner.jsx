import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainConatiner = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  
  
  return (
    <div className='w-full h-full
      '  >
      <VideoBackground />
      <VideoTitle />

    </div>
  )
}

export default MainConatiner

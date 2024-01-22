import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugeestion from './GptMovieSugeestion'
import { BG_IMAGE } from '../utils/contants'

const GptSearch = () => {
  return (
    <div>
        <div className="w-full h-screen fixed -z-10">
        <img
          className="h-[100%] object-cover lg:w-full"
          src={BG_IMAGE}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSugeestion />
    </div>
  )
}

export default GptSearch

import React, { useEffect, useState } from 'react'
import { getPopularMovies } from '../../pages/Home/services/getPopularMovies';

const Main = () => {
    const [movies, setMovies]=useState();
    useEffect(()=>{
      setMovies(getPopularMovies());
    },[])
console.log(movies)
  return (
    <div>Main</div>
  )
}

export default Main
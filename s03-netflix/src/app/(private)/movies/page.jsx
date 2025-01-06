import React from 'react'
import MovieSection1 from './components/MovieSection1';
import MovieSection2 from './components/MovieSection2';

const Movies = () => {
  return (
    
    <div>
      {/* ilk film dizisinin ilk videosunu basacağız */}
      <MovieSection1/>

      {/* 4 çeşit url ile 4 kere alttaki comp. lere 4 satır film basacağız, type ine bağlı olarak */}
      <MovieSection2 title="TOP_RATED" type="top_rated" />
      <MovieSection2 title="UPCOMING" type="upcoming" />
      <MovieSection2 title="NOW_PLAYING" type="now_playing" />
      <MovieSection2 title="POPULAR" type="popular" />
    </div>
  )
}

export default Movies;
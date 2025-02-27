import { getirMovies, getirVideoKey } from '@/helpers/movieFunctions'
import React from 'react'

const MovieSection1 = async () => {

  // now_playing e ait filmler geldi
  const filmler = await getirMovies("now_playing")
  
  // üstte gelen filmlerin ilkinin id sini videokey için altta kullandık
  const videoKey = await getirVideoKey(filmler[0].id)

  return (
    <div className="relative h-[50vw]">
      <div className="w-10/12 lg:w-full mx-auto">
        <div
          className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
          style={{ paddingTop: "50%" }}
        >
          <iframe
            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>

      <div className="absolute top-[30%] ml-4 md:ml-16">
      
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {filmler[0].title}
        </p>

        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {filmler[0].overview}
        </p>    
        
      </div>
    </div>
  )
}

export default MovieSection1
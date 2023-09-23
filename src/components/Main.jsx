import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request'

const Main = () => {
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.requestPopular)
      const data = response.data
      const finalResult = data.results
      setMovies(finalResult)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <div className="absolute w-full  p-4 md:p-8 top-[30%] ">
          <h1 className="text-3xl  md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
            <p className="mt-2 text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:maz-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
              {movie?.overview.length > 150
                ? movie?.overview.substring(1, 150) + '...'
                : movie?.overview}
            </p>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  )
}

export default Main

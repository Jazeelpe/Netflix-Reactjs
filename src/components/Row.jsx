import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'

const Row = ({ title, fetchdata, RowId }) => {
  const [movieData, setMovieData] = useState([])

  const fetchUrl = async () => {
    try {
      const response = await axios(fetchdata)
      const data = response.data.results
      setMovieData(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchUrl()
  }, [fetchUrl])

  const slideLeft = () => {
    let element = document.getElementById('slider' + RowId)
    element.scrollLeft -= 500
  }

  const slideRight = () => {
    let element = document.getElementById('slider' + RowId)
    element.scrollLeft += 500
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={'slider' + RowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movieData.map((item, id) => {
            return <Movie key={id} item={item} />
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  )
}

export default Row

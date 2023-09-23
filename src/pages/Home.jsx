import React, { useEffect } from 'react'
import axios from 'axios'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main />


      <Row RowId="1" title={'Upcoming'} fetchdata={requests.requestUpcoming} />
      <Row RowId="2" title={'Popular'} fetchdata={requests.requestPopular} />
      <Row RowId="3" title={'Trending'} fetchdata={requests.requestTrending} />
      <Row RowId="4" title={'TopRated'} fetchdata={requests.requestTopRated} />
      <Row RowId="5" title={'Horror'} fetchdata={requests.requestHorror} />
    </>
  )
}

export default Home

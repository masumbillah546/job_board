import React from 'react'
import Container from 'react-bootstrap/Container'
import SliderBanner from './components/SliderBanner'
//
import Categories from './components/Categories'
import SearchJob from './components/SearchJob'

function Home() {

  return (
    <>
      <Container fluid className='p-0'>
        <SearchJob />
        <SliderBanner />
        <Categories />
      </Container>
    </>
  )
}

export default Home

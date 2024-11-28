import React from 'react'
import Container from 'react-bootstrap/Container'
import SliderBanner from './components/SliderBanner'
import { Puff, ThreeDots } from 'react-loader-spinner'
//
import Categories from './components/Categories'
import SearchJob from './components/SearchJob'

function Home() {
  const [loading, setLoading] = React.useState(true)
  const [homePageData, setHomePageData] = React.useState({})

  React.useEffect(() => {
    getHomePageData()
  }, [])
  const getHomePageData = async () => {
    setLoading(true)
    try {
      // const response = await HomePageService.getHomePageData()
      // setHomePageData(response)
      // console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Container fluid className='p-0'>
        <SearchJob />
        <SliderBanner />
        <Categories />
      </Container>

      {/* {loading && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: 10000,
          }}
          className='d-flex justify-content-center align-items-center flex-column bg-body'
        >
          <ThreeDots
            visible={true}
            height='80'
            width='80'
            color='#4fa94d'
            radius='9'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )} */}
    </>
  )
}

export default Home

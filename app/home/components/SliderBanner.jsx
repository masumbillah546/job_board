"use client"
// import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import MainBanner from '../../../assets/images/home/banner.jpg'
// import ControlLeftIcon from '../../../assets/icons/common/control-left-2.svg'
// import ControlRightIcon from '../../../assets/icons/common/control-right-2.svg'
import { CLASSES } from '../../../assets/styles/styles'
// import { IMAGE_URL } from '../../../utils/constants'
// featuredJobs.js
export const featuredJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Remote",
    image: "https://via.placeholder.com/600x200",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    image: "https://via.placeholder.com/600x200",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, NY",
    image: "https://via.placeholder.com/600x200",
  },
];

function SliderBanner({ data = featuredJobs }) {
  // const [index, setIndex] = useState(0)

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex)
  // }

  return (
    <Carousel
      // activeIndex={index}
      hidden={false}
      indicators
      // onSlide={handleSelect}
      // onSelect={handleSelect}
      // prevIcon={
      //   <Image
      //     style={{
      //       width: 70,
      //       height: 70,
      //       backgroundColor: 'green',
      //       borderRadius: '50%',
      //     }}
      //     src={ControlLeftIcon}
      //   />
      // }
      // nextIcon={
      //   <Image
      //     style={{
      //       width: 70,
      //       height: 70,
      //       backgroundColor: 'green',
      //       borderRadius: '50%',
      //     }}
      //     src={ControlRightIcon}
      //   />
      // }
    >
      {data.map((banner, i) => (
        <Carousel.Item key={banner.id} className='position-relative bg-danger'>
          <Image
            style={{ aspectRatio: 16 / 9, width: '100%', objectFit: 'cover' }}
            src={banner.image}
          />
          <div
            className={CLASSES.content_center}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              zIndex: 1,
            }}
          >
            <Container>
              <Row
                style={{
                  // backgroundColor: '#3737374D',
                  // backgroundImage:
                  //   'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))',
                  // borderRadius: 10,
                  // maxWidth: 1000,
                }}
              >
                <Col md={10} className='p-4 px-5'>
                  <h1
                    style={{
                      color: 'white',
                      fontFamily: 'KaushanScript-Regular',
                    }}
                  >
                    {banner.title}
                  </h1>
                  <p
                    style={{
                      color: 'rgba(73, 73, 73, 1)',
                      fontSize: 18,
                      color: 'white',
                    }}
                  >
                    {banner.company}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default SliderBanner

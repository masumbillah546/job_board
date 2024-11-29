'use client'
import { useCallback, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CLASSES } from '../../../assets/styles/styles'
import { useTheme } from '../../../context/ThemeContext'

function SliderBanner() {
  const { theme } = useTheme()

  const [loading, setLoading] = useState(true)
  const [jobPosts, setJobPosts] = useState([])

  const getData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/jobs?featured=1',
      ) // Replace with your API URL
      const data = await res.json()
      if (data) {
        setJobPosts(data.currentJobs)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])
  return (
    <Carousel hidden={false} indicators>
      {jobPosts.map((job) => (
        <Carousel.Item
          key={job.id}
          className={`position-relative`}
          style={{backgroundColor:'gray' }}
        >
          <div
            className={CLASSES.content_center}
            style={{
              top: 0,
              zIndex: 1,
              aspectRatio: 16 / 6,
              width: '100%',
            }}
          >
            <Container>
              <Row className='justify-content-center'>
                <Col md={10} className='p-4 px-5 '>
                  <h2>{job.title}</h2>
                  <h4>{job.company}</h4>
                  <h5>{job.location}</h5>
                  <p>{job.description}</p>
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

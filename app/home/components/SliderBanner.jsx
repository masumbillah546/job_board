'use client'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CLASSES } from '../../../assets/styles/styles'
import { useTheme } from '../../../context/ThemeContext'

export const featuredJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    image: 'https://via.placeholder.com/600x200',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'San Francisco, CA',
    image: 'https://via.placeholder.com/600x200',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'New York, NY',
    image: 'https://via.placeholder.com/600x200',
  },
]

function SliderBanner({ data = featuredJobs }) {
  const { theme } = useTheme()
  return (
    <Carousel hidden={false} indicators>
      {data.map((banner) => (
        <Carousel.Item
          key={banner.id}
          className={`position-relative bg-${theme}`}
        >
          <div
            className={CLASSES.content_center}
            style={{
              top: 0,
              zIndex: 1,
              aspectRatio: 16 / 7,
              width: '100%',
            }}
          >
            <Container>
              <Row>
                <Col md={10} className='p-4 px-5 text-center'>
                  <h1>{banner.title}</h1>
                  <p>{banner.company}</p>
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
